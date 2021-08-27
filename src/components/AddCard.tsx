import React, { useState } from 'react';
import { Row, Col, Form, Button } from 'react-bootstrap';

interface Props {
    addCard: (word: string, translation: string) => void;
}

export const AddCard: React.FC<Props> = ( {addCard}) => {
    const [word, setWord] = useState('');
    const [translation, setTranslation] = useState('');

    return (
        <Row className="justify-content-md-center">
        <Col  xs lg="4">
            <Form>
            <Form.Group className="mb-3" controlId="formBasicEmail">
                <Form.Label>Insert a word</Form.Label>
                <Form.Control
                type="text"
                name="card"
                placeholder="Insert a word"
                onChange={(e) => setWord(e.target.value)}
                />
            </Form.Group>

            <Form.Group className="mb-3" controlId="formBasicPassword">
                <Form.Label>Insert its translation</Form.Label>
                <Form.Control
                type="text"
                name="card"
                placeholder="Insert its translation"
                onChange={(e) => setTranslation(e.target.value)}
                />
            </Form.Group>

            <Button
                variant="primary"
                type="button"
                onClick={() => addCard(word, translation)}
                >
                Add Card
            </Button>
            </Form>
        </Col>
        </Row>
    )
}