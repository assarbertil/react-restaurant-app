import { styled } from '../stitches.config'
import { Text } from 'components/primitives'
import { useTranslation } from 'react-i18next'

export const Contact = () => {
  const { t } = useTranslation()

  return (
    <BackgroundContainer>
      <Text type="title1">{t('contact')}:</Text>
      <Text type="title3" css={{ marginTop: '1rem' }}>
        {t('address')}:
      </Text>
      <Text>Drottninggatan 1</Text>
      <Text>123 45 Stockholm</Text>
      <Text type="title3" css={{ marginTop: '1rem' }}>
        {t('phoneNumber')}:
      </Text>
      <Text>08 - 333 333 33</Text>
      <Text type="title3" css={{ marginTop: '1rem' }}>
        {t('opening')}:
      </Text>

      <Text>{t('opening1')} 11-22</Text>
      <Text>{t('opening2')} 11-23</Text>
      <Text>{t('opening3')} 12-21</Text>
    </BackgroundContainer>
  )
}

const BackgroundContainer = styled('section', {
  backgroundImage: 'url(img/steak-dark.jpg)',
  backgroundPosition: 'center',
  backgroundSize: 'cover',
  height: '70vh',
  display: 'flex',
  flexDirection: 'column',
  justifyContent: 'center',
  alignItems: 'center'
})
