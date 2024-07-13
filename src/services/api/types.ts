export type CourseFromServer = {
  name: string;
  id: string;
  image: string;
  bgColor: string;
  tags: string[];
};

export type Tag = {
  name: string;
  id: string;
};
