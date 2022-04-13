import { styled } from '../stitches.config'
import { Text, Button } from '../components/primitives'
import { Link } from 'react-router-dom'
import { useTranslation } from 'react-i18next'
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
  const { t } = useTranslation()
  return (
    <div>
      <BackgroundContainer>
        <Text
          type="title1"
          as="h1"
          css={{ textShadow: '0 4px 16px black', '@md': { fontSize: '4.5rem' } }}
        >
          {t('welcome')}
        </Text>
        <Text type="title2" as="h2" css={{ textShadow: '0 4px 16px black', '@md': { fontSize: '$title1' } }}>
          {t('open')}
        </Text>
        <Link to="/boka">
          <Button
            as="span"
            variant="primary"
            size="large"
            css={{
              textShadow: '0 4px 16px black',
              marginTop: '1.5rem',
              display: 'inline-block'
            }}
          >
            {t('book')}
          </Button>
        </Link>
      </BackgroundContainer>
    </div>
  )
}
