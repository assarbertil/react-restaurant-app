import { Text, Input, RadioButton, Button } from '../../components/primitives'
import { useBookings } from '../../hooks/useBookings'
import { FieldGroup } from './FieldGroup'
import { styled } from 'stitches.config'
import DateForm, { CustomDatePicker } from './DatePicker'
import { useState } from 'react'
import * as Yup from 'yup'
import { useFormik } from 'formik'

const handleRadio = (e: any) => {
  console.log(e.target.value)
}

export const BookingForm = () => {
  const { data: bookedDates, error, isLoading } = useBookings()

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
        date: 'startDate!.toISOString().slice(0, 10)',
        time: 'startDate!.toLocaleString().slice(12, 17)',
        // date: startDate!.toISOString().slice(0, 10),
        // time: startDate!.toLocaleString().slice(12, 17),
        customer: {
          name: values.name,
          lastname: values.lastname,
          email: values.email,
          phone: values.phone
        }
      }

      console.log(booking)
    }
  })

  return (
    <form onSubmit={formik.handleSubmit}>
      <FieldGroup name="Hur många gäster">
        <RadioButtonContainer>
          <RadioButton
            label="1"
            name="numberOfGuests"
            id="1"
            onChange={formik.handleChange}
            onBlur={formik.handleBlur}
            value={1}
          />
          <RadioButton
            label="2"
            name="numberOfGuests"
            id="2"
            onChange={formik.handleChange}
            onBlur={formik.handleBlur}
            value={2}
          />
          <RadioButton
            label="3"
            name="numberOfGuests"
            id="3"
            onChange={formik.handleChange}
            onBlur={formik.handleBlur}
            value={3}
          />
          <RadioButton
            label="4"
            name="numberOfGuests"
            id="4"
            onChange={formik.handleChange}
            onBlur={formik.handleBlur}
            value={4}
          />
          <RadioButton
            label="5"
            name="numberOfGuests"
            id="5"
            onChange={formik.handleChange}
            onBlur={formik.handleBlur}
            value={5}
          />
          <RadioButton
            label="6"
            name="numberOfGuests"
            id="6"
            onChange={formik.handleChange}
            onBlur={formik.handleBlur}
            value={6}
          />
        </RadioButtonContainer>

        {formik.touched.numberOfGuests && formik.errors.numberOfGuests ? (
          <div style={{ color: 'red' }}>{formik.errors.numberOfGuests}</div>
        ) : null}
      </FieldGroup>

      <FieldGroup name="Datum">
        <CustomDatePicker />
      </FieldGroup>

      <FieldGroup name="Kontaktuppgifter">
        <InputContainer>
          <Input
            id="name"
            name="name"
            type="text"
            placeholder="Förnamn"
            onChange={formik.handleChange}
            onBlur={formik.handleBlur}
            value={formik.values.name}
          />
          {formik.touched.name && formik.errors.name ? (
            <div style={{ color: 'red' }}>{formik.errors.name}</div>
          ) : null}
          <Input
            id="lastname"
            name="lastname"
            type="text"
            placeholder="Efternamn"
            onChange={formik.handleChange}
            onBlur={formik.handleBlur}
            value={formik.values.lastname}
          />
          {formik.touched.lastname && formik.errors.lastname ? (
            <div style={{ color: 'red' }}>{formik.errors.lastname}</div>
          ) : null}

          <Input
            id="email"
            name="email"
            type="text"
            placeholder="Email"
            onChange={formik.handleChange}
            onBlur={formik.handleBlur}
            value={formik.values.email}
          />
          {formik.touched.email && formik.errors.email ? (
            <div style={{ color: 'red' }}>{formik.errors.email}</div>
          ) : null}

          <Input
            id="phone"
            name="phone"
            type="text"
            placeholder="Telefon"
            onChange={formik.handleChange}
            onBlur={formik.handleBlur}
            value={formik.values.phone}
          />
          {formik.touched.phone && formik.errors.phone ? (
            <div style={{ color: 'red' }}>{formik.errors.phone}</div>
          ) : null}
        </InputContainer>
      </FieldGroup>

      <Button
        type="submit"
        size="large"
        variant="secondary"
        css={{ marginTop: '2rem' }}
      >
        Boka
      </Button>
    </form>
  )
}

const RadioButtonContainer = styled('div', {
  display: 'flex',
  columnGap: '1rem'
})

const InputContainer = styled('div', {
  display: 'flex',
  flexDirection: 'column',
  rowGap: '1rem'
})
