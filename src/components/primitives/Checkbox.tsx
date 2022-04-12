import { CSS, styled } from '@stitches/react'
import { Field } from 'formik'
import { FC, ReactNode } from 'react'
import Check from '../icons/Check'
import { Text } from './Text'

interface CheckboxProps {
  checked?: boolean
  id: string
  label: ReactNode
  name: string
  value: string | number | boolean
  css?: CSS
  isError: boolean
  errorMsg?: string
}

export const Checkbox: FC<CheckboxProps> = ({
  checked,
  id,
  label,
  name,
  value,
  css,
  isError,
  errorMsg
}) => (
  <Container>
    <CheckboxContainer>
      <Input
        type="checkbox"
        id={id}
        name={name}
        value={value}
        checked={checked}
      />
      <Label css={css} htmlFor={id}>
        <Check />
      </Label>
    </CheckboxContainer>

    <Text>{label}</Text>

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
  </Container>
)

const Input = styled(Field, {
  display: 'none',

  '&:checked + label': {
    background: '$secondary'
  }
})

const Label = styled('label', {
  color: '$background',
  background: '$foreground',
  height: '2rem',
  width: '2rem',
  borderRadius: 4,
  cursor: 'pointer',
  fontFamily: '$body',
  display: 'grid',
  placeItems: 'center',

  '&:hover': {
    opacity: 0.9
  }
})

const CheckboxContainer = styled('div', {
  display: 'flex'
})

const Container = styled('div', {
  display: 'flex',
  alignItems: 'center',
  columnGap: '1rem',
  position: 'relative'
})
