import { styled } from '../stitches.config'
import { Text, Button } from '../components/primitives'
import { Link } from 'react-router-dom'
const BackgroundContainer = styled('section', {
  backgroundImage: 'url(img/steak.jpg)',
  backgroundPosition: 'center',
  backgroundSize: 'cover',
  height: '70vh',
  display: 'flex',
  flexDirection: 'column',
  justifyContent: 'center',
  alignItems: 'center'
})

export const Home = () => {
  return (
    <div>
      <BackgroundContainer>
        <Text
          type="title1"
          as="h1"
          css={{ fontSize: '4.5rem', textShadow: '0 4px 16px black' }}
        >
          Välkommen till Group 12
        </Text>
        <Text type="title1" as="h2" css={{ textShadow: '0 4px 16px black' }}>
          Vår nya restaurang har öppnat!
        </Text>
        <Link to="/boka">
          <Button
            as="span"
            type="primary"
            size="large"
            css={{
              textShadow: '0 4px 16px black',
              marginTop: '1.5rem',
              display: 'inline-block'
            }}
          >
            Boka bord
          </Button>
        </Link>
      </BackgroundContainer>
    </div>
  )
}
