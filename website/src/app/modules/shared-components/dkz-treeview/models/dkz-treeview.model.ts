export interface DkzTreeviewItem {
    id: string;
    parentId?: string;
    name: string;
    active: boolean;
    hierarchy?: string[];
    children?: DkzTreeviewItem[];
  }