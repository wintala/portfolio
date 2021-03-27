import "./language-changer.css"
import {useHistory} from "react-router-dom"

const LanguageChanger = ({changeLang}) => {
	const history = useHistory()

	const handleChangeLang = (lang) => {
		changeLang(lang)
		history.push({pathname: window.location.pathname, search: '?lang=' + lang})
	}

	return(
		<div className="language-wrap">
			<div id="fi" onClick={() => handleChangeLang("FI")}>
			</div>
			<div id="en" onClick={() => handleChangeLang("EN")}>
			</div>
		</div>
	)
}

export default LanguageChanger