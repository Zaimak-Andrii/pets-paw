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

export const getGalleryImagesService = async (
  order: string = 'random',
  type: string | null = null,
  breeds: string = 'none',
  limit: string = '5'
) => {
  const urlParams = new URLSearchParams({
    page: '0',
    limit,
    order,
    breed_ids: breeds === 'none' ? '' : breeds,
    mime_types: type ?? '',
  });

  const result = await privateFetch(`${url}/images/search?${urlParams}`);

  if (!result.ok) throw new Error('Ooooops! Bad request!');

  return await result.json();
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

export const getAllBreedsService = async (): Promise<BreedType[]> => {
  const result = await fetch(`${url}/breeds`);

  if (!result.ok) throw new Error('Ooooops! Bad request!');

  return await result.json();
};

export const getFavoritesService = async (): Promise<CatType[]> => {
  const result = await privateFetch(`${url}/favourites`);

  if (!result.ok) throw new Error('Ooooops! Bad request!');

  const data: { image: CatType }[] = await result.json();

  return data.map(i => i.image);
};

export const getBreedsImagesService = async (
  order: string = 'random',
  breed: string = 'none',
  limit: string = '5'
) => {
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
