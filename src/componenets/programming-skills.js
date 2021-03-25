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

	return(
		<div className="page-wrap">
		<Banner secondaryTitle={langContent[lan].secondaryTitle} />
		<Editor 
			lines={skills.commentedSkills}
			timePerChar={25}
		/>
		</div>
	)
}

export default Programming