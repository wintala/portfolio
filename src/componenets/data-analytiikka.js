import { useEffect, useState } from "react"
import Excel from "./excel";
import Graph from "./graph";
import "./data-analytiikka.css"
import Banner from "./banner";



const Analytics = () => {
	const [data, setData] = useState(null)

  useEffect(() => {
    const createRandomArray = (len, slope, constant, randomness) => (
      new Array(len).fill(0).map((n, i)=> Math.floor(Math.random() * randomness) + constant + slope * i)
		)
		const randomSeries = () => ({random7: createRandomArray(7, 10, 0, 20), anotherRandom7: createRandomArray(7, -10, 60, 20)})
    setData(randomSeries())
    setInterval(() => {setData(randomSeries())}, 2000)

	}, [])
	
	if (!data) {
		return null
	}
	
  const valueColor = (sum) => {
    if (sum > 85) {
      return "rgb(150, 255, 192) "
    } else if (sum < 75) {
      return "rgb(255, 140, 140)"
    } else {
      return "rgb(252, 238, 164)"
    }
  }
	
	const random7frorExcel = [{value: "Set1:"}].concat(data.random7.map(n => ({value: n})))
  const anotherRandom7frorExcel = [{value: "Set2:"}].concat(data.anotherRandom7.map(n => ({value: n})))
	const sumSeriesForExcel = [{value: "Total:"}].concat(data.random7.map((e, i) => ({value: e + data.anotherRandom7[i]})).map(e => ({...e, color: valueColor(e.value)})))
	const excelEmptyRow = new Array(8).fill(" ").map(v => ({value: v}))
	
	return(
		<>
		<Banner secondaryTitle={"Data-analytiikka"} />
		<div className="analysis-anim-wrap">
			<div>
				<Graph 
				labels={['January', 'February', 'March', 'April', 'May', 'June', 'July']}
				dataSets={[
					{title: "Set1", data: data.random7, color: "rgb(255, 102, 153)"},
					{title: "Set2", data: data.anotherRandom7, color: "rgb(102, 153, 255)"}
				]}/>
			</div>
			<div>
				<Excel
				matrix={[excelEmptyRow, random7frorExcel, anotherRandom7frorExcel, sumSeriesForExcel, excelEmptyRow, excelEmptyRow]}
				title={"Book1"}
				/>
			</div>
		</div>
		</>
	)
}

export default Analytics
