// Potential fix
import { styled } from '../../stitches.config'

export const Button = styled('button', {
  border: 0,
  color: 'white',
  textDecoration: 'none',
  fontFamily: '$body',
  cursor: 'pointer',
  transition: 'all 0.2s ease-in-out',

  '&:hover': {
    filter: 'brightness(1.1)',
    transform: 'scale(1.05)'
  },

  variants: {
    variant: {
      primary: { background: '$primary' },
      secondary: { background: '$secondary', color: '$background' },
      tertiary: {
        border: '1px solid $secondary',
        color: '$secondary',
        background: 'transparent'
      },
      ghost: { border: 0, background: 'transparent' }
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
