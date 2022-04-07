import { IBooking } from 'interfaces/Booking'
import format from 'date-fns/format'
import { registerLocale } from 'react-datepicker'
import sv from 'date-fns/locale/sv'
import { filterBookingsByDay } from './filterBookingsByDay'
import { countBookingsByDay } from './countBookingsByDay'

registerLocale('sv', sv)

export const filterBookedTimes: any = (time: Date, bookings: IBooking[]) => {
  console.log('körs')
  let formattedDate = format(time, 'P', { locale: sv })
  let formattedTime = format(time, 'p', { locale: sv })
  let filteredBookings = filterBookingsByDay(bookings, formattedDate)
  let bookingsByDay = countBookingsByDay(filteredBookings)

  if (formattedTime === '18:00' && bookingsByDay.bookingsAtSixAmount < 15) {
    return true
  } else if (
    formattedTime === '21:00' &&
    bookingsByDay.bookingsAtNineAmount < 15
  ) {
    return true
  } else {
    return false
  }
}
