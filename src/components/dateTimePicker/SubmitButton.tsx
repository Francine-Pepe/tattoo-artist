import React from "react";

interface SubmitButtonProps {
  loading: boolean;
  hasFile: boolean;
  onClick: () => void;
}

export const SubmitButton: React.FC<SubmitButtonProps> = ({
  loading,
  hasFile,
  onClick,
}) => {
  const getButtonText = () => {
    if (loading) return "⏳ Processing & Sending...";
    if (!hasFile) return "📁 Please upload an image first";
    return "📨 Send Appointment Request";
  };

  return (
    <button
      type="button"
      onClick={onClick}
      disabled={loading || !hasFile}
      className="submit-button"
      aria-busy={loading}
    >
      {getButtonText()}
    </button>
  );
};
