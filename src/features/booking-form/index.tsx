import { Text, Input, RadioButton, Button } from '../../components/primitives'
import { useBookings } from '../../hooks/useBookings'
import { FieldGroup } from './FieldGroup'
import { styled } from 'stitches.config'
import DateForm from './DateForm'

const handleRadio = (e: any) => {
  console.log(e.target.value)
}

export const BookingForm = () => {
  const { data, error, isLoading } = useBookings()

  data && console.log(data)

  return (
    <>
      <FieldGroup name="Hur många gäster">
        <RadioButtonContainer>
          <RadioButton
            label="1"
            name="numberOfGuests"
            id="1"
            onChange={handleRadio}
          />
          <RadioButton
            label="2"
            name="numberOfGuests"
            id="2"
            onChange={handleRadio}
          />
          <RadioButton
            label="3"
            name="numberOfGuests"
            id="3"
            onChange={handleRadio}
          />
          <RadioButton
            label="4"
            name="numberOfGuests"
            id="4"
            onChange={handleRadio}
          />
          <RadioButton
            label="5"
            name="numberOfGuests"
            id="5"
            onChange={handleRadio}
          />
          <RadioButton
            label="6"
            name="numberOfGuests"
            id="6"
            onChange={handleRadio}
          />
        </RadioButtonContainer>
      </FieldGroup>

      <FieldGroup name="Datum">
        <Text>Datum snart</Text>
      </FieldGroup>

      <FieldGroup name="Kontaktuppgifter">
        <InputContainer>
          <Input placeholder="Namn" />
          <Input placeholder="Email" />
          <Input placeholder="Telefon" />
        </InputContainer>
      </FieldGroup>

      <Button size="large" type="secondary" css={{ marginTop: '2rem' }}>
        Boka
      </Button>
      <DateForm />
    </>
  )
}

const RadioButtonContainer = styled('div', {
  display: 'flex',
  columnGap: '1rem'
})

const InputContainer = styled('div', {
  display: 'flex',
  flexDirection: 'column',
  rowGap: '1rem'
})
