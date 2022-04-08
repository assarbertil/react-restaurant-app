import Tool from '../components/icons/Tool'
import { styled } from 'stitches.config'
import { useBookings } from '../hooks/useBookings'
import Trashcan from '../components/icons/Trashcan'

export const Admin = () => {
  const { data, error, isLoading } = useBookings()

  data && console.log(data)

  return (
    <Table>
      <thead>
        <tr>
          <Th>ID</Th>
          <Th>Datum</Th>
          <Th>Tid</Th>
          <Th>Kund ID</Th>
          <Th>Personer</Th>
          <Th></Th>
          <Th></Th>
        </tr>
      </thead>
      <tbody>
        {data &&
          data.map((booking: any) => (
            <tr key={booking._id}>
              <Td>{booking._id}</Td>
              <Td>{booking.date}</Td>
              <Td>{booking.time}</Td>
              <Td>{booking.customerId}</Td>
              <Td>{booking.numberOfGuests}</Td>
              <Td>
                <Tool
                  css={{
                    color: '$secondary'
                  }}
                />
              </Td>
              <Td>
                <Trashcan
                  css={{
                    color: '$secondary',
                    '&:hover': { color: '$primary' }
                  }}
                />
              </Td>
            </tr>
          ))}
      </tbody>
    </Table>
  )
}

const Table = styled('table', {
  margin: '8rem auto 0 auto'
})

const Th = styled('th', {
  fontWeight: 400,
  color: '$secondary',
  padding: '1rem',
  textAlign: 'left'
})

const Td = styled('td', {
  padding: '1rem',
  textAlign: 'left'
})
