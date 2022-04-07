import { styled } from '../stitches.config'
import { BookingForm } from '../features/booking-form'
import { postBooking } from '../lib/postBooking'

const BackgroundContainer = styled('section', {
  backgroundImage: 'url(img/steak-dark.jpg)',
  backgroundPosition: 'center',
  backgroundSize: 'cover',
  padding: '4rem',
  display: 'flex',
  flexDirection: 'column',
  justifyContent: 'center',
  alignItems: 'center'
})

export const Booking = () => {
  return (
    <div>
      <BackgroundContainer>
        <BookingForm />
      </BackgroundContainer>
      <button
        onClick={() =>
          postBooking({
            date: '2022-04-11',
            time: '21:00',
            numberOfGuests: 5,
            customer: {
              // id: '624d65ebd80b65d5c561f66z',
              name: 'hej',
              lastname: 'yo',
              email: 'a@example.com',
              phone: '111-1234567'
            }
          })
        }
      >
        BOKA
      </button>
    </div>
  )
}
