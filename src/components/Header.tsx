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
        <img src="img/logo.png" alt="" height={96} width={96} />
      </Link>

      <Link to="/boka">
        <Button as="span" variant="tertiary" size="large">
          Boka bord
        </Button>
      </Link>
    </HeaderElement>
  </Container>
)
