import {
  createSocialImage,
  socialImageContentType,
  socialImageSize,
} from "@/lib/social-image";

export const alt = "Wazely CRM for WhatsApp customer conversations";
export const size = socialImageSize;
export const contentType = socialImageContentType;

export default function OpenGraphImage() {
  return createSocialImage({
    eyebrow: "Wazely CRM",
    title: "Turn every customer conversation into growth.",
    description:
      "WhatsApp conversations, contacts, campaigns, automation, and teamwork in one connected workspace.",
    accent: "#10b981",
  });
}
