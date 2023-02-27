export type DeleteProjectResponse = {
  detail: string;
};

export type Prompt = {
  prompt: string;
  project_id: number;
};

export type History = {
  id: number;
  body: Prompt;
  response: any;
  response_status: string;
  output_type: string;
  object_output: Array<any>;
  output_status: string;
  date: string;
  media_output: string;
  project: number;
  subscription: number;
};

export type Project = {
  id: number;
  request: Array<History>;
  name: string;
  date_created: string;
  date_edited: string;
  ip: string;
  user: number;
  dataset: number;
};
