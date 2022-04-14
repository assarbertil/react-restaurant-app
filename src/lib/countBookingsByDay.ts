import { IBooking } from 'interfaces/Booking'

/**
 * Meant to be used on a filtered array of bookings for a given date
 * @param bookings - All bookings for a given date
 * @returns - An object with the number of bookings for both sittings at a given date
 */
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
