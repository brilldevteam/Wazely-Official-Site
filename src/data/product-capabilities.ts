import {
  BarChart3,
  BookOpenCheck,
  Boxes,
  Building2,
  ContactRound,
  FileText,
  Landmark,
  MessagesSquare,
  ReceiptText,
  RefreshCw,
  ShieldCheck,
  Workflow,
} from "lucide-react";

export const companyCapabilities = [
  {
    title: "Customer relationships",
    description:
      "Keep conversations, contacts, campaigns, and customer context connected in Wazely CRM.",
    icon: ContactRound,
  },
  {
    title: "Sales and invoicing",
    description:
      "Move from quotations to invoices and payments with a clear operational record in Wazely ERP.",
    icon: ReceiptText,
  },
  {
    title: "Communication",
    description:
      "Give teams one shared place to manage messages, assignments, and follow-up work.",
    icon: MessagesSquare,
  },
  {
    title: "Finance and accounting",
    description:
      "Track accounts, vouchers, customer payments, vendor payments, and financial reports.",
    icon: Landmark,
  },
  {
    title: "Connected workflows",
    description:
      "Reduce repeated work through practical automation and consistent business processes.",
    icon: Workflow,
  },
  {
    title: "Controlled access",
    description:
      "Support growing teams with user roles, permissions, and organized company workspaces.",
    icon: ShieldCheck,
  },
] as const;

export const erpCapabilities = [
  {
    title: "Customers and vendors",
    description:
      "Keep customer and supplier records organized alongside the transactions connected to them.",
    icon: Building2,
  },
  {
    title: "Products and services",
    description:
      "Maintain items, services, units, taxes, and the operational details your documents depend on.",
    icon: Boxes,
  },
  {
    title: "Quotations and invoices",
    description:
      "Create and manage quotations, sales invoices, purchase invoices, and their current status.",
    icon: FileText,
  },
  {
    title: "Payments and vouchers",
    description:
      "Record customer receipts, advance payments, vendor payments, and business vouchers clearly.",
    icon: RefreshCw,
  },
  {
    title: "Accounting controls",
    description:
      "Structure financial activity with a chart of accounts, ledgers, and bank account mapping.",
    icon: BookOpenCheck,
  },
  {
    title: "Business reporting",
    description:
      "Review aging, tax, customer, vendor, revenue, and expense information from one workspace.",
    icon: BarChart3,
  },
] as const;
