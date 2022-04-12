import { styled } from '../stitches.config'
import { Link } from 'react-router-dom'
import { Text } from './primitives/Text'
import { useTranslation } from 'react-i18next'

const FooterElement = styled('header', {
  display: 'flex',
  alignItems: 'center',
  justifyContent: 'center',
  width: '100%',
  padding: '1rem'
})

export const Footer = () => {
  const { t } = useTranslation()
  return (
    <FooterElement>
      <Link to="/kontakt">
        <Text type="large" css={{ color: '$secondary' }}>
          {t('contact')}
        </Text>
      </Link>
      <Link to="/boka">
        <Text type="large" css={{ color: '$secondary', marginLeft: '2rem' }}>
          {t('book')}
        </Text>
      </Link>
      <Link to="/admin">
        <Text type="large" css={{ color: '$secondary', marginLeft: '2rem' }}>
          Admin
        </Text>
      </Link>
    </FooterElement>
  )
}
