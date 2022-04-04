import { styled } from '../../stitches.config'

export const Text = styled('p', {
  lineHeight: '$base',

  variants: {
    type: {
      title1: { fontSize: '$title1' },
      title2: { fontSize: '$title2' },
      title3: { fontSize: '$title3' },
      title4: { fontSize: '$title4' },

      large: { fontSize: '$large' },
      regular: { fontSize: '$regular' },
      small: { fontSize: '$small' }
    }
  }
})
