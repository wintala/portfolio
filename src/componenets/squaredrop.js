import { useEffect, useRef, useState } from "react"
import "./squaredrop.css"

const SquaresDrop = () => {
	const [current, setCurrent] = useState(0)
	const [nullDisplay, setNullDisplay] = useState(false)
	const direction = useRef(
		new Array(Math.ceil(window.innerHeight / window.innerWidth * 13) * 13)
				.fill("")
				.map(x => ["top", "bottom", "left", "right"][Math.floor(Math.random() * 4)])
		)
	useEffect(() => {
		setTimeout(() => {
			const inter = setInterval(() => {setCurrent(c => c + 1)}, 1000 / 60);
			setTimeout(() => clearInterval(inter), 5000)
		}, 5000)
		setTimeout(() => setNullDisplay(true), 10000)
	}, [])

	const currentTransition = Math.ceil(current**1.5 / 2)

	const dirToDiv = (dir, key) => {
		const greeting1 = "TERVETULOA!"
		const style = {height: window.innerWidth / 13}
		style[dir] = `${currentTransition}px`
		const content = greeting1[key - 27]
		return(
			<div style={style} key={key}>
				{content ? content : ""}
			</div>)
	}

	return(
		!nullDisplay ?
		<div className="square-wrap">
			{direction.current ? direction.current.map((d , i) => dirToDiv(d, i)) : null}
		</div> :
		null
	)
}

export default SquaresDrop