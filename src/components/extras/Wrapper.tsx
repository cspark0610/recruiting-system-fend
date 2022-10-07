import React from 'react'

const Wrapper = ({ children }: Wrapper) => {
	return (
		<div className="tablet:container mx-auto md:px-4">
			{children}
		</div>
	)
}

export default Wrapper
