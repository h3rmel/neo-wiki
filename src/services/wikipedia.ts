import { getRequest } from '@/helpers/requests';

async function searchArticles(query: string, limit = 10, offset = 0) {
  try {
    const response = await getRequest<WikipediaSearchResponse>(`search?query=${query}&limit=${limit}&offset=${offset}`);

    return response;
  } catch (error) {
    console.error(error);
  }
}

async function getPageContent(title: string) {
  try {
    const response = await getRequest<WikipediaPageResponse>(`page/${title}`);

    return response;
  } catch (error) {
    console.error(error);
  }
}

async function getTrends() {
  try {
    const response = await getRequest<WikipediaTrendsResponse>(`trends`);

    return response;
  } catch (error) {
    console.error(error);
  }
}

export { searchArticles, getPageContent, getTrends };
