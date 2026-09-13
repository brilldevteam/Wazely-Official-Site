import {
  createSocialImage,
  socialImageContentType,
  socialImageSize,
} from "@/lib/social-image";

export const alt = "Wazely CRM and ERP Knowledge Base";
export const size = socialImageSize;
export const contentType = socialImageContentType;

export default function OpenGraphImage() {
  return createSocialImage({
    eyebrow: "Wazely Knowledge Base",
    title: "Guidance for every Wazely workspace.",
    description:
      "Setup guides, product documentation, and practical help for Wazely CRM and Wazely ERP.",
    accent: "#22c7d4",
  });
}
