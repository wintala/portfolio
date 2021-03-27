import "./banner.css"
import { useHistory } from "react-router-dom"

const Banner = ({mainTitle, secondaryTitle, leftArrow, rightArrow}) => {
	const history = useHistory()

	const arrow = (arr, leftOrRight) => {
		if (!arr) {
			return null
		}
		return(
			<div onClick={() => history.push({pathname: arr.path, search: window.location.search})} className={`${leftOrRight}-arrow-wrap`}>
				<div>
					{arr.text}
				</div>
				<div></div>
			</div>
		)
	}


	return(
		<div className="banner">
			<h1>{mainTitle}</h1>
			<h2>{secondaryTitle}</h2>
			{arrow(leftArrow, "left")}
			{arrow(rightArrow, "right")}
		</div>
	)
}
export default Banner