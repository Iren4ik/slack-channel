export interface Channel {
  name: string;
  type: "public" | "private";
}

export const channels: Channel[] = [
  { name: "slack-implementation", type: "public" },
  { name: "change-approval", type: "public" },
  { name: "culture-club", type: "public" },
  { name: "customersuccess", type: "public" },
  { name: "general", type: "public" },
  { name: "slack-workflows", type: "public" },
  { name: "marketintel", type: "public" },
  { name: "mdc-updates", type: "public" },
  { name: "product-feedback", type: "public" },
  { name: "product-feedback", type: "public" },
  { name: "product-feedback", type: "public" },
  { name: "product-qa", type: "public" },
  { name: "product-support", type: "public" },
  { name: "product-team", type: "private" },
  { name: "product-feedback", type: "public" },
  { name: "product-feedback", type: "public" },
  { name: "product-feedback", type: "public" },
  { name: "product-qa", type: "public" },
  { name: "product-support", type: "public" },
];
