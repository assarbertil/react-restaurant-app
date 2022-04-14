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
import { useBookings } from 'hooks/useBookings'
import { useFormikContext } from 'formik'
import { IFormValues } from 'interfaces/FormValues'
import { registerLocale } from 'react-datepicker'
import { useTranslation } from 'react-i18next'

registerLocale('sv', sv) // Makes it possible to use sv locale

// DatePicker Properties
interface DatePickerProps {
  inline?: boolean
  value?: Date
  disabled?: boolean
}

// Main date picker component
export const CustomDatePicker: FC<DatePickerProps> = ({
  inline = true,
  value,
  disabled = false
}) => {
  const { data: bookings } = useBookings()
  const [date, setDate] = useState<Date | null>(null)
  const { values, setValues } = useFormikContext<IFormValues>()
  const { t, i18n } = useTranslation()

  // Runs when date or time is changed
  const handleChange = (date: Date) => {
    // Set date picker value to react state
    setDate(date)

    // The date and time needs to be strings to be set in formik context
    const stringifiedDate = format(date, 'P', { locale: sv })
    const stringifiedTime = format(date, 'p', { locale: sv })

    // Setting values in formik context
    setValues({ ...values, date: stringifiedDate, time: stringifiedTime })
  }

  // Dont render if bookings arent loaded
  if (!bookings) return <div>'Loading'</div>

  /**
   * Filter unavailable dates
   * @param date - Date to be filtered. Every visible day in the date picker is put in
   * @returns - Returns false if date is unavailable
   *
   * Filters:
   * - Dates that cant be booked
   * - Dates before today
   * - Fully booked dates
   * - Dates that dont have available tables for your number of guests
   */
  const filterUnavailableDates = (date: Date) => {
    const dateAsString = format(date, 'P', { locale: sv })
    const currentDate = sub(new Date(), { days: 1 }) // Yesterdays date

    const todaysBookings = filterBookingsByDay(bookings, dateAsString) // All bookings
    const numberOfBookingsPerSitting = countBookingsByDay(todaysBookings)
    const totalBookings = Object.values(numberOfBookingsPerSitting).reduce(
      (a, b) => a + b,
      0
    )

    // First checks if date is before today, then ckecks if its fully booked or unavailable
    return (
      date > currentDate &&
      totalBookings +
      Math.ceil(
        (values.numberOfGuests > 6
          ? values.customNumberOfGuests
          : values.numberOfGuests) / 6
      ) <=
      30
    )
  }

  return (
    <DatePicker
      selected={value ? value : date}
      onChange={handleChange}
      disabled={disabled}
      id="date"
      name="date"
      showTimeSelect
      startOpen={inline ? true : false}
      inline={inline}
      locale={i18n.language}
      timeCaption={t('time')}
      dateFormat="yyyy-MM-dd p"
      filterDate={filterUnavailableDates}
      includeTimes={[
        setHours(setMinutes(new Date(), 0), 18),
        setHours(setMinutes(new Date(), 0), 21)
      ]}
      filterTime={time =>
        checkSittingAvailability(
          time,
          bookings,
          values.numberOfGuests > 6
            ? values.customNumberOfGuests
            : values.numberOfGuests
        )
      }
    />
  )
}

export default CustomDatePicker
