import { LOTO_RESULTS_API_URL } from './config';

export const getLotoDatas = async () => {
  const response = await fetch(LOTO_RESULTS_API_URL, { method: 'GET' });
  return await response.json();
};
