import Banner from "./banner"
import projects from "../data/projects"
import "./portfolio.css"

const Portfolio = () => {

	const processLink = (text) => {
		if (text.includes("github")) {
			return text.replace("github", "GitHub ")
		}
		else {
			return text.charAt(0).toUpperCase() + text.slice(1)
		}
	}


	return(
		<>
		<Banner mainTitle={"Portfolio"} secondaryTitle={"Omia projektejani"}
			leftArrow={{text: "TAIDOT", path: "./taidot"}} rightArrow={{text: "YHTEYSTIEDOT", path:"./yhteystiedot"}}
		/>
		<div className="portfolio-info">
			Huom. etenkin backendit ovat enimmäkseen hostattu Herokussa tai App Enginessä ja
 			free-tierillä palvelin nukkuu, kun siihen ei kohdistu liikennettä, 
			joten ensimmäisen pyynnön käsittelemiseen voi mennä muutamia sekunteja
		</div>
		<table className="portfolio-list">
			<tbody>
				<tr>
					<th>
						Mitä
					</th>
					<th>
						Stack
					</th>
					<th>
						Linkit
					</th>
				</tr>
				{projects.map(p => 
				<tr key={p.description}>
					<td>{p.description}</td>
					<td>{p.stack}</td>
					<td>
						<ul>
							{p.links.map(l =>
								Object.keys(l).map(key =>
								<li key={key}><a href={`${l[key]}`}> {processLink(key)} </a></li>
								)
							)}
						</ul>
					</td>
				</tr>
				)}
			</tbody>
		</table>
		</>
	)
}

export default Portfolio