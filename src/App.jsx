//CSS
import "./App.css"

//React
import { useState } from "react"

//Dados
import { wordsList } from "./data/words"

//Components
import StartScreen from "./components/StartScreen"
import Game from "./components/Game"
import GameOver from "./components/GameOver"

const stages = [
  { id: 1, name: "start" },
  { id: 2, name: "game" },
  { id: 3, name: "end" },
]

function App() {
  const [gameStage, setGameStage] = useState(stages[0].name)
  const [words] = useState(wordsList)

  const [pickedWord, setPikedWord] = useState("")
  const [pickedCategory, setPickedCategory] = useState("")
  const [letters, setLetters] = useState([])

  const pickWordAndCategory = () => {
    const categories = Object.keys(words)
    const category =
      categories[Math.floor(Math.random() * Object.keys(categories).length)]
    console.log(category)
    const word = words[category][Math.floor(Math.random() * words[category].length)]
    console.log(word)
    return { word, category }
  }

  // start  the secret word game
  const startGame = () => {
    const { word, category } = pickWordAndCategory()

    //create arry in lettres
    let wordLetters = word.split("")

    wordLetters = wordLetters.map((letra) => letra.toLowerCase())
    console.log(word, category)
    console.log(wordLetters)

    setPikedWord(word)
    setPickedCategory(category)
    setLetters(letters)

    //pick word and pick category
    setGameStage(stages[1].name)
  }

  //process the letter input
  const verifyLetter = () => {
    setGameStage(stages[2].name)
  }

  // Retry game
  const retry = () => {
    setGameStage(stages[0].name)
  }

  return (
    <>
      <div className="app">
        {gameStage === "start" && <StartScreen startGame={startGame} />}
        {gameStage === "game" && <Game verifyLetter={verifyLetter} />}
        {gameStage === "end" && <GameOver retry={retry} />}
      </div>
    </>
  )
}

export default App
