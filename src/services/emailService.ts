import emailjs from "@emailjs/browser";
import { EMAIL_CONFIG } from "../constants";

export class EmailService {
  static send(templateParams: Record<string, any>) {
    return emailjs.send(
      EMAIL_CONFIG.serviceId,
      EMAIL_CONFIG.templateId,
      templateParams,
      EMAIL_CONFIG.publicKey
    );
  }
}

/* import emailjs from "@emailjs/browser";
import { EMAIL_CONFIG } from "../constants";

export class EmailService {
  static validateConfig(): void {
    if (
      !EMAIL_CONFIG.serviceId ||
      !EMAIL_CONFIG.templateId ||
      !EMAIL_CONFIG.publicKey
    ) {
      throw new Error(
        "Email.js configuration is incomplete. Please check your environment variables."
      );
    }
  }

  static async sendAppointmentEmail(templateParams: any) {
    this.validateConfig();

    return emailjs.send(
      EMAIL_CONFIG.serviceId,
      EMAIL_CONFIG.templateId,
      templateParams,
      EMAIL_CONFIG.publicKey
    );
  }
}
 */
