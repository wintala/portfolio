import "./code-editor.css"
import TypeText from "./type-animation-text";
const Editor = ({lines, timePerLine, timePerChar, fontSize}) => {

const durations = lines.map(line => line.map(w => w.word).join("").length * timePerChar)

const waitingTime = (i) => [0].concat(durations.slice(0, i)).reduce((a, b) => a + b, 0)


	return(
		<div className="editor-wrap">
			<div className="editor-toolbar">
				<div>skills.js {"         x"}</div>
			</div>
			<div className="editor-pathbar">
				{"src > cv_pages > data > skills"}
			</div>
			{lines.map((l, i) => 
			<div key={i} className="line" style={{fontSize: fontSize ? fontSize : "14px"}}>
				<div>{i + 1}</div>
				<TypeText 
					words={l} 
					cursorColor={"white"} 
					delay={timePerLine ? i * timePerLine : waitingTime(i)}
					time={timePerLine ? timePerLine : durations[i]}/>
			</div>
			)}
		</div>
	)
}

export default Editor