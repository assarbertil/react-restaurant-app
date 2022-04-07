// Potential fix
import { styled } from '../../stitches.config'

export const Button = styled('button', {
  border: 0,
  color: 'white',
  textDecoration: 'none',
  fontFamily: '$body',
  cursor: 'pointer',

  '&:hover': {
    opacity: 0.9
  },

  variants: {
    variant: {
      primary: { background: '$primary' },
      secondary: { background: '$secondary', color: '$background' },
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
    variant: 'primary',
    size: 'base'
  }
})
