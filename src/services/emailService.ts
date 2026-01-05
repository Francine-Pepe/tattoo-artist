import emailjs from "@emailjs/browser";
import { EMAIL_CONFIG } from "../constants";

export class EmailService {
  static async sendAppointmentEmail(templateParams: any) {
    return emailjs.send(
      EMAIL_CONFIG.serviceId,
      EMAIL_CONFIG.templateId,
      templateParams,
      EMAIL_CONFIG.publicKey
    );
  }
}