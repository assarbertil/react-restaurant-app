import { IBooking } from '@/interfaces/Booking'

export const countBookingsByDay = (arrayOfBookings: IBooking[]) => {
  let sixArray = []
  let nineArray = []

  arrayOfBookings.forEach(booking => {
    if (booking.time === '18:00') {
      sixArray.push(booking)
    } else {
      nineArray.push(booking)
    }
  })

  return {
    bookingsAtSix: sixArray.length,
    bookingsAtNine: nineArray.length
  }
}
