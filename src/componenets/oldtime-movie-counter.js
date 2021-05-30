import { useEffect, useState } from "react"
import "./oldtime-movie-counter.css"

const OldTimeMovieCounter = ({duration}) => {
	const [activeSquares, setActiveSquares] = useState(0)
	const [deg, setDeg] = useState(-90)
	const [count, setCount] = useState(3)

	useEffect(() => {
		const squaresInterval = setInterval(() => setActiveSquares(s => s < 3 ? s + 1 : 0), duration / 12)
		const gradientInterval = setInterval(() => setDeg(d => d + 360/80), duration / 240)
		const countInterval = setInterval(() => setCount(c => c -1), duration / 3)
		setTimeout(() => {
			clearInterval(squaresInterval)
			clearInterval(gradientInterval)
			clearInterval(countInterval)
		}, duration + 10)
	}, [])

	const gradient = `linear-gradient(${deg}deg, rgb(194, 194, 194) 50%, rgb(150, 150, 150) 50%)`

	const getStyle = (num, target) => {
		return (
			{
				visibility: num === target - 1 ? "hidden" : "visible",
				backgroundColor: num >= target ? "rgb(150, 150, 150)" : "rgb(194, 194, 194)"
			}
		)
	}

	return(
		<div className="oldtime-countdown-wrap" style={{background: gradient}}>
			<div style={getStyle(activeSquares, 4)}></div>
			<div style={getStyle(activeSquares, 1)}></div>
			<div style={getStyle(activeSquares, 3)}></div>
			<div style={getStyle(activeSquares, 2)}></div>
			<div className="oldtime-counter-wrap">
				<div className="oldtime-counter">{count}</div>
			</div>
			<div className="vertical-bar"></div>
			<div className="horizontal-bar"></div>
		</div>
	)
}

export default OldTimeMovieCounter
