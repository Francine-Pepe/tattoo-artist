export interface AppointmentFormData {
  clientName: string;
  clientEmail: string;
  clientPhone: string;
  tattooPlace: string;
  tattooSize: string;
}

export interface ImageState {
  file: File | null;
  preview: string | null;
  thumbnail: string | null;
}
