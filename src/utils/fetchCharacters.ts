import axios from 'axios';
import { ResourcesType } from '../app/features/api/types';

export const fetchCharacterById = async (id: number) => {
  const url = `${import.meta.env.APP_BASE_URL}/${ResourcesType.People}/${id}`;

  const response = await axios.get(url);
  return response.data;
};
