import { styled } from 'stitches.config'

export const Input = styled('input', {
  color: '$background',
  background: '$foreground',
  padding: '0.5rem 1.5rem',
  borderRadius: 4,
  border: 0,
  fontSize: '$regular',
  fontWeight: 400,
  fontFamily: '$body',

  '&:hover': {
    opacity: 0.9
  }
})
