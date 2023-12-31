import { BreedType, CatType } from '@/types';

const url = process.env.NEXT_PUBLIC_API_URL || '';
const apiKey = process.env.NEXT_PUBLIC_API_KEY || '';
const user = process.env.NEXT_PUBLIC_API_USER || '';

export const privateFetch = async (input: RequestInfo | URL, options?: RequestInit | undefined) => {
  return await fetch(input, {
    headers: {
      'content-type': 'application/json',
      'x-api-key': apiKey,
    },
    ...options,
  });
};

export const addToFavoriteService = async (id: string) => {
  const rawBody = JSON.stringify({
    image_id: id,
    sub_id: user,
  });

  const result = await privateFetch(`${url}/favourites`, {
    method: 'POST',
    body: rawBody,
  });

  if (!result.ok) throw new Error('Ooooops! Bad request!');

  return await result.json();
};

export const removeFromeFavoriteService = async (id: number) => {
  const result = await privateFetch(`${url}/favourites/${id}`, {
    method: 'DELETE',
  });

  if (!result.ok) throw new Error('Ooooops! Bad request!');

  return await result.json();
};

export const getAllBreedsService = async (): Promise<BreedType[]> => {
  const result = await fetch(`${url}/breeds`);

  if (!result.ok) throw new Error('Ooooops! Bad request!');

  return await result.json();
};

export const getFavoritesService = async (): Promise<CatType[]> => {
  const result = await privateFetch(`${url}/favourites`);

  if (!result.ok) throw new Error('Ooooops! Bad request!');

  const data: { id: number; image: CatType }[] = await result.json();

  return data.map(i => ({ ...i.image, favouriteId: i.id }));
};

export const getRandomImageService = async (): Promise<CatType | undefined> => {
  const urlParams = new URLSearchParams({
    page: '0',
    limit: '1',
    order: 'random',
  });

  const result = await privateFetch(`${url}/images/search?${urlParams}`);

  if (!result.ok) throw new Error('Ooooops! Bad request!');

  const data = await result.json();

  return data.at(0);
};

export const addToLikeService = async (id: string) => {
  const rawBody = JSON.stringify({
    image_id: id,
    sub_id: user,
    value: 1,
  });

  const result = await privateFetch(`${url}/votes`, {
    method: 'POST',
    body: rawBody,
  });

  if (!result.ok) throw new Error('Ooooops! Bad request!');

  return await result.json();
};

export const addToDislikeService = async (id: string) => {
  const rawBody = JSON.stringify({
    image_id: id,
    sub_id: user,
    value: -1,
  });

  const result = await privateFetch(`${url}/votes`, {
    method: 'POST',
    body: rawBody,
  });

  if (!result.ok) throw new Error('Ooooops! Bad request!');

  return await result.json();
};

export const getLikesService = async () => {
  const urlParams = new URLSearchParams({
    sub_id: user,
  });

  const result = await privateFetch(`${url}/votes?${urlParams}`);

  if (!result.ok) throw new Error('Ooooops! Bad request!');

  const data: { image: CatType; value: number }[] = await result.json();

  return data.reduce((acc: CatType[], item) => (item.value > 0 ? [...acc, item.image] : acc), []);
};

export const getDislikesService = async () => {
  const urlParams = new URLSearchParams({
    sub_id: user,
  });

  const result = await privateFetch(`${url}/votes?${urlParams}`);

  if (!result.ok) throw new Error('Ooooops! Bad request!');

  const data: { image: CatType; value: number }[] = await result.json();

  return data.reduce((acc: CatType[], item) => (item.value < 0 ? [...acc, item.image] : acc), []);
};

export const getBreedInfoByIdService = async (id: string): Promise<BreedType> => {
  const result = await fetch(`${url}/breeds/${id}`);

  if (!result.ok) throw new Error('Ooooops! Bad request!');

  return await result.json();
};

export const uploadFileService = async (file: File) => {
  const formdata = new FormData();
  formdata.append('file', file);
  formdata.append('sub_id', user);

  const result = await fetch(`${url}/images/upload`, {
    method: 'POST',
    headers: {
      'x-api-key': apiKey,
    },
    body: formdata,
  });

  if (!result.ok) throw new Error(await result.text());

  return await result.json();
};

export const searchImagesByBreedNameService = async ({ value }: { [key: string]: string }) => {
  const breeds = await getAllBreedsService();

  const searchQuery = breeds.reduce((acc, breed) => {
    if (breed.name.toLowerCase().includes(value.toLowerCase())) return acc + breed.id + ',';

    return acc;
  }, '');

  if (searchQuery.length === 0) return [];

  const result = await privateFetch(
    `${url}/images/search?breed_ids=${searchQuery}&limit=20&has_breeds=1`
  );

  const data = await result.json();

  return data;
};

export const getGalleryImagesService = async ({
  limit,
  order,
  breed,
  type,
}: {
  [key: string]: string;
}) => {
  const urlParams = new URLSearchParams({
    page: '0',
    limit,
    order,
    breed_ids: breed === 'none' ? '' : breed,
    mime_types: type ?? '',
  });

  const result = await privateFetch(`${url}/images/search?${urlParams}`);

  if (!result.ok) throw new Error('Ooooops! Bad request!');

  return await result.json();
};

export const getBreedsImagesService = async ({
  limit = '5',
  order = 'random',
  breed = 'none',
}: {
  [key: string]: string;
}): Promise<CatType[]> => {
  const urlParams = new URLSearchParams({
    page: '0',
    limit,
    order,
    has_breeds: '1',
    breed_ids: breed === 'none' ? '' : breed,
  });

  const result = await privateFetch(`${url}/images/search?${urlParams}`);

  if (!result.ok) throw new Error('Ooooops! Bad request!');

  return await result.json();
};
