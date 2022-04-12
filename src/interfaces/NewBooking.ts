import { ICustomer } from './Customer'

export interface INewBooking {
  restaurantId: string
  date: string
  time: string
  numberOfGuests: number
  customer: ICustomer
}
