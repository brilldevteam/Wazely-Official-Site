import {
  createSocialImage,
  socialImageContentType,
  socialImageSize,
} from "@/lib/social-image";

export const alt = "Wazely ERP for finance and business operations";
export const size = socialImageSize;
export const contentType = socialImageContentType;

export default function OpenGraphImage() {
  return createSocialImage({
    eyebrow: "Wazely ERP",
    title: "Connect finance and everyday operations.",
    description:
      "Sales, purchasing, invoicing, payments, accounting, and reporting in one practical workspace.",
    accent: "#8b5cf6",
  });
}
