import { styled } from '../stitches.config'
import { Link } from 'react-router-dom'
import { Text } from './primitives/Text'

const FooterElement = styled('header', {
  display: 'flex',
  flexDirection: 'row',
  alignItems: 'center',
  justifyContent: 'center',
  width: '100%',
  padding: '1rem'
})

export const Footer = () => {
  return (
    <FooterElement>
      <Link to="/kontakt">
        <Text type="large" css={{ color: '$secondary' }}>
          Kontakt
        </Text>
      </Link>
      <Link to="/boka">
        <Text type="large" css={{ color: '$secondary', marginLeft: '2rem' }}>
          Boka bord
        </Text>
      </Link>
      <Link to="/admin">
        <Text type="large" css={{ color: '$secondary', marginLeft: '2rem' }}>
          Adminnnnn
        </Text>
      </Link>
    </FooterElement>
  )
}
