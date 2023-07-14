const questions = [
    "Quem é a Diana",
    " Quem é Ani: ",
    "Quem é Babitida:",
    "Quem é Ndó Camara",
    "Quem é a Liane:",
    "Quem é Hortência:",
]

const ask = ( index = 0 ) => {
    process.stdout.write("\n" + questions[index] + " > ")
}

ask()
const answers = []
process.stdin.on("data", data => {
    answers.push(data.toString().trim())
    if (answers.length < questions.length){
        ask(answers.length)
    } else{
        console.log(answers)
        proecess.exit()
    }
})
process.on('exit', () => {
    console.log(`
    Bora Francisco!

    Quem é a Diana: 
    ${answers[0]}

    Quem é Ani:
    ${answers[1]}

    Quem é Babitida:
    ${answers[2]}

    Quem é Ndó Camara:
    ${answers[3]}

    Quem é a Liane:
    ${answers[4]}

    Quem é Hortência:
    ${answers[5]}
    `)
})