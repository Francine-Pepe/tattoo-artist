import React, { type ChangeEvent, useEffect, useState } from "react";
import { format, setHours, setMinutes } from "date-fns";
import { DayPicker } from "react-day-picker";
import "react-day-picker/dist/style.css";

import { useImagePreview } from "../hooks/useImagePreview";
import { type AppointmentFormData } from "../types/index";
import { MAX_FILE_SIZE } from "../constants";
import { createThumbnail, compressImageForBase64 } from "../utils/imageUtils";
import { escapeForTemplate } from "../utils/templateUtils";
import { ImageUploadService } from "../services/imageUploadService";
import { EmailService } from "../services/emailService";
import { FileUploadArea } from "./dateTimePicker/FileUploadArea";
import { FilePreview } from "./dateTimePicker/FilePreview";
import { SubmitButton } from "./dateTimePicker/SubmitButton";
import "./dateTimePicker/styles.css";

export const DateTimePicker: React.FC = () => {
  // State
  const [selectedDate, setSelectedDate] = useState<Date>();
  const [timeValue, setTimeValue] = useState("00:00");
  const [formData, setFormData] = useState<AppointmentFormData>({
    clientName: "",
    clientEmail: "",
    clientPhone: "",
    tattooPlace: "",
    tattooSize: "",
  });
  const [loading, setLoading] = useState(false);

  // Custom hooks
  const { imageState, setImage, removeImage } = useImagePreview();

  // Effects
  useEffect(() => {
    if (selectedDate) setTimeValue(format(selectedDate, "HH:mm"));
  }, [selectedDate]);

  // Handlers
  const handleTimeChange = (e: ChangeEvent<HTMLInputElement>) => {
    const time = e.target.value;
    setTimeValue(time);
    if (!selectedDate) return;

    const [hours, minutes] = time.split(":").map(Number);
    setSelectedDate(setHours(setMinutes(selectedDate, minutes), hours));
  };

  const handleDaySelect = (date: Date | undefined) => {
    if (!date) {
      setSelectedDate(undefined);
      return;
    }

    if (!timeValue) {
      setSelectedDate(date);
      return;
    }

    const [hours, minutes] = timeValue.split(":").map(Number);
    setSelectedDate(
      new Date(
        date.getFullYear(),
        date.getMonth(),
        date.getDate(),
        hours,
        minutes
      )
    );
  };

  const handleInputChange =
    (field: keyof AppointmentFormData) =>
    (e: ChangeEvent<HTMLInputElement>) => {
      setFormData((prev) => ({ ...prev, [field]: e.target.value }));
    };

  const handleImageChange = async (e: ChangeEvent<HTMLInputElement>) => {
    const file = e.target.files?.[0];
    if (!file || !file.type.startsWith("image/")) return;

    if (file.size > MAX_FILE_SIZE) {
      alert("Image size should be less than 2MB.");
      return;
    }

    const preview = URL.createObjectURL(file);
    const thumbnail = await createThumbnail(file, 200, 200); // Hardcode or get from constants

    setImage(file, preview, thumbnail);
  };

  const validateForm = (): boolean => {
    return Boolean(
      selectedDate &&
        imageState.file &&
        Object.values(formData).every((value) => value.trim())
    );
  };

  const generateImageHtml = async (): Promise<{
    html: string;
    method: string;
  }> => {
    if (!imageState.file) throw new Error("No image file");

    // Try ImgBB upload first
    try {
      const imageUrl = await ImageUploadService.uploadToImgBB(imageState.file);
      return {
        html: `
          <div style="text-align: center; margin: 20px 0;">
            <a href="${imageUrl}" target="_blank">
              <img 
                src="${imageUrl}" 
                alt="Tattoo Reference: ${imageState.file.name}"
                style="max-width: 400px; max-height: 400px; border: 1px solid #ddd; border-radius: 8px;"
                onerror="this.onerror=null; this.style.display='none'; this.parentElement.innerHTML='<p style=\'color:red; padding:10px;\'>Image failed to load. <a href=\\\'${imageUrl}\\\' target=\\\'_blank\\\'>Click here to view</a></p>';"
              >
            </a>
            <p style="font-size: 12px; color: #666; margin-top: 5px;">
              <strong>📎</strong> <a href="${imageUrl}" target="_blank">Click to open image in new tab</a>
            </p>
          </div>
        `,
        method: "uploaded",
      };
    } catch {
      // Try base64 compression as fallback
      try {
        const imageBase64 = await compressImageForBase64(imageState.file);
        return {
          html: `
            <div style="text-align: center; margin: 20px 0;">
              <img 
                src="${imageBase64}" 
                alt="Tattoo Reference: ${imageState.file.name}"
                style="max-width: 400px; max-height: 400px; border: 1px solid #ddd; border-radius: 8px;"
              >
              <p style="font-size: 12px; color: #666; margin-top: 5px;">
                Image embedded in email (may not display in some email clients)
              </p>
            </div>
          `,
          method: "embedded",
        };
      } catch {
        // Final fallback
        return {
          html: `
            <div style="background: #f0f8ff; padding: 15px; border-radius: 8px; margin: 20px 0;">
              <p style="margin: 0; color: #2196F3;">
                <strong>📎 Reference Image:</strong> ${
                  imageState.file.name
                } (${Math.round(imageState.file.size / 1024)}KB)
              </p>
              <p style="margin: 5px 0 0 0; font-size: 14px; color: #666;">
                The client uploaded a reference image. Please reply to this email to request the image.
              </p>
            </div>
          `,
          method: "fallback",
        };
      }
    }
  };

  const handleSubmit = async () => {
    if (!validateForm()) {
      alert("Please fill all required fields.");
      return;
    }

    setLoading(true);

    try {
      const imageData = await generateImageHtml();

      const templateParams = {
        client_name: escapeForTemplate(formData.clientName),
        client_email: escapeForTemplate(formData.clientEmail),
        client_phone: escapeForTemplate(formData.clientPhone),
        appointment_date: selectedDate!.toLocaleDateString("en-GB"),
        appointment_time: timeValue,
        tattoo_place: escapeForTemplate(formData.tattooPlace),
        tattoo_size: escapeForTemplate(formData.tattooSize),
        image_html: imageData.html,
        image_filename: escapeForTemplate(imageState.file!.name),
        file_size: `${Math.round(imageState.file!.size / 1024)}KB`,
        image_method: imageData.method,
        submitted_at: new Date().toLocaleString("en-GB", {
          weekday: "short",
          year: "numeric",
          month: "short",
          day: "numeric",
          hour: "2-digit",
          minute: "2-digit",
        }),
        contact_note: `Please contact ${formData.clientName} at ${formData.clientEmail} or ${formData.clientPhone} to confirm this appointment.`,
      };

      const result = await EmailService.sendAppointmentEmail(templateParams);

      if (result.status === 200) {
        alert(
          "✅ Appointment request sent successfully! The artist will contact you soon."
        );
        resetForm();
      } else {
        throw new Error(`Email failed with status: ${result.status}`);
      }
    } catch (error: any) {
      handleSubmissionError(error);
    } finally {
      setLoading(false);
    }
  };

  const handleSubmissionError = (error: any) => {
    console.error("Error sending appointment:", error);

    if (error.message?.includes("413") || error.message?.includes("50Kb")) {
      alert("The image is too large. Please try a smaller image (under 1MB).");
    } else if (error.message?.includes("Network Error")) {
      alert("Network error. Please check your connection and try again.");
    } else if (error.message?.includes("Image too large")) {
      alert("Image is too large. Please select a smaller image.");
    } else {
      alert(`Failed to send request: ${error.message || "Please try again."}`);
    }
  };

  const resetForm = () => {
    setSelectedDate(undefined);
    setTimeValue("00:00");
    removeImage();
    setFormData({
      clientName: "",
      clientEmail: "",
      clientPhone: "",
      tattooPlace: "",
      tattooSize: "",
    });
  };

  const triggerFileInput = () => {
    document.getElementById("file-input")?.click();
  };

  const inputFields = [
    {
      key: "clientName" as const,
      type: "text",
      placeholder: "Your Full Name *",
    },
    { key: "clientEmail" as const, type: "email", placeholder: "Your Email *" },
    {
      key: "clientPhone" as const,
      type: "tel",
      placeholder: "Your Phone Number *",
    },
    {
      key: "tattooPlace" as const,
      type: "text",
      placeholder: "Where on the body? *",
    },
    {
      key: "tattooSize" as const,
      type: "text",
      placeholder: "Approximate size (e.g., 10x15 cm) *",
    },
  ] as const;

  return (
    <main className="date-time-picker-container">
      {/* Date & Time Picker */}
      <section>
        <form style={{ marginBottom: "1em" }}>
          <label>
            Set the time:{" "}
            <input
              type="time"
              value={timeValue}
              onChange={handleTimeChange}
              required
            />
          </label>
        </form>

        <DayPicker
          mode="single"
          selected={selectedDate}
          onSelect={handleDaySelect}
          disabled={{ before: new Date() }}
          footer={`Selected date: ${
            selectedDate
              ? selectedDate.toLocaleDateString("en-GB")
              : "DD/MM/YYYY"
          }`}
        />
      </section>

      {/* Appointment Form */}
      <section className="date-time-picked">
        <p>
          <strong>Selected Date:</strong>{" "}
          {selectedDate
            ? selectedDate.toLocaleDateString("en-GB")
            : "Not selected"}
        </p>
        <p>
          <strong>Selected Time:</strong> {timeValue || "--:--"}
        </p>

        <div className="form-group">
          {/* Client Information */}
          {inputFields.map(({ key, type, placeholder }) => (
            <input
              key={key}
              type={type}
              value={formData[key]}
              onChange={handleInputChange(key)}
              placeholder={placeholder}
              required
            />
          ))}

          {/* Reference Image Upload */}
          <div style={{ marginTop: "15px" }}>
            <label>
              <strong>Reference design *</strong>
              <br />
              <small style={{ color: "#666", fontSize: "0.8em" }}>
                Max 2MB. Best results with images under 1MB.
              </small>
            </label>

            {/* File Upload Components */}
            <FileUploadArea
              onFileSelect={triggerFileInput}
              isFileSelected={!!imageState.file}
              onRemove={removeImage}
            />

            <FilePreview
              imageState={imageState}
              onRemove={removeImage}
              onChange={triggerFileInput}
            />

            <input
              id="file-input"
              type="file"
              accept="image/*"
              onChange={handleImageChange}
              style={{ display: "none" }}
            />
          </div>

          <SubmitButton
            loading={loading}
            hasFile={!!imageState.file}
            onClick={handleSubmit}
          />

          <p className="upload-disclaimer">
            Images will be uploaded to a secure server and sent to the artist.
            <br />
            You can change the image before sending.
          </p>
        </div>
      </section>
    </main>
  );
};

export default DateTimePicker;
