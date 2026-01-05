import React from "react";

interface FileUploadAreaProps {
  onFileSelect: () => void;
  isFileSelected: boolean;
  onRemove: () => void;
}

export const FileUploadArea: React.FC<FileUploadAreaProps> = ({
  onFileSelect,
  isFileSelected,
}) => {
  if (isFileSelected) return null;

  return (
    <div
      className="file-upload-area"
      onClick={onFileSelect}
      role="button"
      tabIndex={0}
      onKeyDown={(e) => e.key === "Enter" && onFileSelect()}
    >
      <div className="upload-icon">📁</div>
      <p className="upload-text">
        <strong>Click to upload reference image</strong>
      </p>
      <p className="upload-subtext">Drag & drop or click to browse</p>
    </div>
  );
};
