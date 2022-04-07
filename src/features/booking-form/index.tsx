import { Input, RadioButton, Button } from '../../components/primitives'
import { useBookings } from '../../hooks/useBookings'
import { FieldGroup } from './FieldGroup'
import { styled } from 'stitches.config'
import { CustomDatePicker } from './DatePicker'
import * as Yup from 'yup'
import { Formik, Form } from 'formik'
import { IFormValues } from '@/interfaces/FormValues'
import { postBooking } from 'lib'

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
      {({ values }) => (
        <Form>
          <FieldGroup name="Hur många gäster">
            <RadioButtonContainer role="group" aria-labelledby="my-radio-group">
              <RadioButton label="1" name="numberOfGuests" id="1" value={1} />
              <RadioButton label="2" name="numberOfGuests" id="2" value={2} />
              <RadioButton label="3" name="numberOfGuests" id="3" value={3} />
              <RadioButton label="4" name="numberOfGuests" id="4" value={4} />
              <RadioButton label="5" name="numberOfGuests" id="5" value={5} />
              <RadioButton label="6" name="numberOfGuests" id="6" value={6} />
            </RadioButtonContainer>

            {/* {formik.touched.numberOfGuests && formik.errors.numberOfGuests ? (
              <div style={{ color: 'red' }}>{formik.errors.numberOfGuests}</div>
            ) : null} */}
          </FieldGroup>

          <FieldGroup name="Datum">
            <CustomDatePicker />
          </FieldGroup>

          <FieldGroup name="Kontaktuppgifter">
            <InputContainer>
              <Input id="name" name="name" type="text" placeholder="Förnamn" />
              {/* {formik.touched.name && formik.errors.name ? (
                <div style={{ color: 'red' }}>{formik.errors.name}</div>
              ) : null} */}
              <Input
                id="lastname"
                name="lastname"
                type="text"
                placeholder="Efternamn"
              />
              {/* {formik.touched.lastname && formik.errors.lastname ? (
                <div style={{ color: 'red' }}>{formik.errors.lastname}</div>
              ) : null} */}

              <Input id="email" name="email" type="text" placeholder="Email" />
              {/* {formik.touched.email && formik.errors.email ? (
                <div style={{ color: 'red' }}>{formik.errors.email}</div>
              ) : null} */}

              <Input
                id="phone"
                name="phone"
                type="text"
                placeholder="Telefon"
              />
              {/* {formik.touched.phone && formik.errors.phone ? (
                <div style={{ color: 'red' }}>{formik.errors.phone}</div>
              ) : null} */}
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
