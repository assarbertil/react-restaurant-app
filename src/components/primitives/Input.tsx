import { Field } from 'formik'
import { styled } from 'stitches.config'

const InputElement = styled(Field, {
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

export const Input = (props: any) => {
  return <InputElement {...props} type="text" />
}
