import { useTranslation } from 'react-i18next'
import { Link } from 'react-router-dom'

import { styled } from '../stitches.config'
import { Container } from './Container'
import Svflag from './icons/Svflag'
import Ukflag from './icons/Ukflag'
import { Button } from './primitives/Button'
import { Text } from './primitives/Text'

const HeaderElement = styled('header', {
  display: 'flex',
  flexDirection: 'row',
  alignItems: 'center',
  justifyContent: 'space-between',
  padding: '1rem'
})

export const Header = () => {
  const { t, i18n } = useTranslation()

  return (
    <Container>
      <HeaderElement>
        <Link to="/">
          <img src="img/logo.png" alt={t('logo')} height={96} width={96} />
        </Link>

        <Group>
          <Link to="/boka">
            <Button as="span" variant="tertiary" size="large">
              {t('book')}
            </Button>
          </Link>
          <Button
            onClick={() =>
              i18n.changeLanguage(i18n.language !== 'sv' ? 'sv' : 'en')
            }
            variant="ghost"
          >
            {i18n.language === 'sv' ? (
              <Ukflag height={20} width={40} />
            ) : (
              <Svflag height={20} width={40} />
            )}
          </Button>
        </Group>
      </HeaderElement>
    </Container>
  )
}

const Group = styled('div', {
  display: 'flex',
  alignItems: 'center'
})
