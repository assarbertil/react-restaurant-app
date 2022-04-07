import { IBooking } from '@/interfaces/Booking'

export const filterBookingsByDay = (
  arrayOfBookings: IBooking[],
  date: string
) => {
  const filteredArrays = arrayOfBookings.filter(booking => {
    return booking.date === date
  })
  return filteredArrays
}
