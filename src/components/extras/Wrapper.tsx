const Wrapper = ({ children, className = '' }: Wrapper) => {
	return <div className={`${className} tablet:container mx-auto md:px-4`}>{children}</div>
}

export default Wrapper
