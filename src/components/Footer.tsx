import { styled } from '../stitches.config'
import { Link } from 'react-router-dom'
import { Text } from './primitives/Text'
import { useTranslation } from 'react-i18next'

const FooterElement = styled('header', {
  display: 'flex',
  alignItems: 'center',
  justifyContent: 'center',
  flexDirection: 'column',
  rowGap: '2rem',
  width: '100%',
  padding: '2rem'
})

const Links = styled('div', {
  display: 'flex',
  columnGap: '2rem'
})

const OpeningHours = styled('div', {
  display: 'flex',
  flexDirection: 'column',
  alignItems: 'center',
  rowGap: '0.5rem'
})

const Between = styled('div', {
  display: 'flex',
  justifyContent: 'space-between',
  width: '16rem'
})

export const Footer = () => {
  const { t } = useTranslation()
  return (
    <FooterElement>
      <Links>
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
      </Links>

      <OpeningHours>
        <Text type="large" css={{ color: '$light' }}>
          {t('opening')}
        </Text>
        <Between>
          <Text type="large" css={{ color: '$light' }}>
            {t('opening1')}
          </Text>
          <Text type="large" css={{ color: '$light' }}>
            11-22
          </Text>
        </Between>
        <Between>
          <Text type="large" css={{ color: '$light' }}>
            {t('opening2')}
          </Text>
          <Text type="large" css={{ color: '$light' }}>
            11-23
          </Text>
        </Between>
        <Between>
          <Text type="large" css={{ color: '$light' }}>
            {t('opening3')}
          </Text>
          <Text type="large" css={{ color: '$light' }}>
            12-21
          </Text>
        </Between>
      </OpeningHours>
    </FooterElement>
  )
}
