
const skills = {
	languages: ["python", "JS&TS", "Java"],
	frontEnd: ["React + Redux", "Bootstarp", "Sass", "Webpack"],
	backEnd: ["Django + DRF", "Node + Express", "Flask", "Spring"],
	dataBases: ["SQL", "Mongo"],
	other: ["Git", "Docker", "ChromeDevTools", "AWS (Lambda, EC2, RDS, S3)"]
} 

const handleKey = (key) => {
  const list = [[{word: `    ${key}`, color: "violet"}, {word: ": [", color: "white"}]]

  for (let elem of skills[key]) {
    list.push([{word: `        "${elem}"`, color: "rgb(26, 255, 102, 0.9)"}, {word: ",", color: "white"}])
  }
  list.push([{word: `    ],`, color: "white"}]) 

  return list

}
const transWhite = "rgb(255, 255, 255, 0.5)"

 const arrays = Object.keys(skills).map(key => handleKey(key))
 const editorData = [].concat.apply([], arrays)
 const editordataFinnish = [[{word: `skills = {`, color: "white"}]].concat(editorData).concat([[{word: `}`, color: "white"}], [{word: "", color: "white"}]])
 const editorDataWithComments = [[{word: ``, color: transWhite}],
                                  [{word: `// By no means am I an expert in all the techonologies below`, color: transWhite}],
                                  [{word: `// but I have some level of experience in all of these`, color: transWhite}],
                                  [{word: `// and I certainly don't have to start from the "hello world" tutorials when working with them`, color: transWhite}],
                                  [{word: ``, color: transWhite}]
                                ].concat(editordataFinnish)

const exportObject = {commentedSkills: editorDataWithComments, skillsWithoutComments: editordataFinnish}
export default exportObject