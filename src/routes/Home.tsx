import { styled } from 'stitches.config'
import { Text, Button } from 'components/primitives'
import { Link } from 'react-router-dom'
import { useTranslation } from 'react-i18next'
import { motion } from 'framer-motion'

export const Home = () => {
  const { t } = useTranslation()

  return (
    <BackgroundContainer
      animate={{ opacity: 1, transition: { duration: 0.5 } }}
      initial={{ opacity: 0 }}
    >
      <Content
        animate={{
          scale: 1,
          opacity: 1,
          transition: { delay: 0.3 }
        }}
        initial={{ scale: 0.75, opacity: 0 }}
      >
        <Text
          type="title1"
          as="h1"
          css={{
            textShadow: '0 4px 16px black',
            '@md': { fontSize: '4.5rem' }
          }}
        >
          {t('welcome')}
        </Text>
        <Text
          type="title2"
          as="h2"
          css={{
            textShadow: '0 4px 16px black',
            '@md': { fontSize: '$title1' }
          }}
        >
          {t('open')}
        </Text>
        <Link to="/boka">
          <Button
            as="span"
            variant="secondary"
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
      </Content>
    </BackgroundContainer>
  )
}

const BackgroundContainer = styled(motion.section, {
  backgroundImage: 'url(img/steak.jpg)',
  backgroundPosition: 'center',
  backgroundSize: 'cover',
  height: '70vh',
  display: 'flex',
  flexDirection: 'column',
  justifyContent: 'center',
  alignItems: 'center'
})

const Content = styled(motion.div, {
  display: 'flex',
  flexDirection: 'column',
  justifyContent: 'center',
  alignItems: 'center'
})
