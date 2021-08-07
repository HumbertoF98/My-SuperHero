type Urls = {
  type: string;
  url: string;
}

export type Data = {
  id: number;
  name: string;
  description: string;
  thumbnail: {
    path: string;
    extension: string;
  };
  urls: Urls[];
};

export type ResultProps = {
  data: {
    count: number;
    limit: number;
    offset: number;
  };
  results: Data[];
};
