import { styled } from '../../stitches.config'

export const Button = styled('button', {
  border: 0,
  color: 'white',
  textDecoration: 'none',

  variants: {
    type: {
      primary: { background: '$primary' },
      secondary: { background: '$secondary' },
      tertiary: { border: '1px solid $secondary', color: '$secondary' }
    },

    size: {
      large: {
        fontSize: '$large',
        padding: '0.5rem 2rem',
        borderRadius: '8px'
      },
      base: {
        fontSize: '$regular',
        padding: '0.25rem 1rem',
        borderRadius: '4px'
      }
    }
  },

  defaultVariants: {
    type: 'primary',
    size: 'base'
  }
})
