import { styled } from '../stitches.config'

// Component that limits the max width of the contents
export const Container = styled('div', {
  marginLeft: 'auto',
  marginRight: 'auto',
  width: '100%',

  '@sm': { maxWidth: 640 },
  '@md': { maxWidth: 768 },
  '@lg': { maxWidth: 1024 },
  '@xl': { maxWidth: 1280 }
})
