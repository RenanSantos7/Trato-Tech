import { Link } from 'react-router-dom'
import { styled } from 'styled-components'

const StyledLogo = styled.h1`
	font-size: 28px;
	font-weight: 400;

	.destaque {
		font-weight: 600;
		font-style: italic;
	}
`

export default function Logo() {
	return (
		<StyledLogo>
			<Link to='/'>
				TRATO
				<span className='destaque'>TECH</span>
			</Link>
		</StyledLogo>
	)
}
