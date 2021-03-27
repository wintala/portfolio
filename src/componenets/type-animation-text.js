import { useEffect, useState } from "react"
import "./type.css"


const TypeText = ({words, cursorColor, delay, time}) => {
const [length, setLength] = useState(0)
const [cursor, setCursor] = useState(false)

useEffect(() => {
	let isMounted = true
	const getIsMounted = () => isMounted
	const lengthOfString = words.map(w => w.word).join("").length
	const timePerChar = time / lengthOfString
	for (let i = 0; i <= lengthOfString; i++) {
		setTimeout(() => getIsMounted() ? setLength(i + 1) : null, i * timePerChar + delay)
		if (i % 8 === 0) {
			setTimeout(() => getIsMounted() ? setCursor(false) : null, i * timePerChar + delay)
		} else if (i % 4 === 0) {
			setTimeout(() => getIsMounted() ? setCursor(true) : null, i * timePerChar + delay)
		}
	}
	setTimeout(() => isMounted ? setCursor(false) : null, time + delay)
	return () => {isMounted = false}
}, [delay, time, words])

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