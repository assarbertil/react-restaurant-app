import * as Yup from 'yup'

// The validation schema for the booking form
export const BookingSchema = Yup.object().shape({
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
    .max(7, 'Ange hur många ni är i sällskapet, minst 1 person')
    .required('Ange hur många ni är i sällskapet, minst 1 person'),
  customNumberOfGuests: Yup.number()
    .min(7, 'Ange hur många ni är i sällskapet, minst 7 personer')
    .max(90, 'Ange hur många ni är i sällskapet, max 90 personer'),
  gdpr: Yup.boolean().oneOf(
    [true],
    'Du måste godkänna att vi sparar din information'
  )
})
