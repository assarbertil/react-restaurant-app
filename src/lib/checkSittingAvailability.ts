import { IBooking } from '@/interfaces/Booking'
import format from 'date-fns/format'
import { registerLocale } from 'react-datepicker'
import sv from 'date-fns/locale/sv'
import { filterBookingsByDay } from './filterBookingsByDay'
import { countBookingsByDay } from './countBookingsByDay'

registerLocale('sv', sv)

/**
 * Check if a sitting has avbailabale slots
 * @param time - The time of the sitting
 * @param bookings - The bookings of the restaurant, recieved from the api
 * @param numberOfGuests - The number of guests that attempting to book at a sitting
 * @returns - True if the sitting has available slots, false if not
 */
export const checkSittingAvailability = (
  time: Date,
  bookings: IBooking[],
  numberOfGuests: number = 0
) => {
  let dateString = format(time, 'P', { locale: sv })
  let timeString = format(time, 'p', { locale: sv })

  let todaysBookings = filterBookingsByDay(bookings, dateString)
  let sumOfTodaysBookings = countBookingsByDay(todaysBookings)

  if (
    timeString === '18:00' &&
    sumOfTodaysBookings.bookingsAtSix + Math.ceil(numberOfGuests / 6) <= 15
  ) {
    return true
  } else if (
    timeString === '21:00' &&
    sumOfTodaysBookings.bookingsAtNine + Math.ceil(numberOfGuests / 6) <= 15
  ) {
    return true
  } else {
    return false
  }
}
