import styled from 'styled-components'

const StyledBackground = styled.div`
	width: 100%;
	height: ${({ height }) => (typeof height === 'number' ? `${height}px` : typeof height === 'string' ? height : '')};
	background-color: var(--cor1);
	background-image: url('/src/components/Background/fundo.png');
	background-blend-mode: hard-light;
	background-repeat: no-repeat;
	background-size: cover;

	position: absolute;
	top: 0;
	z-index: -1;
`

export default function Background({ height }) {
	return <StyledBackground height={height} />
}
