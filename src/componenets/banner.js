import "./banner.css"

const Banner = ({mainTitle, secondaryTitle}) => (
	<div className="banner">
		<h1>{mainTitle}</h1>
		<h2>{secondaryTitle}</h2>
	</div>
)

export default Banner