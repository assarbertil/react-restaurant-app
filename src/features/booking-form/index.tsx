import { Input, RadioButton, Button } from '../../components/primitives'
import { useBookings } from '../../hooks/useBookings'
import { FieldGroup } from './FieldGroup'
import { styled } from 'stitches.config'
import { CustomDatePicker } from './DatePicker'
import * as Yup from 'yup'
import { Formik, Form } from 'formik'
import { IFormValues } from '@/interfaces/FormValues'
import { postBooking } from 'lib'
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
})

export const BookingForm = () => {
  const { data: bookedDates, error, isLoading } = useBookings()

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
            phone: values.phone
          }
        }

        postBooking(booking)
        alert(JSON.stringify(booking, null, 2))
      }}
    >
      {({ values, errors, touched }) => (
        <Form>
          <FieldGroup name="Hur många gäster">
            <RadioButtonContainer role="group" aria-labelledby="my-radio-group">
              <RadioButton label="1" name="numberOfGuests" id="1" value={1} />
              <RadioButton label="2" name="numberOfGuests" id="2" value={2} />
              <RadioButton label="3" name="numberOfGuests" id="3" value={3} />
              <RadioButton label="4" name="numberOfGuests" id="4" value={4} />
              <RadioButton label="5" name="numberOfGuests" id="5" value={5} />
              <RadioButton label="6" name="numberOfGuests" id="6" value={6} />
              {errors.numberOfGuests && touched.numberOfGuests ? (
                <div style={{ color: 'red' }}>{errors.numberOfGuests}</div>
              ) : null}
            </RadioButtonContainer>
          </FieldGroup>

          <FieldGroup name="Datum">
            <CustomDatePicker />
          </FieldGroup>

          <FieldGroup name="Kontaktuppgifter">
            <InputContainer>
              <Input id="name" name="name" type="text" placeholder="Förnamn" />
              {errors.name && touched.name ? (
                <div style={{ color: 'red' }}>{errors.name}</div>
              ) : null}
              <Input
                id="lastname"
                name="lastname"
                type="text"
                placeholder="Efternamn"
              />
              {errors.lastname && touched.lastname ? (
                <div style={{ color: 'red' }}>{errors.lastname}</div>
              ) : null}

              <Input id="email" name="email" type="text" placeholder="Email" />
              {errors.email && touched.email ? (
                <div style={{ color: 'red' }}>{errors.email}</div>
              ) : null}
              <Input
                id="phone"
                name="phone"
                type="text"
                placeholder="Telefon"
              />
              {errors.phone && touched.phone ? (
                <div style={{ color: 'red' }}>{errors.phone}</div>
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
        </Form>
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
