import { COMPRESSED_MAX_SIZE } from "../constants";

export const createThumbnail = (
  file: File,
  width: number,
  height: number
): Promise<string> => {
  return new Promise((resolve, reject) => {
    const reader = new FileReader();
    reader.onload = (e) => {
      const img = new Image();
      img.onload = () => {
        const canvas = document.createElement("canvas");
        const ctx = canvas.getContext("2d");
        if (!ctx) {
          reject(new Error("Could not create canvas context"));
          return;
        }

        canvas.width = width;
        canvas.height = height;

        // Calculate aspect ratio for centered thumbnail
        const imgRatio = img.width / img.height;
        const canvasRatio = width / height;

        let drawWidth, drawHeight, offsetX, offsetY;

        if (imgRatio > canvasRatio) {
          drawHeight = height;
          drawWidth = height * imgRatio;
          offsetX = (width - drawWidth) / 2;
          offsetY = 0;
        } else {
          drawWidth = width;
          drawHeight = width / imgRatio;
          offsetX = 0;
          offsetY = (height - drawHeight) / 2;
        }

        // Draw image
        ctx.fillStyle = "#f5f5f5";
        ctx.fillRect(0, 0, width, height);
        ctx.drawImage(img, offsetX, offsetY, drawWidth, drawHeight);

        // Add border
        ctx.strokeStyle = "#ddd";
        ctx.lineWidth = 1;
        ctx.strokeRect(0, 0, width, height);

        resolve(canvas.toDataURL("image/jpeg", 0.9));
      };
      img.onerror = reject;
      img.src = e.target?.result as string;
    };
    reader.onerror = reject;
    reader.readAsDataURL(file);
  });
};

export const compressImageForBase64 = (file: File): Promise<string> => {
  return new Promise((resolve, reject) => {
    const reader = new FileReader();
    reader.readAsDataURL(file);
    reader.onload = (event) => {
      const img = new Image();
      img.src = event.target?.result as string;
      img.onload = () => {
        const canvas = document.createElement("canvas");
        let width = img.width;
        let height = img.height;

        // Calculate new dimensions
        if (width > height) {
          if (width > COMPRESSED_MAX_SIZE) {
            height *= COMPRESSED_MAX_SIZE / width;
            width = COMPRESSED_MAX_SIZE;
          }
        } else {
          if (height > COMPRESSED_MAX_SIZE) {
            width *= COMPRESSED_MAX_SIZE / height;
            height = COMPRESSED_MAX_SIZE;
          }
        }

        canvas.width = width;
        canvas.height = height;
        const ctx = canvas.getContext("2d");
        ctx?.drawImage(img, 0, 0, width, height);

        const dataUrl = canvas.toDataURL("image/jpeg", 0.6);

        if (dataUrl.length > 45000) {
          reject(new Error("Image too large even after compression"));
        } else {
          resolve(dataUrl);
        }
      };
      img.onerror = reject;
    };
    reader.onerror = reject;
  });
};
