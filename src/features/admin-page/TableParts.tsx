import { Field, Form } from 'formik'
import { styled } from 'stitches.config'

export const TableHeader = styled('div', {
  margin: '8rem auto 0 auto',
  display: 'grid',
  gridTemplateColumns: '15rem 15rem 10rem 5rem 7rem max-content',
  maxWidth: '60rem'
})

export const TableRow = styled(Form, {
  margin: '0 auto 0 auto',
  display: 'grid',
  gridTemplateColumns: '15rem 15rem 10rem 5rem 7rem max-content',
  maxWidth: '60rem'
})

export const TableInput = styled(Field, {
  width: '100%'
})
