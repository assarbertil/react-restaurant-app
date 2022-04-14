import {
  Input,
  RadioButton,
  Button,
  Text,
  Checkbox
} from 'components/primitives'
import { FieldGroup } from './FieldGroup'
import { styled } from 'stitches.config'
import { CustomDatePicker } from './DatePicker'
import { Formik, Form } from 'formik'
//import { BookingSchema } from './BookingSchema'
import { IFormValues } from '@/interfaces/FormValues'
import { postBooking, sleep } from 'lib'
import { useState } from 'react'
import { format } from 'date-fns'
import { sv, enGB } from 'date-fns/locale'
import { registerLocale } from 'react-datepicker'
import { Link } from 'react-router-dom'
import { useTranslation } from 'react-i18next'
import * as Yup from 'yup'

// Makes locales usable
registerLocale('sv', sv)
registerLocale('en', enGB)

export const BookingForm = () => {
  const [submitted, setSubmitted] = useState(false)
  const { t, i18n } = useTranslation()

  const BookingSchema = Yup.object().shape({
    name: Yup.string()
      .min(2, t('validation:firstNameMin'))
      .max(20, t('validation:firstNameMax'))
      .required(t('validation:firstNameReq')),
    lastname: Yup.string()
      .min(2, t('validation:lastNameMin'))
      .max(20, t('validation:lastNameMax'))
      .required(t('validation:lastNameReq')),
    email: Yup.string()
      .email(t('validation:emailValid'))
      .required(t('validation:emailValid')),
    phone: Yup.string()
      .matches(/^\+?\d+$/, t('validation:phoneMatches'))
      .min(9, t('validation:phoneMin'))
      .max(12, t('validation:phoneMax'))
      .required(t('validation:phoneReq')),
    numberOfGuests: Yup.number()
      .min(1, t('validation:guestsReq'))
      .max(7, t('validation:guestsReq'))
      .required(t('validation:guestsReq')),
    customNumberOfGuests: Yup.number()
      .min(7, t('validation:guestsReq'))
      .max(90, t('validation:guestsReq')),
    gdpr: Yup.boolean().oneOf(
      [true],
      t('validation:gdprReq')
    )
  })

  return (
    <Formik
      initialValues={{
        numberOfGuests: 0,
        customNumberOfGuests: 7,
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
        // If the booking only requires one table, send a simple post request
        if (values.numberOfGuests <= 6) {
          await postBooking({
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
          })
        }
        // If the booking requires multiple tables, send one request for each
        else {
          for (
            let i = 0;
            i <
            Math.ceil(
              (values.numberOfGuests > 6
                ? values.customNumberOfGuests
                : values.numberOfGuests) / 6
            );
            i++
          ) {
            // All tables are guaranteed to be filled except for the last
            // This figures out the amount of people who are sitting at the last table
            if (
              i ===
              Math.ceil(
                (values.numberOfGuests > 6
                  ? values.customNumberOfGuests
                  : values.numberOfGuests) / 6
              ) -
              1
            ) {
              // This posts the last booking with the right amount of people
              let peopleAtTheLastTable
              // Checks if the last table is full
              if (values.customNumberOfGuests % 6 === 0) {
                peopleAtTheLastTable = 6
              } else {
                peopleAtTheLastTable = values.customNumberOfGuests % 6
              }

              await postBooking({
                restaurantId: process.env.REACT_APP_RESTAURANT_ID!,
                date: values.date,
                time: values.time,
                numberOfGuests: peopleAtTheLastTable,
                customer: {
                  name: values.name,
                  lastname: values.lastname,
                  email: values.email,
                  phone: values.phone.toString()
                }
              })
            } else {
              // This part makes bookings for filled tables
              await postBooking({
                restaurantId: process.env.REACT_APP_RESTAURANT_ID!,
                date: values.date,
                time: values.time,
                numberOfGuests: 6,
                customer: {
                  name: values.name,
                  lastname: values.lastname,
                  email: values.email,
                  phone: values.phone.toString()
                }
              })
            }

            await sleep(0.4)
          }
        }

        setSubmitted(true)
      }}
    >
      {({ values, errors, touched, setFieldTouched }) => {
        i18n.on('languageChanged', () => {
          Object.keys(errors).forEach(fieldName => {
            setFieldTouched(fieldName)
          })
        })
        return (
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
                    <RadioButton
                      label="6+"
                      name="numberOfGuests"
                      id="7"
                      value={7}
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

                  {values.numberOfGuests > 6 && (
                    <Input
                      type="number"
                      name="customNumberOfGuests"
                      id="customNumberOfGuests"
                      isError={false}
                      errorMsg="Hej"
                      max={90}
                      min={7}
                    />
                  )}
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
                <Text>
                  {t('thanks')} {values.name}!
                </Text>
                <Text>
                  {t('booked')}{' '}
                  {format(new Date(values.date), 'cccc', {
                    locale: i18n.language === 'sv' ? sv : enGB
                  })}{' '}
                  {t('when')}{' '}
                  {format(new Date(values.date), 'do LLLL', {
                    locale: i18n.language === 'sv' ? sv : enGB
                  })}{' '}
                  {t('at')} {values.time} {t('for')}{' '}
                  {values.numberOfGuests > 6
                    ? values.customNumberOfGuests
                    : values.numberOfGuests}{' '}
                  {t('person')}
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
                    {t('back')}
                  </Text>
                </Link>
              </div>
            )}
          </>)
      }}
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
