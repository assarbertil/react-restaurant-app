import { Form } from 'formik'
import { styled } from 'stitches.config'

export const TableHeader = styled('div', {
  margin: '8rem auto 0 auto',
  display: 'grid',
  gridTemplateColumns: '20% 20% 15% 15% 10% 20%',
  maxWidth: '70%'
})

export const TableRow = styled(Form, {
  margin: '0 auto 0 auto',
  display: 'grid',
  gridTemplateColumns: '20% 20% 15% 15% 10% 20%',
  maxWidth: '70%'
})
