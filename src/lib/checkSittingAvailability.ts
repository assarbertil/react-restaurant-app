import { IBooking } from '@/interfaces/Booking'
import format from 'date-fns/format'
import { registerLocale } from 'react-datepicker'
import sv from 'date-fns/locale/sv'
import { filterBookingsByDay } from './filterBookingsByDay'
import { countBookingsByDay } from './countBookingsByDay'

registerLocale('sv', sv)

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
