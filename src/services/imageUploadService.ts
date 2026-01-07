import { IMGBB_API_KEY } from "../constants";

export class ImageUploadService {
  static async uploadToImgBB(file: File): Promise<string> {
    if (!IMGBB_API_KEY) {
      throw new Error("ImgBB API key is missing");
    }

    const base64 = await this.fileToBase64(file);

    const formData = new FormData();
    formData.append("image", base64);

    const response = await fetch(
      `https://api.imgbb.com/1/upload?key=${IMGBB_API_KEY}`,
      {
        method: "POST",
        body: formData,
      }
    );

    if (!response.ok) {
      const err = await response.text();
      console.error("ImgBB error:", err);
      throw new Error("Image upload failed");
    }

    const data = await response.json();
    return data.data.url;
  }

  private static fileToBase64(file: File): Promise<string> {
    return new Promise((resolve, reject) => {
      const reader = new FileReader();
      reader.readAsDataURL(file);
      reader.onload = () => {
        // REMOVE "data:image/...;base64,"
        const result = reader.result as string;
        resolve(result.split(",")[1]);
      };
      reader.onerror = reject;
    });
  }
}
