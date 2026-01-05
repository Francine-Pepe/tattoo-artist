interface ImportMetaEnv {
  readonly VITE_EMAILJS_SERVICE_ID: string;
  readonly VITE_EMAILJS_TEMPLATE_ID: string;
  readonly VITE_EMAILJS_PUBLIC_KEY: string;
  readonly VITE_IMGBB_API_KEY: string;
  readonly VITE_MAX_FILE_SIZE?: string;
  readonly VITE_THUMBNAIL_WIDTH?: string;
  readonly VITE_THUMBNAIL_HEIGHT?: string;
  readonly VITE_COMPRESSED_MAX_SIZE?: string;
}

interface ImportMeta {
  readonly env: ImportMetaEnv;
}
