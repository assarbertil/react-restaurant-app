import axios from 'axios'
import { INewBooking } from 'interfaces/NewBooking'

export const postBooking = async (booking: INewBooking) => {
  const { date, time, numberOfGuests, customer } = booking

  const response = await axios.post(
    'https://school-restaurant-api.azurewebsites.net/booking/create',
    {
      restaurantId: process.env.REACT_APP_RESTAURANT_ID,
      date: date,
      time: time,
      numberOfGuests: numberOfGuests,
      customer: customer
    }
  )
  return response.data
}
