import "./language-changer.css"


const LanguageChanger = ({changeLang}) => {

	return(
		<div className="language-wrap">
			<div id="fi" onClick={() => changeLang("FI")}>
			</div>
			<div id="en" onClick={() => changeLang("EN")}>
			</div>
		</div>
	)
}

export default LanguageChanger