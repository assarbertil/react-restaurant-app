import axios from 'axios'
import { IBooking } from 'interfaces/Booking'

export const putBooking = async (booking: IBooking) => {
  const { _id, date, time, numberOfGuests, customerId } = booking

  const response = await axios.put(
    `https://school-restaurant-api.azurewebsites.net/booking/update/${_id}`,
    {
      id: _id,
      restaurantId: process.env.REACT_APP_RESTAURANT_ID,
      date: date,
      time: time,
      numberOfGuests: numberOfGuests,
      customerId: customerId
    }
  )

  return response.data
}
