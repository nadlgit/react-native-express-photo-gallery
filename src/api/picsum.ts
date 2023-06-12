const BASE_URL = 'https://picsum.photos';

export type PhotoDetails = {
  id: string;
  author: string;
  url: string;
  width: number;
  height: number;
};

export async function getPhotoListPage(page = 1): Promise<PhotoDetails[]> {
  try {
    const res = await fetch(`${BASE_URL}/v2/list?page=${page}`);
    const data = await res.json();
    return data.map(({ id, author, url, width, height }) => ({ id, author, url, width, height }));
  } catch {
    return [];
  }
}

export function getPhotoUri(id: string, width: number, height?: number) {
  return `${BASE_URL}/id/${id}/${width}` + (height ? `/${height}` : '');
}
