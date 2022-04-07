import { ChangeEventHandler, FC } from 'react'
import { styled } from 'stitches.config'

interface RadioButtonProps {
  label: string
  value?: string
  name: string
  defaultChecked?: boolean
  id?: string
  onChange?: ChangeEventHandler<HTMLInputElement> | undefined
}

export const RadioButton: FC<RadioButtonProps> = ({
  label,
  value,
  name,
  defaultChecked = false,
  id,
  onChange
}) => {
  return (
    <RadioContainer>
      <Input
        type="radio"
        id={id}
        name={name}
        value={value}
        defaultChecked={defaultChecked}
        className="radio-button"
      />
      <Label htmlFor={id}>{label}</Label>
    </RadioContainer>
  )
}

const Input = styled('input', {
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

  '&:hover': {
    opacity: 0.9
  }
})

const RadioContainer = styled('div', {
  display: 'flex'
})
