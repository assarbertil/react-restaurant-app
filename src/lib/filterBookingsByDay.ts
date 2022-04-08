import { IBooking } from '@/interfaces/Booking'

export const filterBookingsByDay = (bookings: IBooking[], date: string) => {
  return bookings.filter(booking => booking.date === date)
}
