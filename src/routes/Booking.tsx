import { styled } from 'stitches.config'
import { BookingForm } from 'features/booking-form'

export const Booking = () => {
  return (
    <BackgroundContainer>
      <Center>
        <BookingForm />
      </Center>
    </BackgroundContainer>
  )
}

const BackgroundContainer = styled('section', {
  backgroundImage: 'url(img/steak-dark.jpg)',
  backgroundPosition: 'center',
  backgroundSize: 'cover',
  paddingTop: '4rem',
  display: 'flex',
  flexDirection: 'column',
  justifyContent: 'center',
  alignItems: 'center'
})

const Center = styled('div', {
  marginLeft: 'auto',
  marginRight: 'auto',
  width: '100%',
  padding: '1rem',
  '@sm': { maxWidth: 'max-content' }
})
