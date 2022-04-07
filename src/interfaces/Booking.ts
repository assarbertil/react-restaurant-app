import { ICustomer } from './Customer'

export interface IBooking {
  date: string
  time: string
  numberOfGuests: number
  customer: ICustomer
}
