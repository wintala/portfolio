import skills from "../data/skills";
import Editor from "./code-editor";
import Banner from "./banner";

import {useContext} from "react"
import {LanguageContext} from "../App"


const Programming = () => {
	const lan = useContext(LanguageContext)

	const langContent = {
		EN: {
			secondaryTitle: "Programming",
		},
		FI: {
			secondaryTitle: "Ohjelmointi",
		}
	}
	const empyLinesToKeepFooterInPlace = Math.ceil((window.innerHeight - 1045) / 19)

	const emptyLines = empyLinesToKeepFooterInPlace > 0 ? new Array(empyLinesToKeepFooterInPlace).fill(0).map(x => [{word: "", color: "white"}]) : []



	return(
		<div className="page-wrap">
		<Banner secondaryTitle={langContent[lan].secondaryTitle} />
		<Editor 
			lines={skills.commentedSkills.concat(emptyLines)}
			timePerChar={25}
		/>
		</div>
	)
}

export default Programming