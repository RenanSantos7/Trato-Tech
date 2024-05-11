import styled from 'styled-components'

const Container = styled.main`
    width: var(--page-width);
    margin-inline: auto;
`

export default function Main({children}) {
    return (
        <Container>
            {children}
        </Container>
    )
}