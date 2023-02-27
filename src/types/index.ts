export type Project = {
  id: string;
  name: string;
  datasetId: string;
  history: Block[];
};

export type Block = {
  id: string;
  name: string;
  type: string;
  content: string;
  userId: string;
  projectId: string;
  code: string;
};

export type TitleExpress = {
  title: string;
};

export type Preview = {
  data: string;
  clinical: string;
  plots: Plots;
  categorical_table: string;
  numerical_table: string;
};

export type Plots = {
  highly_expressed: Express;
  lowly_expressed: Express;
  heatmap: string;
};

export type Express = {
  genes: Array<string>;
  plot: string;
};
