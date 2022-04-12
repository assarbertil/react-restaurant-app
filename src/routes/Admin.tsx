import { styled } from 'stitches.config'
import { useBookings } from '../hooks/useBookings'
import { BookingRow } from 'features/admin-page/BookingRow'
import { TableHeader } from 'features/admin-page/TableParts'

export const Admin = () => {
  const { data, error, isLoading, mutate } = useBookings()

  data && console.log(data)

  return (
    <>
      <TableHeader>
        <Column>Boknings-ID</Column>
        <Column>Kund-ID</Column>
        <Column>Datum &amp; Tid</Column>
        <Column>Personer</Column>
        <Column></Column>
        <Column></Column>
      </TableHeader>

      {data &&
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
