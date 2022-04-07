import setHours from 'date-fns/setHours'
import { IBooking } from '../../interfaces/Booking'
import { format } from 'date-fns'
import { countBookingsByDay, checkBookingTime, filterBookingsByDay } from 'lib'
import setMinutes from 'date-fns/setMinutes'
import { useState, useEffect } from 'react'
import DatePicker from 'react-datepicker'
import 'react-datepicker/dist/react-datepicker.css'
import { registerLocale } from 'react-datepicker'
import sv from 'date-fns/locale/sv'
import { useBookings } from '../../hooks/useBookings'
registerLocale('sv', sv)

export const CustomDatePicker = () => {
  const { data: bookedDates, error, isLoading } = useBookings()
  const [date, setDate] = useState<Date | null>(new Date())

  return (
    <DatePicker
      selected={date}
      onChange={date => setDate(date)}
      id="date"
      name="date"
      placeholderText="Klicka för att se lediga datum"
      showTimeSelect
      startOpen
      locale="sv"
      timeCaption="klockslag"
      dateFormat="yyyy-MM-dd p"
      // excludeDates={() =>
      //   bookedDates.map<Date | undefined>(bookedDate =>
      //     checkBookingTime(bookedDate)
      //   )
      // }
      // includeTimes={[
      //   setHours(setMinutes(new Date(), 0), 18),
      //   setHours(setMinutes(new Date(), 0), 21)
      // ]}
      // filterTime={(time) => filterBookedTimes(time, bookings)}
    />
  )
}

export default CustomDatePicker
