import { styled } from 'stitches.config'

const Svg = styled('svg')

function Check(props: any) {
  return (
    <Svg
      xmlns="http://www.w3.org/2000/svg"
      width={16}
      height={16}
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth={2}
      strokeLinecap="round"
      strokeLinejoin="round"
      className="feather feather-check"
      {...props}
    >
      <path d="M20 6L9 17 4 12" />
    </Svg>
  )
}

export default Check
