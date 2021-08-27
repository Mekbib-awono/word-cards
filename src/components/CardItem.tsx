import React, { useState } from 'react'
import { ICard } from '../interfaces'

interface Props {
    card: ICard;
}

export const CardItem: React.FC<Props> = ({ card }) => {
    const [showTranslation, setShowTranslation] = useState(false);

    return (
        <div className="card-item" onClick={() => setShowTranslation(!showTranslation)}>
            {showTranslation ? card.translation : card.word}
        </div>
    )
}