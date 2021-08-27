import React from 'react'
import { Row, Col } from 'react-bootstrap'
import { ICard } from '../interfaces'
import { CardItem } from './CardItem'

interface Props {
    cards: ICard[];
}

export const CardList: React.FC<Props> = ({ cards }) => {
    return (
        <div className="card-list">
            <Row>
                {cards.map((card: ICard, index: number) => (
                    <Col sm={3} key={index}>
                        <CardItem card={ card } />
                    </Col>
                ))}
            </Row>
        </div>
    )
}