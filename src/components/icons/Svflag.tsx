import { styled } from 'stitches.config'

const Svg = styled('svg')

function Svflag(props: any) {
    return (
        <Svg
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 16 10"
            {...props}
        >
            <path fill="#006aa7" d="M0 0H16V10H0z" />
            <path fill="#fecc00" d="M5 0H7V10H5z" />
            <path fill="#fecc00" d="M0 4H16V6H0z" />
        </Svg>
    )
}

export default Svflag