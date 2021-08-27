export interface ICard {
    word: string;
    translation: string;
}

export type IAddCard = (word: string, translation: string) => void;