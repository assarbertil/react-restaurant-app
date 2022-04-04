import { Link } from 'react-router-dom'

import { styled } from '../stitches.config'
import { Container } from './Container'
import { Button } from './primitives/Button'
import { Text } from './primitives/Text'

const HeaderElement = styled('header', {
  display: 'flex',
  flexDirection: 'row',
  alignItems: 'center',
  justifyContent: 'space-between',
  padding: '1rem'
})

export const Header = () => (
  <Container>
    <HeaderElement>
      <Link to="/">
        <img src="img/logo.png" alt="" height={128} width={128} />
      </Link>

      <div>
        <Link to="/boka">
          <Button as="a" type="tertiary" size="large">
            Boka bord
          </Button>
        </Link>
        <Link to="/kontakt">
          <Text
            type="large"
            css={{ color: '$secondary', marginLeft: '2rem' }}
            as="a"
          >
            Kontakt
          </Text>
        </Link>
      </div>
    </HeaderElement>
  </Container>
)