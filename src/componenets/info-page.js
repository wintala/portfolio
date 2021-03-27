import Banner from "./banner"
import mina from "../images/mina.png"
import "./info-page.css"

import education from "../data/education"
import workExperience from "../data/work-experience"
import profileText from "../data/profile-text"

import {useContext} from "react"
import {LanguageContext} from "../App"

const Info = () => {
	const lan = useContext(LanguageContext)

	const langContent = {
		EN: {
			mainTitle: "Info",
			secondaryTitle: "Waltteri Rintala",
			arrowRight: "SKILLS",
			educationHeader: "Education",
			experienceHeader: "Experience"
		},
		FI: {
			mainTitle: "Info",
			secondaryTitle: "Waltteri Rintala",
			arrowRight: "TAIDOT",
			educationHeader: "Koulutus",
			experienceHeader: "Kokemus"
		}
	}

	return(
		<div className="page-wrap">
		<Banner mainTitle={langContent[lan].mainTitle} secondaryTitle={langContent[lan].secondaryTitle} rightArrow={{text: langContent[lan].arrowRight, path: "./taidot"}}/>
		<div className="info-wrap">
			<div>
				<img src={mina} alt="minä"></img>
				<p>{profileText[lan]}</p>
			</div>
			<div>
				<h3>{langContent[lan].educationHeader}</h3>
				<ul>
					{education[lan].map(e =>
					<li key={e.school}>
						<h4>{e.school}</h4>
						<h5>{e.degree}</h5>
						<ul>
						{e.bullets.map(b =>
							<li key={b}>{b}</li>
						)}
						</ul>
					</li>
					)}
				</ul>
			</div>
			<div>
				<h3>{langContent[lan].experienceHeader}</h3>
				<ul>
				{workExperience[lan].map(e =>
					<li key={e.company}>
						<h4>{e.company}</h4>
						<h5>{e.position}</h5>
						<ul>
						{e.bullets.map(b =>
							<li key={b}>{b}</li>
						)}
						</ul>
					</li>
				)}
				</ul>
			</div>
		</div>
		</div>
	)
}

export default Info