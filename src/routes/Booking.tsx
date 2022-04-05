import { styled } from '../stitches.config'
import { BookingForm } from '../features/booking-form'

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
    </div>
  )
}
