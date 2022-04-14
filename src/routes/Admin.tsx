import { styled } from 'stitches.config'
import { useBookings } from 'hooks/useBookings'
import { BookingRow } from 'features/admin-page/BookingRow'
import { TableHeader } from 'features/admin-page/TableElements'
import { Button } from 'components/primitives'
import { useState } from 'react'
import { BookingForm } from 'features/booking-form'

export const Admin = () => {
  const { data } = useBookings()
  const [adding, setAdding] = useState(false)

  data && console.log(data)

  return (
    <>
      <Center>
        <Button
          size="large"
          variant="tertiary"
          onClick={() => setAdding(!adding)}
        >
          Lägg till ny
        </Button>
      </Center>

      {adding && (
        <Center>
          <BookingForm />
        </Center>
      )}

      {!adding && (
        <TableHeader>
          <Column>Boknings-ID</Column>
          <Column>Kund-ID</Column>
          <Column>Datum &amp; Tid</Column>
          <Column>Personer</Column>
          <Column></Column>
          <Column></Column>
        </TableHeader>
      )}

      {!adding &&
        data &&
        data.map((booking: any) => (
          <BookingRow booking={booking} key={booking._id} />
        ))}
    </>
  )
}

const Column = styled('div', {
  fontWeight: 400,
  color: '$secondary',
  padding: '1rem',
  textAlign: 'left'
})

const Center = styled('div', {
  marginLeft: 'auto',
  marginRight: 'auto',
  width: '100%',
  padding: '1rem',
  '@sm': { maxWidth: 'max-content' }
})
