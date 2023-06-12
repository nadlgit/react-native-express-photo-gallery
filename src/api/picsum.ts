const BASE_URL = 'https://picsum.photos';

export type PhotoDetails = {
  id: string;
  author: string;
  url: string;
  width: number;
  height: number;
};

export async function getPhotoListPage(
  page = 1
): Promise<{ photos: PhotoDetails[]; hasMore: boolean }> {
  const PAGE_LIMIT = 30;
  try {
    const res = await fetch(`${BASE_URL}/v2/list?limit=${PAGE_LIMIT}&page=${page}`);
    const data = await res.json();
    return {
      photos: data.map(({ id, author, url, width, height }) => ({
        id,
        author,
        url,
        width,
        height,
      })),
      hasMore: data.length >= PAGE_LIMIT,
    };
  } catch {
    return { photos: [], hasMore: false };
  }
}

export function getPhotoUri(id: string, width: number, height?: number) {
  return `${BASE_URL}/id/${id}/${width}` + (height ? `/${height}` : '');
}
