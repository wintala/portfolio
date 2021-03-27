import python from "../images/python.png"
import r from "../images/r.png"
import excel from "../images/excel.png"
import powerbi from "../images/powerbi.png"
import sql from "../images/sql-logo.png"


const skills = {
	FI: {
		python: {
			skills: ["Paljon kokemusta", "Kielen ekosysteemi ja kirjastot tuttuja", "Tuottelias ja nopea scriptaus"],
			image: python
		},
		excel: {
			skills: ["VBA makrot", "Pivot", "Datan tuonnit ja viennit eri lähteistä"],
			image: excel
		},
		r: {
			skills: ["Tilastollien testaus", "Regressiot", "Tilastolliset tunnusluvut"],
			image: r
		},
		powerBI: {
			skills: ["Visualisoinnit", "Dashboardit", "Datan viennit ja tuonnit"],
			image: powerbi
		},
		sql: {
			skills: ["Kyselyt", "Suunnittelu ja relaatioden hallinta"],
			image: sql
		}
	},
	EN: {
		python: {
			skills: ["Lots of experience", "Familiarness with the ecosystem and libraries", "Fast and productive scripting"],
			image: python
		},
		excel: {
			skills: ["VBA macros", "Pivot", "Data imports and exports from different sources"],
			image: excel
		},
		r: {
			skills: ["Statistical testing", "Regressions", "Statistical characteristics"],
			image: r
		},
		powerBI: {
			skills: ["Visualizations", "Dashboards", "Data imports and outports"],
			image: powerbi
		},
		sql: {
			skills: ["Queries", "Designing and managing relations"],
			image: sql
		}
	}
}

export default skills