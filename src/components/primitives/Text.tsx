import { styled } from '../../stitches.config'

export const Text = styled('p', {
  lineHeight: '$base',
  color: '$foreground',
  fontWeight: 400,

  variants: {
    type: {
      title1: { fontSize: '$title1', fontFamily: '$titles' },
      title2: { fontSize: '$title2', fontFamily: '$titles' },
      title3: { fontSize: '$title3', fontFamily: '$titles' },
      title4: { fontSize: '$title4', fontFamily: '$titles' },

      large: { fontSize: '$large' },
      regular: { fontSize: '$regular' },
      small: { fontSize: '$small' }
    }
  }
})
