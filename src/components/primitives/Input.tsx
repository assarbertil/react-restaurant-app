import { Field } from 'formik'
import { FC } from 'react'
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

interface InputProps {
  label?: string
  placeholder?: string
  type?: string
  name: string
  id: string
  isError: boolean
  errorMsg: string | undefined
}

export const Input: FC<InputProps> = ({
  id,
  label,
  name,
  isError,
  errorMsg,
  placeholder = '',
  type = 'text'
}) => {
  return (
    <InputContainer>
      <label htmlFor={id}>
        <Text type="title4" css={{ marginTop: '1rem' }}>
          {label}
        </Text>
      </label>
      <InputElement type={type} placeholder={placeholder} id={id} name={name} />
      {isError && (
        <Text
          type="small"
          css={{
            color: 'red',
            position: 'absolute',
            bottom: '-1.25rem'
          }}
        >
          {errorMsg}
        </Text>
      )}
    </InputContainer>
  )
}
