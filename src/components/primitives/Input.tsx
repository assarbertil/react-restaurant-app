import { Field } from 'formik'
import { styled } from 'stitches.config'
import { Text } from './Text'

const InputContainer = styled('div', {
  position: 'relative'
})

const InputElement = styled(Field, {
  color: '$background',
  background: '$foreground',
  padding: '0.5rem 1rem',
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
  return (
    <InputContainer>
      <label htmlFor={props.id}>
        <Text type="title4" css={{ marginTop: '1rem' }}>
          {props.label}
        </Text>
      </label>
      <InputElement {...props} />
      {props.isError && (
        <Text
          type="small"
          css={{
            color: 'red',
            position: 'absolute',
            bottom: '-1.25rem'
          }}
        >
          {props.errorMsg}
        </Text>
      )}
    </InputContainer>
  )
}
