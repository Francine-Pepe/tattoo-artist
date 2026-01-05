import { useState, useEffect, useCallback } from "react";
import { type ImageState } from "../types/index";

export const useImagePreview = () => {
  const [imageState, setImageState] = useState<ImageState>({
    file: null,
    preview: null,
    thumbnail: null,
  });

  const cleanupUrls = useCallback(() => {
    if (imageState.preview) URL.revokeObjectURL(imageState.preview);
    if (imageState.thumbnail) URL.revokeObjectURL(imageState.thumbnail);
  }, [imageState.preview, imageState.thumbnail]);

  useEffect(() => {
    return cleanupUrls;
  }, [cleanupUrls]);

  const removeImage = useCallback(() => {
    cleanupUrls();
    setImageState({ file: null, preview: null, thumbnail: null });
  }, [cleanupUrls]);

  const setImage = useCallback(
    (file: File, preview: string, thumbnail: string) => {
      setImageState({ file, preview, thumbnail });
    },
    []
  );

  return { imageState, setImage, removeImage, cleanupUrls };
};
