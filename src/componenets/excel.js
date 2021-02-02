import "./excel.css"

const Excel = ({title, matrix}) => {
	const maxLength = Math.max(...matrix.map(row => row.length))

	const headerRowEmpty = new Array(maxLength).fill(0)
	const headerRow = headerRowEmpty.map((e, i) => ({value: (i + 10).toString(36).toUpperCase()}))
	const matrixWithHeaderRow = [headerRow].concat(matrix)
	const matrixcomplete = matrixWithHeaderRow.map((row, i) => (i ? [{value: i}].concat(row) : [{value: ""}].concat(row)))

	return(
		<div>
			<div className="toolbar">{title}</div>
			<table className="excel">
				<tbody>
					{matrixcomplete.map((row, i) => 
					<tr key={i}>
						{row.map((cell, j) => ( 
						!i || !j ? 
						<th key={j}>
							{cell.value}
						</th> : 
						<td key={j} 
							style={{backgroundColor: cell.color ? cell.color : "white", textAlign: typeof cell.value === "string" ? "center" : "right"}}>
								{cell.value}
						</td>
						))}
					</tr>
					)}
				</tbody>
			</table>
		</div>
	)
}

export default Excel