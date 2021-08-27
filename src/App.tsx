import React, { FC, useState } from 'react';
import { Container  } from 'react-bootstrap';
import { ICard, IAddCard } from './interfaces';
import { AddCard }  from './components/AddCard'
import { Header }  from './components/Header'
import { CardList }  from './components/CardList'
import { shuffleArray } from './utils'
import { initialCards } from './InitialCards'

const App: FC = () => {
  const shuffledList = shuffleArray(initialCards);
  const [ cards, setCards ] = useState(shuffledList);

  const addCard: IAddCard = (word: string, translation: string) => {
    const newCard: ICard = {word, translation};
    setCards([newCard, ...cards])
  }

  return (
    <Container>
      <Header />
      <AddCard addCard={addCard} />
      <CardList cards={ cards } />
    </Container>
  );
}

export default App;
