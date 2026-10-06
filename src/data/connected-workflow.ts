export type WorkflowStep = {
  step: number;
  title: string;
  description: string;
};

export const workflowSteps: readonly WorkflowStep[] = [
  {
    step: 1,
    title: "A customer messages on WhatsApp",
    description:
      "It lands in the shared inbox, visible to the whole team, not one agent's phone.",
  },
  {
    step: 2,
    title: "An agent replies and tags the lead",
    description:
      "Contact details, tags, and segment all update in Wazely CRM as the conversation continues.",
  },
  {
    step: 3,
    title: "The lead moves through the pipeline",
    description:
      "Track progress on a visual board as the conversation turns into a deal.",
  },
  {
    step: 4,
    title: "A quotation becomes an invoice",
    description:
      "One accepted quotation converts straight into a Wazely ERP invoice, no retyping.",
  },
  {
    step: 5,
    title: "Payment gets recorded",
    description:
      "The customer's payment updates accounts, balances, and reports automatically.",
  },
  {
    step: 6,
    title: "Brand stays consistent everywhere",
    description:
      "Generate and export your color palette anytime with the free Wazely Color toolkit.",
  },
] as const;
