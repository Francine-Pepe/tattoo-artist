import React, { type ChangeEvent, useEffect, useState } from "react";
import { DayPicker } from "react-day-picker";
import { format } from "date-fns";
import "react-day-picker/dist/style.css";
import { generateSlots } from "../../utils/slots";
import {
  getBookedSlotsForDay,
  bookSlot,
} from "../../services/appointmentsService";
import { EmailService } from "../../services/emailService";
import { useImagePreview } from "../../hooks/useImagePreview";
import { FileUploadArea } from "./FileUploadArea";
import { FilePreview } from "./FilePreview";
import { SubmitButton } from "./SubmitButton";
import "../dateTimePicker/styles.css";
import { ImageUploadService } from "../../services/imageUploadService";

export const DateTimePicker: React.FC = () => {
  const [selectedDate, setSelectedDate] = useState<Date>();
  const [timeValue, setTimeValue] = useState<string>("");
  const [bookedSlots, setBookedSlots] = useState<string[]>([]);
  const [loading, setLoading] = useState(false);

  const [formData, setFormData] = useState({
    clientName: "",
    clientEmail: "",
    clientPhone: "",
    tattooPlace: "",
    tattooSize: "",
  });

  const { imageState, setImage, removeImage } = useImagePreview();
  const slots = generateSlots();

  /* ----------------------------------
     Load booked slots for selected day
  ----------------------------------- */
  useEffect(() => {
    if (!selectedDate) return;

    const dateStr = format(selectedDate, "yyyy-MM-dd");
    getBookedSlotsForDay(dateStr).then(setBookedSlots);
  }, [selectedDate]);

  /* ----------------------------------
     Handlers
  ----------------------------------- */
  const handleDaySelect = (date: Date | undefined) => {
    setSelectedDate(date);
    setTimeValue("");
  };

  const handleInputChange =
    (field: keyof typeof formData) => (e: ChangeEvent<HTMLInputElement>) => {
      setFormData((prev) => ({ ...prev, [field]: e.target.value }));
    };

  const handleFileSelect = (e: ChangeEvent<HTMLInputElement>) => {
    const file = e.target.files?.[0];
    if (!file) return;
    const preview = URL.createObjectURL(file);
    setImage(file, preview, preview);
  };

  const validateForm = (): boolean => {
    return Boolean(
      selectedDate &&
        timeValue &&
        imageState.file &&
        Object.values(formData).every((v) => v.trim() !== "")
    );
  };

  const handleSubmit = async () => {
    if (!selectedDate || !timeValue || !imageState.file) {
      alert("Please fill all fields and upload an image");
      return;
    }

    setLoading(true);

    try {
      const dateStr = format(selectedDate, "yyyy-MM-dd");

      // 1️⃣ Upload image
      const imageUrl = await ImageUploadService.uploadToImgBB(imageState.file);

      // 2️⃣ Save booking in Firestore
      await bookSlot(dateStr, timeValue, {
        clientName: formData.clientName,
        clientEmail: formData.clientEmail,
        clientPhone: formData.clientPhone,
        tattooPlace: formData.tattooPlace,
        tattooSize: formData.tattooSize,
        imageUrl,
      });

      // 3️⃣ Email tattooer
      await EmailService.send({
        to_email: "franmelopepe@gmail.com",
        client_name: formData.clientName,
        client_email: formData.clientEmail,
        client_phone: formData.clientPhone,
        tattoo_place: formData.tattooPlace,
        tattoo_size: formData.tattooSize,
        appointment_date: dateStr,
        appointment_time: timeValue,
        image_url: imageUrl,
      });

      // 4️⃣ Email client
      await EmailService.send({
        to_email: formData.clientEmail,
        client_name: formData.clientName,
        client_email: formData.clientEmail,
        client_phone: formData.clientPhone,
        tattoo_place: formData.tattooPlace,
        tattoo_size: formData.tattooSize,
        appointment_date: dateStr,
        appointment_time: timeValue,
        image_url: imageUrl,
      });

      alert("✅ Appointment booked! Check your email.");
      resetForm();
    } catch (err) {
      console.error(err);
      alert("❌ Something went wrong. Please try again.");
    } finally {
      setLoading(false);
    }
  };

  const resetForm = () => {
    setSelectedDate(undefined);
    setTimeValue("");
    removeImage();
    setFormData({
      clientName: "",
      clientEmail: "",
      clientPhone: "",
      tattooPlace: "",
      tattooSize: "",
    });
  };

  /* ----------------------------------
     Render
  ----------------------------------- */
  return (
    <main className="date-time-picker-container">
      {/* Date Picker */}
      <section>
        <DayPicker
          mode="single"
          selected={selectedDate}
          onSelect={handleDaySelect}
          disabled={{ before: new Date() }}
        />

        {selectedDate && (
          <>
            <h4>Select a time</h4>
            <div className="slots">
              {slots.map((slot) => (
                <button
                  key={slot}
                  type="button"
                  className={`slot ${timeValue === slot ? "selected" : ""}`}
                  disabled={bookedSlots.includes(slot)}
                  onClick={() => setTimeValue(slot)}
                >
                  {slot}
                </button>
              ))}
            </div>
          </>
        )}
      </section>

      {/* Form */}
      <section className="date-time-picked">
        <p>
          <strong>Date:</strong>{" "}
          {selectedDate ? selectedDate.toLocaleDateString("en-GB") : "--"}
        </p>
        <p>
          <strong>Time:</strong> {timeValue || "--"}
        </p>

        <div className="form-group">
          {Object.entries(formData).map(([key, value]) => (
            <input
              key={key}
              value={value}
              placeholder={key}
              onChange={handleInputChange(key as any)}
              required
            />
          ))}

          {/* Image Upload */}
          <FileUploadArea
            onFileSelect={() => document.getElementById("file-input")?.click()}
            isFileSelected={!!imageState.file}
            onRemove={removeImage}
          />

          <FilePreview
            imageState={imageState}
            onRemove={removeImage}
            onChange={() => document.getElementById("file-input")?.click()}
          />

          <input
            id="file-input"
            type="file"
            accept="image/*"
            onChange={handleFileSelect}
            style={{ display: "none" }}
          />

          <SubmitButton
            loading={loading}
            hasFile={!!imageState.file}
            onClick={handleSubmit}
          />
        </div>
      </section>
    </main>
  );
};

export default DateTimePicker;
