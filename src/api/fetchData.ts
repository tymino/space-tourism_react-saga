export const fetchData = async (pageName: string) => {
  const response = await fetch(`${process.env.REACT_APP_API_PATH}/${pageName}`);
  const json = await response.json();

  console.log(json);

  return json;
};
