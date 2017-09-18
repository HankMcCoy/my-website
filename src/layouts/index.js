import React from 'react'
import PropTypes from 'prop-types'
import Link from 'gatsby-link'
import Helmet from 'react-helmet'
import glamorous, { Div, H2, Img, Ul, Li } from 'glamorous'

import Spacer from '../components/spacer'
import myFace from '../imgs/my-face.jpg'
import twitterImg from '../imgs/twitter.png'
import './index.css'

const MOBILE_WIDTH = 1000

const SideBarRoot = glamorous.div({
	color: '#fff',
	backgroundColor: '#484C4C',
	display: 'flex',
	borderStyle: 'solid',
	borderColor: '#333',
	[`@media(min-width: ${MOBILE_WIDTH}px)`]: {
		height: '100%',
		flexDirection: 'column',
		alignItems: 'center',
		paddingTop: '40px',
		borderWidth: '0 0 0 2px',
	},
	[`@media(max-width: ${MOBILE_WIDTH - 1}px)`]: {
		height: '50px',
		borderWidth: '0 0 2px 0',
		padding: '0 30px',
	},
	'@media(max-width: 625px)': {
		padding: '0 15px 0 15px',
	},
})

const AvatarImg = glamorous.img({
	borderRadius: '50%',
	boxShadow: '0 2px 2px rgba(0, 0, 0, 0.5)',
	[`@media(max-width: ${MOBILE_WIDTH - 1}px)`]: {
		display: 'none',
	},
})

const Heading = glamorous.h2({
	margin: 0,
	fontFamily: 'Georgia, serif',
	fontWeight: 400,
	fontSize: '36px',
	fontStyle: 'italic',
	position: 'relative',
	'& a': {
		color: '#fff',
		textDecoration: 'none',
	},
	[`@media(min-width: ${MOBILE_WIDTH}px)`]: {
		marginTop: '20px',
		marginBottom: '40px',
	},
	[`@media(max-width: ${MOBILE_WIDTH - 1}px)`]: {
		lineHeight: '50px',
	},
	'@media(max-width: 625px)': {
		'& a': {
			color: 'transparent',
		},
		'& a::after': {
			content: 'TB',
			color: '#fff',
			position: 'absolute',
			left: 0,
			top: 0,
		},
	},
})

const LinkList = glamorous.ul({
	listStyle: 'none',
	padding: 0,
	margin: 0,
	[`@media(max-width: ${MOBILE_WIDTH - 1}px)`]: {
		display: 'flex',
		flexDirection: 'row',
		alignItems: 'center',
	},
})

const SideBarListItem = glamorous.li({
	[`@media(min-width: ${MOBILE_WIDTH}px)`]: {
		fontSize: '24px',
		marginBottom: '20px',
	},
	[`@media(max-width: ${MOBILE_WIDTH - 1}px)`]: {
		fontSize: '18px',
		':not(:first-child)': {
			marginLeft: '20px',
		},
	},
})

const SideBarLink = ({ children, to }) => {
	return (
		<SideBarListItem>
			<Link
				to={to}
				style={{
					color: '#eee',
					fontWeight: '300',
					textDecoration: 'none',
				}}
			>
				{children}
			</Link>
		</SideBarListItem>
	)
}

const Aligner = glamorous.div({
	[`@media(max-width: ${MOBILE_WIDTH - 1}px)`]: {
		display: 'flex',
		justifyContent: 'space-between',
		width: '100%',
	},
})

const SideBar = () => (
	<SideBarRoot>
		<AvatarImg src={myFace} />
		<Aligner>
			<Heading>
				<Link to="/">Thomas Beirne</Link>
			</Heading>
			<LinkList>
				<SideBarLink to="/about">About</SideBarLink>
				<SideBarLink to="/">Posts</SideBarLink>
				<SideBarLink to="/resume">Résumé</SideBarLink>
				<SideBarLink to="/training">Training</SideBarLink>
			</LinkList>
		</Aligner>
	</SideBarRoot>
)

const ContentWrapper = glamorous.div({
	[`@media(min-width: ${MOBILE_WIDTH}px)`]: {
		padding: '40px 60px',
		marginRight: '380px',
	},
	[`@media(max-width: ${MOBILE_WIDTH - 1}px)`]: {
		padding: '40px 30px',
		marginTop: '50px',
	},
	'@media(max-width: 625px)': {
		padding: '40px 15px',
	},
})

const SideBarWrapper = glamorous.div({
	position: 'fixed',
	top: 0,
	right: 0,
	[`@media(min-width: ${MOBILE_WIDTH}px)`]: {
		bottom: 0,
		width: '380px',
	},
	[`@media(max-width: ${MOBILE_WIDTH - 1}px)`]: {
		left: 0,
		height: '50px',
	},
})

const Layout = ({ children }) => (
	<Div display="flex" minHeight="100%">
		<Helmet
			title="Thomas Beirne"
			meta={[
				{ name: 'description', content: 'Sample' },
				{ name: 'keywords', content: 'sample, something' },
			]}
		/>
		<ContentWrapper>{children()}</ContentWrapper>
		<SideBarWrapper>
			<SideBar />
		</SideBarWrapper>
	</Div>
)

export default Layout
