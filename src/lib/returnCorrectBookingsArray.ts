import { IBooking } from '@/interfaces/Booking'

export const returnCorrectBookingsArray = (bookings: IBooking[]) => {
  let sixOClock: number = 0
  let nineOClock: number = 0
  let allArray: Date[] = []

  bookings.forEach((booking: IBooking) => {
    bookings.forEach((nestedLoopBooking: IBooking) => {
      if (booking.date === nestedLoopBooking.date)
        if (booking.time && nestedLoopBooking.time === '18:00') {
          sixOClock += 1
        } else if (booking.time && nestedLoopBooking.time === '21:00') {
          nineOClock += 1
        }
      if (sixOClock >= 15 && nineOClock >= 15) {
        allArray.push(new Date(booking.date))
      }
    })
  })
  console.log(allArray)
  return allArray
}
