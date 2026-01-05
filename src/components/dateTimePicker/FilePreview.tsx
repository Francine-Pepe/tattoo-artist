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

  return (
    <div className="file-preview-container">
      <div className="file-info">
        <div className="thumbnail-container">
          <img
            src={imageState.thumbnail || imageState.preview}
            alt="Thumbnail preview"
            className="thumbnail"
          />
          <button
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
      {imageState.preview && (
        <div className="full-preview">
          <p className="preview-label">
            <strong>Full Preview:</strong>
          </p>
          <img
            src={imageState.preview}
            alt="Full preview"
            className="preview-image"
          />
        </div>
      )}
    </div>
  );
};
