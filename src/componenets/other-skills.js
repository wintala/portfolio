import Banner from "./banner"
import "./other-skills.css"
import pala from "../images/pala-vihreä.png";
import {useContext} from "react"
import {LanguageContext} from "../App"
import skills from "../data/other-skills";

const OtherSkills = () => {
	const lan = useContext(LanguageContext)

	const langContent = {
		EN: {
			secondaryTitle: "Other skills",
			endNote: "Note: You won't find skills directly related to my studies here. I assume that these come up more clearly in my transcript of records",
			contentHeader: "Skills"
		},
		FI: {
			secondaryTitle: "Muut taidot",
			endNote: "Huom: Et löydä suoraan opiskelemiini aineesin liittyviä taitoja täältä, vaan oletan näiden tulevan paremmin ilmi opintorekisteristäni",
			contentHeader: "Taidot"
		}
	}

	const puzzleWrap = () => {
		const r = () => Math.floor(Math.random() * 360)
		return(
			<div className="puzzle-wrap">
				<img style={{filter: `hue-rotate(${r()}deg)`}} src={pala} alt="pala"></img>
				<img style={{filter: `hue-rotate(${r()}deg)`}} src={pala} alt="pala"></img>
				<img style={{filter: `hue-rotate(${r()}deg)`}} src={pala} alt="pala"></img>
				<img style={{filter: `hue-rotate(${r()}deg)`}} src={pala} alt="pala"></img>
			</div>
		)
	}

	return(
		<div className="page-wrap">
		<Banner secondaryTitle={langContent[lan].secondaryTitle}/>
		<div className="other-skills-wrap">
		<div>
			{puzzleWrap()}
			{puzzleWrap()}
			{puzzleWrap()}
			{puzzleWrap()}
			{puzzleWrap()}
			{puzzleWrap()}
		</div>
			<div>
				<h3>{langContent[lan].contentHeader}</h3>
					<ul>
					{skills[lan].map(s =>
					<li>
						<h4>{s.category}</h4>
						<ul>
						{s.bullets.map(b =>
							<li>{b}</li>
						)}
						</ul>
					</li>
					)}
					</ul>
					<div>{langContent[lan].endNote}</div>
			</div>
			<div>
				{puzzleWrap()}
				{puzzleWrap()}
				{puzzleWrap()}
				{puzzleWrap()}
				{puzzleWrap()}
				{puzzleWrap()}
			</div>
		</div>
		</div>
	)

}

export default OtherSkills



