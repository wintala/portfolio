import Banner from "./banner"
import projects from "../data/projects"
import "./portfolio.css"
import githubImage from "../images/github.png"

import {useContext} from "react"
import {LanguageContext} from "../App"

const Portfolio = () => {
	const lan = useContext(LanguageContext)

	const langContent = {
		EN: {
			mainTitle: "Porfolio",
			secondaryTitle: "My projects",
			arrowLeft: "SKILLS",
			arrowRight: "CONTACT INFO",
			note: "Note: especially the backends are hosted on free tier on Heroku or App Engine and the server sleeps when there's no traffic so the first request may take couple of seconds",
			tableWhat: "What",
			tableLinks: "Links",
			tableStack: "Stack"
		},
		FI: {
			mainTitle: "Porfolio",
			secondaryTitle: "Omia projektejani",
			arrowLeft: "TAIDOT",
			arrowRight: "YHTEYSTIEDOT",
			note: "Huom: etenkin backendit ovat enimmäkseen hostattu Herokussa tai App Enginessä ja free-tierillä palvelin nukkuu, kun siihen ei kohdistu liikennettä, joten ensimmäisen pyynnön käsittelemiseen voi mennä muutamia sekunteja",
			tableWhat: "Mitä",
			tableLinks: "Linkit",
			tableStack: "Stack"
		}
	}

	const processLink = (text) => {
		if (text.includes("github")) {
			return <><img src={githubImage} alt={"GitHub"}></img><p>{text.replace("github", "")}</p></>
		}
		else {
			return <p>{text.charAt(0).toUpperCase() + text.slice(1)}</p>
		}
	}


	return(
		<div className="page-wrap">
		<Banner mainTitle={langContent[lan].mainTitle} secondaryTitle={langContent[lan].secondaryTitle}
			leftArrow={{text: langContent[lan].arrowLeft, path: "./taidot"}} rightArrow={{text: langContent[lan].arrowRight, path:"./yhteystiedot"}}
		/>
		<div className="portfolio-info">{langContent[lan].note}</div>
		<table className="portfolio-list">
			<tbody>
				<tr>
					<th>
						{langContent[lan].tableWhat}
					</th>
					<th>
					{langContent[lan].tableStack}
					</th>
					<th>
					{langContent[lan].tableLinks}
					</th>
				</tr>
				{projects[lan].map(p => 
				<tr key={p.description + lan}>
					<td><p>{p.description}</p></td>
					<td><p>{p.stack}</p></td>
					<td>
						<ul>
							{p.links.map(l =>
								Object.keys(l).map(key =>
								<li key={key}><a href={`${l[key]}`}>{processLink(key)}</a></li>
								)
							)}
						</ul>
					</td>
				</tr>
				)}
			</tbody>
		</table>
		</div>
	)
}

export default Portfolio