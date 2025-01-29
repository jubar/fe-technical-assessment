export type GridTag = {
  name: string;
  color: string;
};

export type WorkflowItem = {
  id: number;
  type: string;
  name: string;
  tags: GridTag[];
  lastUpdated: string;
};
