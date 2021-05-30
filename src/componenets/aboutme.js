import "./aboutme.css"
import { useEffect, useRef, useState } from "react"
import Banner from "./banner"
import {useContext} from "react"
import {LanguageContext} from "../App"
import meme2 from "../images/meme2.jpg"
import meme1 from "../images/meme1.png"
import OldTimeMovieCounter from "./oldtime-movie-counter"


const AboutMe = () => {
	const lan = useContext(LanguageContext)
	const slidesRef = useRef()
	const [counterVisible, setCounterVisible] = useState(true)
	const [slidePosition, setSlidePosition] = useState(0)
	const [pressed, setPressed] = useState(false)

	useEffect(() => {
		setTimeout(() => setCounterVisible(false), 8000)
	}, [])

	useEffect(() => {
		const handleSlide = (direction) => {
			const slideMoveInterval = setInterval(() => {
				setSlidePosition(p => direction === "next" ? - parseInt(slidesRef.current.style.top) >= slidesRef.current.offsetHeight - 500 ? p : p - 20: p >= 0 ? 0 : p + 20)
				setPressed(true)
			}, 20)
			setTimeout(() => {
				clearInterval(slideMoveInterval)
				setPressed(false)
			}, 510)
		}
		const handleKeyPress = (e) => {
			if (pressed) {
				return null
			}
			const code = e.keyCode
			if (code === 39 || code === 32) {	
				handleSlide("next")
			} 
			else if (code === 37) {
				handleSlide("previous")
			}
		}

		if (!counterVisible) {
			document.addEventListener('keydown', handleKeyPress);

			return function cleanup() {
				document.removeEventListener('keydown', handleKeyPress);
			}
		}
  }, [counterVisible, pressed]);


	const langContent = {
		EN: {
			mainTitle: "About me",
			arrowLeft: "SKILLS",
			arrowRight: "PORTFOLIO",
			instructions: "Instructions" ,
			nextSlide: "Next slide",
			previousSlide: "Previous slide",
			or: "or",
			thankyou: "Thank you for your time",
			slide2header: "My life shortly",
			slide2bullets: 
			[
				"I'm origilly from Raisio where I went comprehensive school", 
				"I went to a sports high school in Turku in order to keep swimming competitively", 
				"I did my military service straight after high school and went to the university right after that",
				"Now I'm studying my fourth year in University of Turku"
			],
			slide3header: "My hobbies and freetime",
			slide3bullets: 
			[
				"Gym and running", 
				"Programming and IT-stuff", 
				"Film watching",
				"Student events and partying",
				"Browsing mediocre memes"
			],
			slide4header: "Strengths as an employee",
			slide4bullets: 
			[
				"Diplomacy", 
				"Patience", 
				"Problem solving",
				"Calmness",
				"Systematic way of working"
			],
			slide5header: "Weaknesses as an employee",
			slide5bullets: 
			[
				"Pondering and wasting time with insignifigant details", 
				"Poor tolerance for monotonous and mindnumbing tasks", 
			],
			slide6header: "My personality",
			slide6bullets: 
			[
				"Carefree", 
				"Humorous",
				"Calm",
				"Adaptive" 
			],
		},
		FI: {
			mainTitle: "Minusta",
			arrowLeft: "TAIDOT",
			arrowRight: "PORTFOLIO",
			instructions: "Ohjeet",
			nextSlide: "Seuraava dia",
			previousSlide: "Edellinen dia",
			or: "tai",
			thankyou: "Kiitos ajastasi",
			slide2header: "Elämäni lyhyesti",
			slide2bullets: 
			[
				"Olen kotoisin Raisiosta, jossa kävin myös peruskouluni ", 
				"Kävin urheilulukion Turussa voidakseni harrastaa kilpauintia täysipainoisesti", 
				"Lukiosta menin suoraan armeijaan ja armeijasta suoraan yliopistoon",
				"Parhaillaan opiskelen neljättä vuotta Turun Yliopistossa"
			],
			slide3header: "Harrastukset ja vapaa-aika",
			slide3bullets: 
			[
				"Kuntosali ja lenkkeily", 
				"Ohjelmointi ja IT-näpertely", 
				"Elokuvat",
				"Aktiivinen opiskelijaelämä",
				"Keskinkertaisten meemien katselu"
			],
			slide4header: "Vahvuudet työntekijänä",
			slide4bullets: 
			[
				"Diplomaattisuus / sovinnaisuus", 
				"Kärsivällisyys", 
				"Ongelmanratkaisu",
				"Rauhallisuus",
				"Järjestelmällisyys"
			],
			slide5header: "Heikkoudet työntekijänä",
			slide5bullets: 
			[
				"Liiallinen pikkutarkkuus / vähämerkityksisten asioiden mietiskely", 
				"Huono toleranssi puuduttaville ja yksitoikkisoille tehtäville", 
			],
			slide6header: "Persoonani",
			slide6bullets: 
			[
				"Huoleton", 
				"Huumorintajuinen",
				"Rauhallinen",
				"Sopeutuva" 
			],
		}
	}


	const slides = () => (
		<div className="aboutme-slides" style={{top: slidePosition + "px"}} ref={slidesRef}>

			<div>
				<h1>
					{langContent[lan].instructions}
				</h1>
				<ul>
					<li>
						{langContent[lan].nextSlide}:
						<span className="keyboard-key">&rarr;</span>
						{langContent[lan].or} 
						<span className="space-key">Space</span>
					</li>
					<li>
						{langContent[lan].previousSlide}:
						<span className="keyboard-key">&larr;</span>
					</li>
				</ul>
			</div>

			<div>
				<h1>
					{langContent[lan].slide2header}
				</h1>
				<ul>
					{langContent[lan].slide2bullets.map(b => <li key={b}>{b}</li>)}
				</ul>
			</div>

			<div>
				<h1>
					{langContent[lan].slide3header}
				</h1>
				<ul>
					{langContent[lan].slide3bullets.map(b => <li key={b}>{b}</li>)}
				</ul>
			</div>

			<div>
				<img src={meme2} alt="meemi"></img>
			</div>

			<div>
				<h1>
					{langContent[lan].slide4header}
				</h1>
				<ul>
					{langContent[lan].slide4bullets.map(b => <li key={b}>{b}</li>)}
				</ul>
			</div>

			<div>
				<h1>
					{langContent[lan].slide5header}
				</h1>
				<ul>
					{langContent[lan].slide5bullets.map(b => <li key={b}>{b}</li>)}
				</ul>
			</div>

			<div>
				<img src={meme1} alt="meemi"></img>
			</div>

			<div>
				<h1>
					{langContent[lan].slide6header}
				</h1>
				<ul>
					{langContent[lan].slide6bullets.map(b => <li key={b}>{b}</li>)}
				</ul>
			</div>

			<div className="thankyou-slide">
				{langContent[lan].thankyou}
			</div>

		</div>
	)

	return(
		<div className="page-wrap">
			<Banner mainTitle={langContent[lan].mainTitle} 
			rightArrow={{text:langContent[lan].arrowRight, path: "./portfolio"}}
			leftArrow={{text:langContent[lan].arrowLeft, path: "./taidot"}}/>

			<div className="presentation-backgroung">
				<div className="projector-screen">
					{counterVisible ? <OldTimeMovieCounter duration={6000}/> : slides()}
				</div>
				<div className="curtain-right"></div>
				<div className="curtain-left"></div>
				<div className="curtain-upper"></div>
			</div>
		</div>
	)
}

export default AboutMe