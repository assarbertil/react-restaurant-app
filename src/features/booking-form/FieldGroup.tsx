import { FC, ReactNode } from 'react'
import { Text } from 'components/primitives'

interface FieldGroupProps {
  children: ReactNode
  name: string
}

// Used to group together parts of the booking form
export const FieldGroup: FC<FieldGroupProps> = ({ children, name }) => {
  return (
    <div>
      <Text
        type="title2"
        as="h2"
        css={{ marginBottom: '0.5rem', marginTop: '2rem' }}
      >
        {name}
      </Text>
      {children}
    </div>
  )
}
