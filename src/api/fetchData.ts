import { apiPath } from '../constant/apiPath';

export const fetchData = async (pageName: string) => {
  const response = await fetch(`${apiPath}/${pageName}`);
  const json = await response.json();

  return json;
};
