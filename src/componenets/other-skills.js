import Banner from "./banner"
import "./other-skills.css"
import pala from "../images/pala-vihreä.png";

const OtherSkills = () => {

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
		<>
		<Banner secondaryTitle={"muut taidot"}/>
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
				<h3>Taidot</h3>
					<ul>
						<li>
							<h4>
								Kielet
							</h4>
							<ul>
								<li>Suomi: Äidinkieli</li>
								<li>Englanti: Sujuva viestintä</li>
								<li>Ruotsi: Kohtalainen</li>
								<li>Espanja: Alkeet</li>
							</ul>
						</li>
						<li>
							<h4>
								IT
							</h4>
							<ul>
								<li>MS Office: Word, Power Point</li>
								<li>SAP</li>
							</ul>
						</li>
						<li>
							<h4>
								Kaupalliset
							</h4>
							<ul>
								<li>Kirjanpito ja tilinpäätös</li>
								<li>Digimarkkinointi</li>
							</ul>
						</li>
					</ul>
					<div>
						Huom: Et löydä suoraan opiskelemiini aineesin liittyviä taitoja täältä, vaan oletan näiden tulevan paremmin ilmi opintorekisteristäni
					</div>
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
		</>
	)

}

export default OtherSkills



