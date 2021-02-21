import Banner from "./banner"
import mina from "../images/mina.png"
import "./info-page.css"


const Info = () => {

	return(
		<>
		<Banner mainTitle={"info"} secondaryTitle={"waltteri rintala"} rightArrow={{text: "TAIDOT", path: "./taidot"}}/>
		<div className="info-wrap">
			<div>
				<img src={mina} alt="minä"></img>
				<p>
					Olen 22v parhaillaan kandia kirjoittava opiskelija Turun kauppakorkeakoulussa. 
					Etsin töitä joissa pääsen haastamaan itseäni ja hyödyntämään taitojani monipuolisesti.
					Suurimmat vahvuuteni persoonana ovat ongelmanratkaisu- ja yhteistyökykyni sekä kärsivällisyys. 
					Olen IT-matemaattisesti orientuitunut ja nautin analyyttisestä työstä, mutta
					olen tarvittaessa valmis pöhisemään asiakaslähtöisyydestä, fasilitoinnista ja arvoketjuista 
					sekä hymyilemään leveää asiakaspalveluhymyä.
				</p>
			</div>
			<div>
				<h3>Koulutus</h3>
				<ul>
					<li>
						<h4>
							Turun kauppakorkeakoulu
						</h4>
						<h5>Kauppatieteiden maisteri (2018-2023)</h5>
						<ul>
							<li>Pääaine: taloustiede</li>
							<li>Sivuaineet: matematiikka, tilastotiede, rahoitus</li>
						</ul>
					</li>
					<li>
						<h4>
							Kerttulin lukio
						</h4>
						<h5>
							Ylioppilas (2014-2017))
						</h5>
						<ul>
							<li>Matematiikka, Fysiikka, Yhteiskuntaoppi = L</li>
							<li> Englanti, Äidinkieli = E</li>
						</ul>
					</li>
				</ul>
			</div>
			<div>
				<h3>Kokemus</h3>
				<ul>
					<li>
						<h4>
							DHL
						</h4>
						<h5>Terminaalityöntekijä (06/2019 - 12/2019)</h5>
						<ul>
							<li>Rahtikirjojen ja asiakastietojen täyttö</li>
							<li>Lähetysten lajittelu</li>
						</ul>
					</li>
					<li>
						<h4>
							Asepalvelus suoritettu
						</h4>
						<h5>
							Lääkintämies/Liikunta-alan varusmies (2018)
						</h5>
						<ul>
							<li>Kuntotestien ja liikunta-tuntien vetäminen</li>
							<li>Liikuntahallin asiakkaiden neuvonta</li>
						</ul>
					</li>
					<li>
						<h4>
							Raision urheilijat
						</h4>
						<h5>
							Uinnin juniorivalmentaja (koulun ohella 2015-2017)
						</h5>
						<ul>
							<li>Treenien suunnittelu ja toteutus</li>
						</ul>
					</li>
				</ul>
			</div>
		</div>
		</>
	)
}

export default Info