import {
  Input,
  RadioButton,
  Button,
  Text,
  Checkbox
} from 'components/primitives'
import { useBookings } from 'hooks/useBookings'
import { FieldGroup } from './FieldGroup'
import { styled } from 'stitches.config'
import { CustomDatePicker } from './DatePicker'
import { Formik, Form } from 'formik'
import { BookingSchema } from './BookingSchema'
import { IFormValues } from '@/interfaces/FormValues'
import { postBooking } from 'lib'
import { useState } from 'react'
import { format } from 'date-fns'
import { sv, enGB } from 'date-fns/locale'
import { registerLocale } from 'react-datepicker'
import { Link } from 'react-router-dom'
import { INewBooking } from '@/interfaces/NewBooking'
import { useTranslation } from 'react-i18next'

registerLocale('sv', sv)
registerLocale('en', enGB)

export const BookingForm = () => {
  const [submitted, setSubmitted] = useState(false)
  const [responseId, setResponseId] = useState('')
  const { data: bookedDates, error, isLoading, mutate } = useBookings()
  const { t, i18n } = useTranslation()
  return (
    <Formik
      initialValues={{
        numberOfGuests: 0,
        date: '',
        time: '',
        name: '',
        lastname: '',
        email: '',
        phone: '',
        gdpr: false
      }}
      validationSchema={BookingSchema}
      onSubmit={async (values: IFormValues) => {
        const booking: INewBooking = {
          restaurantId: process.env.REACT_APP_RESTAURANT_ID!,
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

        const response = await postBooking(booking)

        setResponseId(response.insertedId)
        setSubmitted(true)
      }}
    >
      {({ values, errors, touched }) => (
        <>
          {!submitted ? (
            <Form>
              <FieldGroup name={t('guests')}>
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
                  {errors.numberOfGuests && touched.numberOfGuests && (
                    <Text
                      css={{
                        color: 'red',
                        position: 'absolute',
                        bottom: '-1.25rem'
                      }}
                      type="small"
                    >
                      {errors.numberOfGuests}
                    </Text>
                  )}
                </RadioButtonContainer>
              </FieldGroup>

              <FieldGroup name={t('date')}>
                <CustomDatePicker />
              </FieldGroup>

              <FieldGroup name={t('contactInformation')}>
                <InputContainer>
                  <Input
                    label={t('firstName')}
                    id="name"
                    name="name"
                    type="text"
                    placeholder={t('firstName')}
                    isError={errors.name && touched.name ? true : false}
                    errorMsg={errors.name}
                  />

                  <Input
                    label={t('lastName')}
                    id="lastname"
                    name="lastname"
                    type="text"
                    placeholder={t('lastName')}
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
                    label={t('phoneNumber')}
                    id="phone"
                    name="phone"
                    type="text"
                    placeholder="ex: +4612345678"
                    isError={errors.phone && touched.phone ? true : false}
                    errorMsg={errors.phone}
                  />
                </InputContainer>
              </FieldGroup>

              <Text
                css={{ marginTop: '2rem', marginBottom: '0.25rem' }}
                as="h2"
                type="title4"
              >
                GDPR
              </Text>
              <RadioButtonContainer>
                <Checkbox
                  label={t('gdpr')}
                  id="gdpr"
                  name="gdpr"
                  value={true}
                  isError={errors.gdpr && touched.gdpr ? true : false}
                  errorMsg={errors.gdpr}
                />
              </RadioButtonContainer>

              <Button
                type="submit"
                size="large"
                variant="secondary"
                css={{ marginTop: '2rem' }}
              >
                {t('booking')}
              </Button>
            </Form>
          ) : (
            <div>
              <Text as="h3" type="title3">
                {t('sent')}
              </Text>
              <Text>{t('thanks')} {values.name}!</Text>
              <Text>
                {t('booked')}{' '}
                {format(new Date(values.date), 'cccc', { locale: i18n.language === 'sv' ? sv : enGB })} {t('when')}{' '}
                {format(new Date(values.date), 'do LLLL', { locale: i18n.language === 'sv' ? sv : enGB })}
                {' '}{t('at')}{' '}
                {values.time} {t('for')} {values.numberOfGuests} {t('person')}
              </Text>
              <Text>{t('bookRef')} {responseId}</Text>
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
                  {t('back')}
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
  columnGap: '1rem',
  rowGap: '1rem',
  flexWrap: 'wrap',
  alignItems: 'center',
  position: 'relative'
})

const InputContainer = styled('div', {
  display: 'flex',
  flexDirection: 'column',
  rowGap: '1rem'
})
function en(arg0: string, en: any) {
  throw new Error('Function not implemented.')
}

