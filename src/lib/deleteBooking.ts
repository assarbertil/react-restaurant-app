import axios from 'axios'

export const deleteBooking = async (id: string) => {
  const response = await axios.delete(
    `https://school-restaurant-api.azurewebsites.net/booking/delete/${id}`
  )
  return response.data
}
