import setHours from 'date-fns/setHours'
import { format } from 'date-fns'
import {
  countBookingsByDay,
  filterBookedTimes,
  filterBookingsByDay,
  returnCorrectBookingsArray
} from 'lib'
import setMinutes from 'date-fns/setMinutes'
import { useState } from 'react'
import DatePicker from 'react-datepicker'
import 'react-datepicker/dist/react-datepicker.css'
import sv from 'date-fns/locale/sv'
import { useBookings } from '../../hooks/useBookings'
import { useFormikContext } from 'formik'
import { IFormValues } from '../../interfaces/FormValues'
import { registerLocale } from 'react-datepicker'

registerLocale('sv', sv)

export const CustomDatePicker = () => {
  const { data: bookings } = useBookings()
  const [date, setDate] = useState<Date | null>(null)
  const { values, setValues } = useFormikContext<IFormValues>()

  const handleChange = (date: Date) => {
    setDate(date)

    const stringifiedDate = format(date, 'P', { locale: sv })
    const stringifiedTime = format(date, 'p', { locale: sv })

    setValues({ ...values, date: stringifiedDate, time: stringifiedTime })
  }

  const filterDates = (date: Date) => {
    const stringifiedDate = format(date, 'P', { locale: sv })
    const currentDate = new Date()
    const passedDate = new Date(date)

    const todaysBooking = filterBookingsByDay(bookings, stringifiedDate)

    return passedDate > currentDate && todaysBooking.length === 0
  }
  //
  // let arr
  // if (bookings) arr = returnCorrectBookingsArray(bookings)

  if (!bookings) return <div>'Loading'</div>

  return (
    <DatePicker
      selected={date}
      onChange={handleChange}
      id="date"
      name="date"
      placeholderText="Klicka för att se lediga datum"
      showTimeSelect
      startOpen
      inline
      locale="sv"
      timeCaption="klockslag"
      dateFormat="yyyy-MM-dd p"
      // excludeDates={arr}
      filterDate={filterDates}
      includeTimes={[
        setHours(setMinutes(new Date(), 0), 18),
        setHours(setMinutes(new Date(), 0), 21)
      ]}
      filterTime={time => filterBookedTimes(time, bookings)}
    />
  )
}

export default CustomDatePicker
