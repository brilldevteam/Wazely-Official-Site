import {
  createSocialImage,
  socialImageContentType,
  socialImageSize,
} from "@/lib/social-image";

export const alt = "Wazely connected CRM and ERP business software";
export const size = socialImageSize;
export const contentType = socialImageContentType;

export default function OpenGraphImage() {
  return createSocialImage({
    eyebrow: "Connected business software",
    title: "Focused products. One smarter way to work.",
    description:
      "Connected CRM and ERP software for growing businesses across the GCC.",
    accent: "#7c5ce7",
  });
}
