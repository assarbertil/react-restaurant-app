import { IBooking } from '@/interfaces/Booking'
import { FC, useState } from 'react'
import { styled } from 'stitches.config'
import Trashcan from '../../components/icons/Trashcan'
import Tool from '../../components/icons/Tool'
import { deleteBooking, putBooking } from 'lib'
import { useBookings } from 'hooks/useBookings'
import CustomDatePicker from 'features/booking-form/DatePicker'
import { Field, Formik } from 'formik'
import { TableInput, TableRow } from './TableParts'
import { Button } from 'components/primitives'
import { motion } from 'framer-motion'

const Column = styled('div', {
  padding: '1rem',
  textAlign: 'left'
})

interface BookingRowProps {
  booking: IBooking
}

export const BookingRow: FC<BookingRowProps> = ({ booking }) => {
  const [editing, setEditing] = useState(false)
  const { data, error, isLoading, mutate } = useBookings()

  if (!data) return <div>Loading...</div>

  return (
    <Formik
      initialValues={{
        numberOfGuests: booking.numberOfGuests,
        date: booking.date,
        time: booking.time
      }}
      onSubmit={async values => {
        const updatedBooking: IBooking = {
          _id: booking._id,
          restaurantId: process.env.REACT_APP_RESTAURANT_ID!,
          date: values.date,
          time: values.time,
          numberOfGuests: values.numberOfGuests,
          customerId: booking.customerId
        }

        const response = await putBooking(updatedBooking)
        console.log(response)
        setEditing(false)
        mutate()
      }}
    >
      {({ values }) => (
        <motion.div
          animate={{ opacity: 1, transition: { duration: 0.5 } }}
          initial={{ opacity: 0 }}
        >
          <TableRow>
            <Column>{booking._id}</Column>
            <Column>{booking.customerId}</Column>
            <Column>
              <CustomDatePicker
                disabled={!editing}
                inline={false}
                value={new Date(values.date + 'T' + values.time)}
              />
            </Column>
            <Column>
              <TableInput
                disabled={!editing}
                type="number"
                min={1}
                max={6}
                name="numberOfGuests"
              />
            </Column>
            <Column>
              <Tool
                onClick={() => setEditing(!editing)}
                css={{
                  cursor: 'pointer',
                  color: '$secondary',
                  marginRight: '1rem'
                }}
              />
              <Trashcan
                css={{
                  cursor: 'pointer',
                  color: '$secondary',
                  '&:hover': { color: '$primary' }
                }}
                onClick={() => {
                  const newData = data.filter(b => b._id !== booking._id)

                  deleteBooking(booking._id)

                  mutate(newData, {
                    optimisticData: newData,
                    rollbackOnError: true,
                    revalidate: false
                  })
                }}
              />
            </Column>
            <Column>
              {editing && (
                <Button variant="secondary" type="submit">
                  Skicka
                </Button>
              )}
            </Column>
          </TableRow>
        </motion.div>
      )}
    </Formik>
  )
}
