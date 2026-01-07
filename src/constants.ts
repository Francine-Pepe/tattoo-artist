export const IMGBB_API_KEY = import.meta.env.VITE_IMGBB_API_KEY;export const MAX_FILE_SIZE = parseInt(
  import.meta.env.VITE_MAX_FILE_SIZE || "2097152",
  10
);
export const THUMBNAIL_SIZE = {
  width: parseInt(import.meta.env.VITE_THUMBNAIL_WIDTH || "200", 10),
  height: parseInt(import.meta.env.VITE_THUMBNAIL_HEIGHT || "200", 10),
};
export const COMPRESSED_MAX_SIZE = parseInt(
  import.meta.env.VITE_COMPRESSED_MAX_SIZE || "400",
  10
);

export const EMAIL_CONFIG = {
  serviceId: import.meta.env.VITE_EMAILJS_SERVICE_ID || "",
  templateId: import.meta.env.VITE_EMAILJS_TEMPLATE_ID || "",
  publicKey: import.meta.env.VITE_EMAILJS_PUBLIC_KEY || "",
} as const;

// Type for environment variables
export interface EnvironmentVariables {
  VITE_EMAILJS_SERVICE_ID: string;
  VITE_EMAILJS_TEMPLATE_ID: string;
  VITE_EMAILJS_PUBLIC_KEY: string;
  VITE_IMGBB_API_KEY: string;
  VITE_MAX_FILE_SIZE?: string;
  VITE_THUMBNAIL_WIDTH?: string;
  VITE_THUMBNAIL_HEIGHT?: string;
  VITE_COMPRESSED_MAX_SIZE?: string;
}

// Validation function to check required environment variables
export const validateEnvironment = (): void => {
  const requiredVars = [
    "VITE_EMAILJS_SERVICE_ID",
    "VITE_EMAILJS_TEMPLATE_ID",
    "VITE_EMAILJS_PUBLIC_KEY",
    "VITE_IMGBB_API_KEY",
  ] as const;

  const missingVars = requiredVars.filter(
    (varName) => !import.meta.env[varName]
  );

  if (missingVars.length > 0) {
    console.warn(
      `Missing required environment variables: ${missingVars.join(", ")}`
    );
    console.warn("Some features may not work properly.");

    // In development, show more detailed error
    if (import.meta.env.DEV) {
      console.warn(
        "Please check your .env file and ensure all required variables are set."
      );
    }
  }
};

// Environment check utility
export const isEnvValid = (): boolean => {
  return Boolean(
    import.meta.env.VITE_EMAILJS_SERVICE_ID &&
      import.meta.env.VITE_EMAILJS_TEMPLATE_ID &&
      import.meta.env.VITE_EMAILJS_PUBLIC_KEY &&
      import.meta.env.VITE_IMGBB_API_KEY
  );
};
