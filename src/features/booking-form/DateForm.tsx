import { useFormik } from 'formik'
import * as Yup from 'yup'
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
registerLocale('sv', sv)

const DateForm = () => {
  const [bookedDates, setBookedDates] = useState<IBooking[]>([])
  const [startDate, setStartDate] = useState<Date | null>(new Date())
  const onChange = (dates: any) => {
    const [start] = dates
    setStartDate(start)
  }

  useEffect(() => {
    const getBookings = async () => {
      const response = await fetch(
        'https://school-restaurant-api.azurewebsites.net/booking/restaurant/624b7cd3eec5141360b1c333'
      )
      setBookedDates(await response.json())
    }
    getBookings()
  }, [])

  const formik = useFormik({
    initialValues: {
      name: '',
      lastname: '',
      email: '',
      phone: '',
      numberOfGuests: 0
    },
    validationSchema: Yup.object({
      name: Yup.string()
        .min(2, 'Ange ett korrekt förnamn, minst 2 bokstäver')
        .max(20, 'Ange ett korrekt förnamn, högst 20 bokstäver')
        .required('Du måste ange ditt förnamn'),
      lastname: Yup.string()
        .min(3, 'Ange ett korrekt efternamn, minst 2 bokstäver')
        .max(20, 'Ange ett korrekt efternamn, högst 20 bokstäver')
        .required('Du måste ange ditt efternamn'),
      email: Yup.string()
        .email('ange en korrekt email')
        .required('Du måste ange en email'),
      phone: Yup.string()
        .min(10, 'ange ett korrekt telefonnummer, minst 10 siffror')
        .max(10, 'ange ett korrekt telefonnummer, högst 10 siffror')
        .required('Du måste ange ditt telefonnummer'),
      numberOfGuests: Yup.number()
        .min(1, 'Ange hur många ni är i sällskapet, minst 1 person')
        .max(6, 'Ange hur många ni är i sällskapet, minst 1 person')
        .required('Ange hur många ni är i sällskapet, minst 1 person')
    }),

    onSubmit: values => {
      const booking = {
        restaurantId: '624b7cd3eec5141360b1c333',
        numberOfGuests: +values.numberOfGuests,
        date: startDate!.toISOString().slice(0, 10),
        time: startDate!.toLocaleString().slice(12, 17),
        customer: {
          name: values.name,
          lastname: values.lastname,
          email: values.email,
          phone: values.phone
        }
      }
      // console.log(booking);
    }
  })
  console.log(
    bookedDates && bookedDates.map(bookedDate => checkBookingTime(bookedDate))
  )
  return (
    <div
      style={{
        display: 'flex',
        flexDirection: 'column',
        justifyContent: 'center',
        alignItems: 'center'
      }}
    >
      <h1>Bokning</h1>
      <form onSubmit={formik.handleSubmit}>
        <br />
        <h3>Antal gäster</h3>
        <label>1</label>
        <input
          id="1"
          name="numberOfGuests"
          type="radio"
          onChange={formik.handleChange}
          onBlur={formik.handleBlur}
          value={1}
        />
        <label>2</label>
        <input
          id="2"
          name="numberOfGuests"
          type="radio"
          onChange={formik.handleChange}
          onBlur={formik.handleBlur}
          value={2}
        />
        <label>3</label>
        <input
          id="3"
          name="numberOfGuests"
          type="radio"
          onChange={formik.handleChange}
          onBlur={formik.handleBlur}
          value={3}
        />
        <br />
        <label>4</label>
        <input
          id="4"
          name="numberOfGuests"
          type="radio"
          onChange={formik.handleChange}
          onBlur={formik.handleBlur}
          value={4}
        />
        <label>5</label>
        <input
          id="5"
          name="numberOfGuests"
          type="radio"
          onChange={formik.handleChange}
          onBlur={formik.handleBlur}
          value={5}
        />
        <label>6</label>
        <input
          id="6"
          name="numberOfGuests"
          type="radio"
          onChange={formik.handleChange}
          onBlur={formik.handleBlur}
          value={6}
        />
        {formik.touched.numberOfGuests && formik.errors.numberOfGuests ? (
          <div style={{ color: 'red' }}>{formik.errors.numberOfGuests}</div>
        ) : null}
        <br />
        <h1>Tid och datum</h1>
        {bookedDates && (
          <DatePicker
            selected={startDate}
            onChange={date => setStartDate(date)}
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
        )}

        <br />
        <h1>Kontaktuppgifter</h1>
        <label htmlFor="name">Förnamn:</label>
        <br />
        <input
          id="name"
          name="name"
          type="text"
          onChange={formik.handleChange}
          onBlur={formik.handleBlur}
          value={formik.values.name}
        />
        {formik.touched.name && formik.errors.name ? (
          <div style={{ color: 'red' }}>{formik.errors.name}</div>
        ) : null}
        <br />
        <label htmlFor="lastname">Efternamn:</label>
        <br />
        <input
          id="lastname"
          name="lastname"
          type="text"
          onChange={formik.handleChange}
          onBlur={formik.handleBlur}
          value={formik.values.lastname}
        />
        {formik.touched.lastname && formik.errors.lastname ? (
          <div style={{ color: 'red' }}>{formik.errors.lastname}</div>
        ) : null}
        <br />
        <label htmlFor="email">Email:</label>
        <br />
        <input
          id="email"
          name="email"
          type="text"
          onChange={formik.handleChange}
          onBlur={formik.handleBlur}
          value={formik.values.email}
        />
        {formik.touched.email && formik.errors.email ? (
          <div style={{ color: 'red' }}>{formik.errors.email}</div>
        ) : null}
        <br />
        <label htmlFor="phone">Tel:</label>
        <br />
        <input
          id="phone"
          name="phone"
          type="text"
          onChange={formik.handleChange}
          onBlur={formik.handleBlur}
          value={formik.values.phone}
        />
        {formik.touched.phone && formik.errors.phone ? (
          <div style={{ color: 'red' }}>{formik.errors.phone}</div>
        ) : null}
        <br />
        <button type="submit">Boka bord</button>
      </form>
    </div>
  )
}

export default DateForm
