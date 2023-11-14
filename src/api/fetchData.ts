export const fetchData = async (pageName: string) => {
  const response = await fetch(`${import.meta.env.VITE_API_PATH}/${pageName}`)
  const json = await response.json()

  return json
}
