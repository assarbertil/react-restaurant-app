import { Input, RadioButton, Button, Text } from '../../components/primitives'
import { useBookings } from '../../hooks/useBookings'
import { FieldGroup } from './FieldGroup'
import { styled } from 'stitches.config'
import { CustomDatePicker } from './DatePicker'
import * as Yup from 'yup'
import { Formik, Form } from 'formik'
import { IFormValues } from '@/interfaces/FormValues'
import { postBooking } from 'lib'
import { useState } from 'react'
import { format } from 'date-fns'
import sv from 'date-fns/locale/sv'
import { registerLocale } from 'react-datepicker'
import { Link } from 'react-router-dom'

registerLocale('sv', sv)

const BookingSchema = Yup.object().shape({
  name: Yup.string()
    .min(2, 'Ange ett korrekt förnamn, minst 2 bokstäver')
    .max(20, 'Ange ett korrekt förnamn, högst 20 bokstäver')
    .required('Du måste ange ditt förnamn'),
  lastname: Yup.string()
    .min(2, 'Ange ett korrekt efternamn, minst 2 bokstäver')
    .max(20, 'Ange ett korrekt efternamn, högst 20 bokstäver')
    .required('Du måste ange ditt efternamn'),
  email: Yup.string()
    .email('Ange en korrekt email')
    .required('Du måste ange en email'),
  phone: Yup.string()
    .matches(/^\+?\d+$/, 'Ange ett korrekt telefonnummer, ex: +4612345678')
    .min(9, 'Ange ett korrekt telefonnummer, minst 10 siffror')
    .max(12, 'Ange ett korrekt telefonnummer, högst 10 siffror')
    .required('Du måste ange ditt telefonnummer'),
  numberOfGuests: Yup.number()
    .min(1, 'Ange hur många ni är i sällskapet, minst 1 person')
    .max(6, 'Ange hur många ni är i sällskapet, minst 1 person')
    .required('Ange hur många ni är i sällskapet, minst 1 person')
})

export const BookingForm = () => {
  const [submitted, setSubmitted] = useState(false)
  const { data: bookedDates, error, isLoading, mutate } = useBookings()

  return (
    <Formik
      initialValues={{
        numberOfGuests: 0,
        date: '',
        time: '',
        name: '',
        lastname: '',
        email: '',
        phone: ''
      }}
      validationSchema={BookingSchema}
      onSubmit={async (values: IFormValues) => {
        const booking = {
          date: values.date,
          time: values.time,
          numberOfGuests: values.numberOfGuests,
          customer: {
            name: values.name,
            lastname: values.lastname,
            email: values.email,
            phone: values.phone.toString()
          }
        }

        postBooking(booking)
        alert(JSON.stringify(booking, null, 2))
        setSubmitted(true)
      }}
    >
      {({ values, errors, touched }) => (
        <>
          {!submitted ? (
            <Form>
              <FieldGroup name="Hur många gäster">
                <RadioButtonContainer
                  role="group"
                  aria-labelledby="my-radio-group"
                >
                  <RadioButton
                    label="1"
                    name="numberOfGuests"
                    id="1"
                    value={1}
                  />
                  <RadioButton
                    label="2"
                    name="numberOfGuests"
                    id="2"
                    value={2}
                  />
                  <RadioButton
                    label="3"
                    name="numberOfGuests"
                    id="3"
                    value={3}
                  />
                  <RadioButton
                    label="4"
                    name="numberOfGuests"
                    id="4"
                    value={4}
                  />
                  <RadioButton
                    label="5"
                    name="numberOfGuests"
                    id="5"
                    value={5}
                  />
                  <RadioButton
                    label="6"
                    name="numberOfGuests"
                    id="6"
                    value={6}
                  />
                </RadioButtonContainer>
                {errors.numberOfGuests && touched.numberOfGuests ? (
                  <div style={{ color: 'red' }}>{errors.numberOfGuests}</div>
                ) : null}
              </FieldGroup>

              <FieldGroup name="Datum">
                <CustomDatePicker />
              </FieldGroup>

              <FieldGroup name="Kontaktuppgifter">
                <InputContainer>
                  <Input
                    label="Förnamn"
                    id="name"
                    name="name"
                    type="text"
                    placeholder="Förnamn"
                    isError={errors.name && touched.name ? true : false}
                    errorMsg={errors.name}
                  />

                  <Input
                    label="Efternamn"
                    id="lastname"
                    name="lastname"
                    type="text"
                    placeholder="Efternamn"
                    isError={errors.lastname && touched.lastname ? true : false}
                    errorMsg={errors.lastname}
                  />

                  <Input
                    label="Email"
                    id="email"
                    name="email"
                    type="text"
                    placeholder="Email"
                    isError={errors.email && touched.email ? true : false}
                    errorMsg={errors.email}
                  />

                  <Input
                    label="Telefonnummer"
                    id="phone"
                    name="phone"
                    type="text"
                    placeholder="ex: +4612345678"
                    isError={errors.phone && touched.phone ? true : false}
                    errorMsg={errors.phone}
                  />
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
            </Form>
          ) : (
            <div>
              <Text as="h3" type="title3">
                Din bokning har skickats!
              </Text>
              <Text>Tack för din bokning, {values.name}!</Text>
              <Text>
                Du har bokat{' '}
                {format(new Date(values.date), 'cccc', { locale: sv })} den{' '}
                {format(new Date(values.date), 'do LLLL', { locale: sv })}
                {' klockan '}
                {values.time} för {values.numberOfGuests} personer.
              </Text>
              <Link to="/">
                <Text
                  css={{
                    color: '$secondary',
                    marginTop: '1rem',
                    marginBottom: '16rem',
                    display: 'block'
                  }}
                  as="span"
                >
                  Tillbaka till hem
                </Text>
              </Link>
            </div>
          )}
        </>
      )}
    </Formik>
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
