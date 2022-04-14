import useSWR from 'swr'
import axios from 'axios'
import { IBooking } from '@/interfaces/Booking'

// Function SWR uses to fetch data from the API
export const fetcher = (url: string) =>
  axios.get<IBooking[]>(url).then(res => res.data)

// React hook that manages our fetched data
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
