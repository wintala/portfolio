import { useEffect, useState } from "react"
import Banner from "./banner"
import "./contact-info.css"

const Contact = () => {
	const [num, setNum] = useState("")
	const [press, setPress] = useState(true)

	useEffect(() => {
		let isMounted = true;

		const appendNum = (numb) => {
			const myNum = [0, 4, 4, 3, 0, 4, 8, 3, 3, 1, " ", " ", " "] // spacet hack jotta numero näkyy pidempään kokonaisena
			if (numb.length < myNum.length) {
				return numb + myNum[numb.length].toString()
			} else {
				return("")
			}
		}

		setInterval(() => isMounted ? setNum(n => appendNum(n)): null, 500)
		setInterval(() => isMounted ? setPress(p => !p): null, 250)
		return () => { isMounted = false }
	}, [])

	const addSpaces = (num) => {
		if (num[6]) {
			return num.slice(0, 3) + " " + num.slice(3, 6) + " " + num.slice(6, num.length)
		} else if (num[3]) {
			return num.slice(0, 3) + " " + num.slice(3, num.length)
		} else {
			return num
		}
	}

	return(
		<>
		<Banner mainTitle={"Yhteystiedot"} leftArrow={{text:"PORTFOLIO", path: "./portfolio"}}/>
		<div className="conatct-wrap">
			<div>
				<ul >
					<li>Sähköposti: rintala.waltteri@gmail.com</li>
					<li>Puhelin: +358 44 304 8331</li>
					<li>Osoite: Kristiinankatu 10B 39, Turku</li>
					<li>Postinumero: 20100</li>
				</ul>
			</div>
			<div>
				<div className="smartphone">
					<div className="content">
						<div className="number">
								{addSpaces(num)}
						</div>
						<div className="keyboard">
							{Array(10).fill(0).map((e, i) => 
							<div style={{backgroundColor: press && (num.slice(-1) === (i + 1).toString().slice(-1)) ? "var(--grey)": "white"}} 
								key={i}>
								{i === 9 ? 0 : i + 1}
								</div>
							)}
						</div>
					</div>
				</div>
			</div>
		</div>
		</>
	)
}

export default Contact