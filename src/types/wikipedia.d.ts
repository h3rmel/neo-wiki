type WikipediaSearchResponse = {
  results: {
    title: string;
    summary: string;
  }[];
  total: number;
  limit: number;
  offset: number;
};

type WikipediaPageResponse = {
  title: string;
  content: string; // Is markdown content
  summary: string;
  main_images: string;
  all_images: string[];
  references: string[];
  categories: string[];
  links: string[];
};

type WikipediaTrendsResponse = {
  current_events: {
    title: string;
    url: string;
    summary: string;
  }[];
  featured_article: {
    title: string;
    url: string;
    summary: string;
  };
  on_this_day: {
    title: string;
    url: string;
    event: string;
  }[];
};
