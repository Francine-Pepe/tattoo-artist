import React from "react";
import { type ImageState } from "../../types/index";

interface FilePreviewProps {
  imageState: ImageState;
  onRemove: () => void;
  onChange: () => void;
}

export const FilePreview: React.FC<FilePreviewProps> = ({
  imageState,
  onRemove,
  onChange,
}) => {
  if (!imageState.file) return null;

  const thumbnailSrc = imageState.thumbnail ?? imageState.preview ?? undefined;

  const previewSrc = imageState.preview ?? undefined;

  return (
    <div className="file-preview-container">
      <div className="file-info">
        <div className="thumbnail-container">
          {thumbnailSrc && (
            <img
              src={thumbnailSrc}
              alt="Thumbnail preview"
              className="thumbnail"
            />
          )}

          <button
            type="button"
            className="remove-button"
            onClick={onRemove}
            aria-label="Remove image"
          >
            ✕
          </button>
        </div>

        <div className="file-details">
          <p className="filename">{imageState.file.name}</p>
          <p className="file-size">
            Size: {Math.round(imageState.file.size / 1024)} KB
          </p>
          <p className="status">✅ Ready to send</p>
        </div>

        <button type="button" onClick={onChange} className="change-button">
          Change
        </button>
      </div>

      {previewSrc && (
        <div className="full-preview">
          <p className="preview-label">
            <strong>Full Preview:</strong>
          </p>
          <img src={previewSrc} alt="Full preview" className="preview-image" />
        </div>
      )}
    </div>
  );
};
