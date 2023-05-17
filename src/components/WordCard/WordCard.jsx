// css
import styles from './WordCard.module.css'
import { useState } from 'react'
import Icon from '../Icon/Icon'

// assets
// import trash from '../../assets/icons/trash.svg'
// import flip from '../../assets/icons/flip.svg'


const WordCard = ({word, handleDeleteWord}) => {
  const [showDefinition, setShowDefinition] = useState(false)
  const [flipCard, setFlipCard] = useState(false)

  const triggerAnimation = () => {
    setFlipCard(true)
    setTimeout(() => {
      setFlipCard(false)
    }, 500)
  }

  const handleWordCardClick = () => {
    triggerAnimation()
    setShowDefinition(!showDefinition)
  }

  const partOfSpeechArr = word.partOfSpeech.map((part => part))
  const wordObj = word.translation.map((translation, idx) => {
    return {
      translation: translation,
      partOfSpeech: partOfSpeechArr[idx]
    }
  })

  return (
    <div className={styles.wordContainer}  id={ flipCard ? styles.flip : "" } onClick={handleWordCardClick}>
      <button onClick={ ()=>{handleDeleteWord(word._id) ; setFlipCard(false) }
          }>
        {/* <img className="wordIcon" id="trash" src={ trash } alt="delete word" /> */}
        <Icon category={'Trash'} />
      </button>
    {showDefinition ? 
      <>
      {wordObj.map((wordEl) => 
        <>
          <h3>{wordEl.translation}</h3>
          <h4>({wordEl.partOfSpeech})</h4>
        </>
        )}
      </>   
      : 
      <h1>{word.word}</h1>
    }

    <Icon category={'Flip'} />

      {/* <div id="flip-icon-space">
        <img className="wordIcon" id="flip" src={ flip } alt="turn card" />
      </div> */}
    </div>
  )
}

export default WordCard