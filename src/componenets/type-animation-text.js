import { useEffect, useState } from "react"
import "./type.css"


const TypeText = ({words, cursorColor, delay, time}) => {
const [length, setLength] = useState(0)
const [cursor, setCursor] = useState(false)

useEffect(() => {
	const lengthOfString = words.map(w => w.word).join("").length
	const timePerChar = time / lengthOfString
	for (let i = 0; i <= lengthOfString; i++) {
		setTimeout(() => setLength(i + 1), i * timePerChar + delay)
		if (i % 8 === 0) {
			setTimeout(() => setCursor(false), i * timePerChar + delay)
		} else if (i % 4 === 0) {
			setTimeout(() => setCursor(true), i * timePerChar + delay)
		}
	}
	setTimeout(() => setCursor(false), time + delay)
}, [])

	return(
		<>
		<div className="type-text"
		 style={{width: length + "ch", borderRight: cursor ? `2px solid ${cursorColor}` : "none"}}>
			{words.map((w, i) =>
			<span key={i} style={{color: w.color, whiteSpace:"pre"}}>{`${w.word}`}</span>)}
		</div>
		</>
	)
}

export default TypeText