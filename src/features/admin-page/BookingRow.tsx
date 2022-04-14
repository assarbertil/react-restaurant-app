import { IBooking } from 'interfaces/Booking'
import { FC, useState } from 'react'
import Trashcan from 'components/icons/Trashcan'
import Tool from 'components/icons/Tool'
import { deleteBooking, putBooking } from 'lib'
import { useBookings } from 'hooks/useBookings'
import CustomDatePicker from 'features/booking-form/DatePicker'
import { Formik } from 'formik'
import { Column, TableInput, TableRow } from './TableElements'
import { Button } from 'components/primitives'
import { motion } from 'framer-motion'

interface BookingRowProps {
  booking: IBooking
}

export const BookingRow: FC<BookingRowProps> = ({ booking }) => {
  const [editing, setEditing] = useState(false)
  const { data, mutate } = useBookings()

  // If booking hasnt arrived yet, dont render
  if (!data) return <div>Loading...</div>

  // Every row in admin table is a formik form
  // This makes it easy to post new bookings using values from the form
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

        await putBooking(updatedBooking)

        setEditing(false)
        mutate()
      }}
    >
      {({ values }) => (
        // Fading animation when a row renders
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
                  marginRight: '1rem',
                  '&:hover': { color: '$foreground' }
                }}
              />
              <Trashcan
                css={{
                  cursor: 'pointer',
                  color: '$secondary',
                  '&:hover': { color: '$primary' }
                }}
                onClick={() => {
                  deleteBooking(booking._id)

                  // Basically asks for a refetch of the data
                  // Also updates the UI immediately
                  const newData = data.filter(b => b._id !== booking._id) // Filter out the deleted booking
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
