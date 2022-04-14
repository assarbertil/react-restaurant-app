import { Text } from 'components/primitives'
import { useTranslation } from 'react-i18next'
import { Link } from 'react-router-dom'
import { styled } from 'stitches.config'

export const NotFound = () => {
  const { t } = useTranslation()

  return (
    <Container>
      <NotFoundContainer aria-label="404 Page not found">
        <Four aria-hidden>4</Four>
        <img aria-hidden src="img/logo.png" alt="" height={96} width={96} />
        <Four aria-hidden>4</Four>
      </NotFoundContainer>
      <Text type="large" css={{ color: '$secondary' }}>
        Sidan kan inte hittas
      </Text>
      <Link to="/">
        <Text
          css={{
            color: '$secondary',
            marginTop: '3rem',
            display: 'block'
          }}
          as="span"
        >
          ← {t('back')}
        </Text>
      </Link>
    </Container>
  )
}

const Four = styled('h1', {
  fontSize: '8rem',
  fontWeight: '$bold',
  color: '$secondary'
})

const Container = styled('div', {
  display: 'flex',
  flexDirection: 'column',
  alignItems: 'center',
  justifyContent: 'center',
  height: '80vh',
  width: '100%'
})

const NotFoundContainer = styled('div', {
  display: 'flex',
  alignItems: 'center',
  justifyContent: 'center'
})
