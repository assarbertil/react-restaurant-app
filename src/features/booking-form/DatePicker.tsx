import setHours from 'date-fns/setHours'
import sub from 'date-fns/sub'
import { format } from 'date-fns'
import {
  countBookingsByDay,
  checkSittingAvailability,
  filterBookingsByDay
} from 'lib'
import setMinutes from 'date-fns/setMinutes'
import { FC, useState } from 'react'
import DatePicker from 'react-datepicker'
import 'react-datepicker/dist/react-datepicker.css'
import sv from 'date-fns/locale/sv'
import { useBookings } from '../../hooks/useBookings'
import { useFormikContext } from 'formik'
import { IFormValues } from '../../interfaces/FormValues'
import { registerLocale } from 'react-datepicker'

registerLocale('sv', sv)

interface DatePickerProps {
  inline?: boolean
  customStart?: Date
  disabled?: boolean
}

export const CustomDatePicker: FC<DatePickerProps> = ({
  inline = true,
  customStart,
  disabled = false
}) => {
  const { data: bookings } = useBookings()
  const [date, setDate] = useState<Date | null>(null)
  const { values, setValues } = useFormikContext<IFormValues>()

  const handleChange = (date: Date) => {
    setDate(date)

    const stringifiedDate = format(date, 'P', { locale: sv })
    const stringifiedTime = format(date, 'p', { locale: sv })

    setValues({ ...values, date: stringifiedDate, time: stringifiedTime })
  }

  if (!bookings) return <div>'Loading'</div>

  const filterDates = (date: Date) => {
    const dateAsString = format(date, 'P', { locale: sv })
    const currentDate = sub(new Date(), { days: 1 })

    const todaysBooking = filterBookingsByDay(bookings, dateAsString)
    const numberOfBookingsPerTime = countBookingsByDay(todaysBooking)
    const bookingsSum = Object.values(numberOfBookingsPerTime).reduce(
      (a, b) => a + b,
      0
    )

    return date > currentDate && bookingsSum < 30
  }

  return (
    <DatePicker
      selected={customStart ? customStart : date}
      onChange={handleChange}
      disabled={disabled}
      id="date"
      name="date"
      placeholderText="Klicka för att se lediga datum"
      showTimeSelect
      startOpen={inline ? true : false}
      inline={inline}
      locale="sv"
      timeCaption="klockslag"
      dateFormat="yyyy-MM-dd p"
      filterDate={filterDates}
      includeTimes={[
        setHours(setMinutes(new Date(), 0), 18),
        setHours(setMinutes(new Date(), 0), 21)
      ]}
      filterTime={time => checkSittingAvailability(time, bookings)}
    />
  )
}

export default CustomDatePicker
