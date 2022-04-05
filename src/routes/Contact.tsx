import { styled } from "../stitches.config";
import { Text } from "components/primitives";

const BackgroundContainer = styled('section', {
    backgroundImage: 'url(img/steak-dark.jpg)',
    backgroundPosition: 'center',
    backgroundSize: 'cover',
    height: '70vh',
    display: 'flex',
    flexDirection: 'column',
    justifyContent: 'center',
    alignItems: 'center',
})

export const Contact = () => {
    return (
        <div>
            <BackgroundContainer>
                <Text type='title1'>Kontakt</Text>
                <Text type='title3'>Adress:</Text>
                <Text type='title3'>Drottninggatan 1</Text>
                <Text type='title3'>123 45</Text>
                <Text type='title3'>Stockholm</Text>

            </BackgroundContainer>
        </div>
    )
}