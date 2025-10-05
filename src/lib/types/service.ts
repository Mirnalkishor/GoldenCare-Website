// src/lib/types/service.ts
export type Service = {
  id: string;
  name: string;
  slug?: string;
  shortDescription?: string;
  description?: string;
  icon?: string; // path or symbol name
};
