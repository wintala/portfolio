import { useEffect, useState } from "react"
import { useHistory } from "react-router-dom"
import "./skill-menu.css"
import Graph from "./graph"
import Editor from "./code-editor";
import skills from "../data/skills";
import pala from "../images/palat.png"
import paino from "../images/paino.png"
import puhe from "../images/puhe.png"
import Banner from "./banner";

import {useContext} from "react"
import {LanguageContext} from "../App"

const Skillmenu = () => {
	const [data, setData] = useState(null)
	const history = useHistory()
	const lan = useContext(LanguageContext)

  useEffect(() => {
		let isMounted = true;
    const createRandomArray = (len, slope, constant, randomness) => (
      new Array(len).fill(0).map((n, i)=> Math.floor(Math.random() * randomness) + constant + slope * i)
		)
		const randomSeries = () => ({random7: createRandomArray(7, 10, 0, 20), anotherRandom7: createRandomArray(7, -10, 60, 20)})
    setData(randomSeries())
    setInterval(() => isMounted ? setData(randomSeries()) : null, 1000)
		return () => { isMounted = false }
  }, [])

  if (!data) {
    return null
	}

	
	const langContent = {
		EN: {
			mainTitle: "Skills",
			secondaryTitle: "Chooce a category",
			arrowRight: "PORTFOLIO",
			arrowLeft: "PROFILE",
			menuDataAnalysis: "Data science",
			menuProgramming: "Programming",
			menuOther: "Other skills"
		},
		FI: {
			mainTitle: "Taidot",
			secondaryTitle: "Valitse kategoria",
			arrowRight: "PORTFOLIO",
			arrowLeft: "PROFIILI",
			menuDataAnalysis: "Data-analytiikka",
			menuProgramming: "Ohjelmointi",
			menuOther: "Muut taidot"
		}
	}

	return(
		<div className="page-wrap">
		<Banner 
			mainTitle={langContent[lan].mainTitle} secondaryTitle={langContent[lan].secondaryTitle} 
			leftArrow={{text:langContent[lan].arrowLeft, path: "./"}} rightArrow={{text:langContent[lan].arrowRight, path: "./portfolio"}}
		/>
		<div className="skill-menu-wrap">
			<div className="skill-menu-item" onClick={() => history.push("./taidot/dataanalytiikka")}>
				<h1>{langContent[lan].menuDataAnalysis}</h1>
				<Graph 
				labels={['January', 'February', 'March', 'April', 'May', 'June', 'July']}
				dataSets={[
					{title: "Set1", data: data.random7, color: "rgb(255, 102, 153)"},
					{title: "Set2", data: data.anotherRandom7, color: "rgb(102, 153, 255)"}
					]}/>
			</div>
			<div className="skill-menu-item" onClick={() => history.push("./taidot/ohjelmointi")}>
			<h1>{langContent[lan].menuProgramming}</h1>
				<Editor 
					lines={skills.skillsWithoutComments.slice(0, 9)}
					timePerChar={200}
				/>
			</div>
			<div className="skill-menu-item" onClick={() => history.push("./taidot/muut")}>
				<h1>{langContent[lan].menuOther}</h1>
				<div className="image-wrap">
					<img className="puzzle" src={pala} alt="paloja"></img>
					<img className="barbell" src={paino} alt="paino"></img>
					<img className="bubble" src={puhe} alt="puhekuplas"></img>
				</div>
			</div>
		</div>
		</div>
	)
}

export default Skillmenu