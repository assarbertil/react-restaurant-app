import setHours from 'date-fns/setHours'
import { format } from 'date-fns'
import {
  countBookingsByDay,
  checkBookingTime,
  filterBookingsByDay,
  filterBookedTimes,
  returnCorrectBookingsArray
} from 'lib'
import setMinutes from 'date-fns/setMinutes'
import { useState, useEffect } from 'react'
import DatePicker from 'react-datepicker'
import 'react-datepicker/dist/react-datepicker.css'
import { registerLocale } from 'react-datepicker'
import sv from 'date-fns/locale/sv'
import { useBookings } from '../../hooks/useBookings'
import { useFormikContext } from 'formik'
import { IFormValues } from '../../interfaces/FormValues'
import { IBooking } from '@/interfaces/Booking'
registerLocale('sv', sv)

export const CustomDatePicker = () => {
  const { data: bookings, error, isLoading } = useBookings()
  const [date, setDate] = useState<Date | null>(null)
  const { values, setValues } = useFormikContext<IFormValues>()

  const handleChange = (date: Date) => {
    setDate(date)

    const stringifiedDate = format(date, 'P', { locale: sv })
    const stringifiedTime = format(date, 'p', { locale: sv })

    setValues({ ...values, date: stringifiedDate, time: stringifiedTime })
  }

  const arr = returnCorrectBookingsArray(bookings)

  if (bookings === undefined) return <div>'Loading'</div>

  return (
    <DatePicker
      selected={date}
      onChange={handleChange}
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
      // excludeDates={[] || returnCorrectBookingsArray()}
      excludeDates={arr}
      includeTimes={[
        setHours(setMinutes(new Date(), 0), 18),
        setHours(setMinutes(new Date(), 0), 21)
      ]}
      filterTime={time => filterBookedTimes(time, bookings)}
    />
  )
}

export default CustomDatePicker
