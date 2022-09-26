export interface DkzTreeviewItem {
    id: string;
    name: string;
    active: boolean;
    hierarchy?: string[];
    children?: DkzTreeviewItem[];
  }