import { IBooking } from '@/interfaces/Booking'

export const checkBookingTime = (date: IBooking) => {
  if (date.time === '18:00' || date.time === '21:00') {
    return new Date(date.date)
  }
}
