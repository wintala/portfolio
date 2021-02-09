import skills from "../data/skills";
import Editor from "./code-editor";
import Banner from "./banner";


const Programming = () => {
	return(
		<>
		<Banner secondaryTitle={"Ohjelmointi"} />
		<Editor 
			lines={skills.commentedSkills}
			timePerChar={30}
		/>
		</>
	)
}

export default Programming