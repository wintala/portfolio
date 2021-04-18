import {useContext} from "react"
import {LanguageContext} from "../App"
import "./footer.css"
import linkedin from "../images/linkedin.png"


const Footer = () => {
	const lan = useContext(LanguageContext)

	const langContent = {
		EN: {
			text: "CV page Waltteri Rintala",
			text2: "Updated: 04/18/2021"
		},
		FI: {
			text: "CV-sivut Waltteri Rintala",
			text2: "Päivitetty: 18.4.2021"
		}
	}

	const content = langContent[lan]

	return(
		<div id="footer">
			<div>
				{content.text}
			</div>
			<div>
				{content.text2}
			</div>
			<img alt="linkedin" src={linkedin} onClick={() => window.location='http://linkedin.com/in/waltteri-rintala-111277195'}></img>
		</div>

	)
}

export default Footer