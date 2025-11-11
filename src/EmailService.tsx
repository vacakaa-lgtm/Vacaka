import emailjs, { type EmailJSResponseStatus } from "emailjs-com";

interface EmailConfig {
  email: string;
  type: "subscribe" | "query";
}

export const handleSubmit = async ({
  email,
  type,
}: EmailConfig): Promise<EmailJSResponseStatus | void> => {
  if (!email) {
    console.error("Email is required.");
    return;
  }

  const serviceId = import.meta.env.VITE_EMAILJS_SERVICE_ID as string;
  const publicKey = import.meta.env.VITE_EMAILJS_PUBLIC_KEY as string;
  const templateId =
    type === "query"
      ? (import.meta.env.VITE_EMAILJS_TEMPLATE_ID_QUERY as string)
      : (import.meta.env.VITE_EMAILJS_TEMPLATE_ID as string);

  try {
    const response: EmailJSResponseStatus = await emailjs.send(
      serviceId,
      templateId,
      { email },
      publicKey
    );
    console.log("✅ Email sent successfully:", response.status, response.text);
    return response;
  } catch (err) {
    const error = err as { text?: string };
    console.error("❌ Failed to send email:", error.text || err);
  }
};
