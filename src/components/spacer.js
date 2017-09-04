import * as React from 'react'
import { PropTypes } from 'react'
import { Div } from 'glamorous'

const Spacer = ({ height, width }) => {
	return (
		<Div
			flex="0 0 auto"
			style={{
				height,
				width,
				flex: '0 0 auto',
			}}
		/>
	)
}

export default Spacer
