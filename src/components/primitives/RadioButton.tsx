import { Field } from 'formik'
import { ChangeEventHandler, FC, FocusEvent, FocusEventHandler } from 'react'
import { styled } from 'stitches.config'

interface RadioButtonProps {
  label: string
  value?: string | number
  name: string
  id?: string
  checked?: boolean
  onChange?: ChangeEventHandler<HTMLInputElement> | undefined
  onBlur?: FocusEventHandler<HTMLInputElement> | undefined
}

export const RadioButton: FC<RadioButtonProps> = ({
  label,
  value,
  name,
  id,
  checked,
  onChange
}) => {
  return (
    <RadioContainer>
      <Input type="radio" id={id} name={name} value={value} checked={checked} />
      <Label htmlFor={id}>{label}</Label>
    </RadioContainer>
  )
}

const Input = styled(Field, {
  display: 'none',

  '&:checked + label': {
    background: '$secondary'
  }
})

const Label = styled('label', {
  color: '$background',
  background: '$foreground',
  padding: '0.5rem 1.5rem',
  borderRadius: 4,
  cursor: 'pointer',
  fontFamily: '$body',
  transition: 'all 0.1s ease-in-out',

  '&:hover': {
    opacity: 0.9
  }
})

const RadioContainer = styled('div', {
  display: 'flex'
})
