import { PaperPlaneRight } from "phosphor-react";
import { FormEvent, KeyboardEvent, useState } from "react";
import { Header } from "../components/Header"
import { Separator } from "../components/Separator"
import { Tweet } from "../components/Tweet"

import './Status.css';

// Fluxo de renderização:

/** Toda vez que alteramos o estado de um componente,
* 1. TODO componente é recalculado
* 2. Toda vez que o seu componente PAI renderizar
* 3. Toda vez que alguma das suas propriedades mudarem.
*/ 

/**
 * Algoritmo de reconciliação
 * 1. Criar em memória a nova versão do HTML do componente
 * 2. Compara essa nova versão com a versão anterior do HTML (Diff)
 * 3. Aplicar as operações Javascript para alterar somente o necessário no HTML
*/

export function Status() {
    const [newAnswer, setNewAnswer] = useState('')
    const [answers, setAnswers] = useState([
      'Concordo...',
      'Olha, faz sentido!',
      'Parabéns pelo progresso'
    ])
  
    function createNewAnswer(event: FormEvent) {
      event.preventDefault()
  
      setAnswers([newAnswer, ...answers])
      setNewAnswer('')
      // Imutabilidade
    }

    function handleHotkeySubmit(event: KeyboardEvent) {
      if (event.key === 'Enter' && (event.ctrlKey || event.metaKey)) {
        setAnswers([newAnswer, ...answers])
        setNewAnswer('')
      }
    }

    return (
        <main className="status">
          <Header title="Tweet" />

            <Tweet content="Cara, WB de punho não presta!" />

            <Separator />

          <form onSubmit={createNewAnswer} className="answer-tweet-form">
            <label htmlFor="tweet">
              <img src="https://github.com/hzimr.png" alt="Hítalo Rodrigues" />
              <textarea 
                id="tweet"
                placeholder="Tweet your answer?"
                value={newAnswer}
                onKeyDown={handleHotkeySubmit}
                onChange={(event) => {
                  setNewAnswer(event.target.value)
                }}
                />
            </label>

            <button type="submit">
              <PaperPlaneRight />
              <span> Answer </span>
              </button>
          </form>


        {answers.map(answer => {
          return <Tweet key={answer} content={answer}/>
        })} 

        </main>
    )
}