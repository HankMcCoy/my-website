import React from 'react'
import PropTypes from 'prop-types'
import Link from 'gatsby-link'
import Helmet from 'react-helmet'
import { Div, H2, Img, Ul, Li } from 'glamorous'

import Spacer from '../components/spacer'
import myFace from '../imgs/my-face.jpg'
import './index.css'

const SideBarLink = ({ children, to }) => {
	return (
		<Li>
			<Link
				to={to}
				style={{
					color: '#eee',
					fontSize: '24px',
					fontWeight: '300',
					textDecoration: 'none',
				}}
			>
				{children}
			</Link>
		</Li>
	)
}
const SideBar = () => (
	<Div
		color="#fff"
		backgroundColor="#484C4C"
		height="100%"
		display="flex"
		flexDirection="column"
		alignItems="center"
	>
		<Spacer height={40} />
		<Img
			src={myFace}
			borderRadius="50%"
			boxShadow="0 2px 2px rgba(0, 0, 0, 0.5)"
		/>
		<Spacer height={20} />
		<Div>
			<H2
				margin={0}
				fontFamily="Georgia, serif"
				fontWeight={400}
				fontSize="36px"
				fontStyle="italic"
			>
				<Link
					to="/"
					style={{
						color: '#fff',
						textDecoration: 'none',
					}}
				>
					Thomas Beirne
				</Link>
			</H2>
			<Spacer height={40} />
			<Ul listStyle="none" padding={0} margin={0}>
				<SideBarLink to="/about">About</SideBarLink>
				<Spacer height={20} />
				<SideBarLink to="/posts">Posts</SideBarLink>
				<Spacer height={20} />
				<SideBarLink to="/resume">Résumé</SideBarLink>
				<Spacer height={20} />
				<SideBarLink to="/training">Training</SideBarLink>
			</Ul>
		</Div>
	</Div>
)

const TemplateWrapper = ({ children }) => (
	<Div display="flex" minHeight="100%">
		<Helmet
			title="Thomas Beirne"
			meta={[
				{ name: 'description', content: 'Sample' },
				{ name: 'keywords', content: 'sample, something' },
			]}
		/>
		<Div marginRight="380px" padding="20px 60px">
			{children()}
		</Div>
		<Div position="fixed" top="0" right="0" bottom="0" width="380px">
			<SideBar />
		</Div>
	</Div>
)

TemplateWrapper.propTypes = {
	children: PropTypes.func,
}

export default TemplateWrapper
