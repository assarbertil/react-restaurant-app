import useSWR from 'swr'
import axios from 'axios'
import { IBooking } from '@/interfaces/Booking'

export const fetcher = (url: string) =>
  axios.get<IBooking[]>(url).then(res => res.data)

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
