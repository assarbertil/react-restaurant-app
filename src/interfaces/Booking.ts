import { ICustomer } from './Customer'

export interface IBooking {
  _id?: string
  date: string
  time: string
  numberOfGuests: number
  customer: ICustomer
}
