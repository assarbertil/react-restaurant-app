import { Text } from '../../components/primitives'
import { useBookings } from '../../hooks/useBookings'

export const BookingForm = () => {
  const { data, error, isLoading } = useBookings()

  data && console.log(data)

  return (
    <Text>
      <pre>{JSON.stringify(data, null, 2)}</pre>
    </Text>
  )
}
