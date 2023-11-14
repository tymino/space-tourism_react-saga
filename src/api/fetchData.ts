import axios from 'axios'

export const fetchData = async (pageName: string) => {
  const URL = `${import.meta.env.VITE_API_PATH}/${pageName}`

  try {
    const { data } = await axios.get(URL)

    return data
  } catch (error) {
    console.log('error fetch data func')
  }
}
