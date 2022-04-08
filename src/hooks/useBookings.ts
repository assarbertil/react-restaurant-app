import useSWR from 'swr'
import { fetcher } from '../utils/fetcher'

export function useBookings() {
  const { data, error, mutate } = useSWR(
    `https://school-restaurant-api.azurewebsites.net/booking/restaurant/${process.env.REACT_APP_RESTAURANT_ID}`,
    fetcher
  )

  return {
    data,
    isLoading: !data && !error,
    error,
    mutate
  }
}
