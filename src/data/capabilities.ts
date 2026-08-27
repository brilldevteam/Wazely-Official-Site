import {
  Blocks,
  CalendarDays,
  ContactRound,
  MessageSquareText,
  ShoppingBag,
  UsersRound,
} from "lucide-react";

export const capabilities = [
  {
    title: "Contacts and segmentation",
    description:
      "Organize customer information and build useful segments for targeted communication.",
    icon: ContactRound,
  },
  {
    title: "WhatsApp templates and campaigns",
    description:
      "Use approved messaging templates to create and manage customer broadcasts.",
    icon: MessageSquareText,
  },
  {
    title: "Team collaboration",
    description:
      "Help agents coordinate conversations using assignments, context, notes, and shared visibility.",
    icon: UsersRound,
  },
  {
    title: "Appointment booking and forms",
    description:
      "Support customer interactions and information collection through practical workflows.",
    icon: CalendarDays,
  },
  {
    title: "Catalog and ecommerce workflows",
    description:
      "Support product and catalog customer journeys and commerce conversations where applicable.",
    icon: ShoppingBag,
  },
  {
    title: "Integrations and developer tools",
    description:
      "Connect Wazely CRM with other business tools and extend available workflows.",
    icon: Blocks,
  },
] as const;
