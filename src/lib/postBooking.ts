import axios from 'axios'

import { IBooking } from 'interfaces/Booking'
import { ICustomer } from 'interfaces/Customer'

export const postBooking = async (booking: IBooking) => {
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
