import { useState } from 'react';
import { Htag, Button, P, Tag, Rating } from '../components';

export default function Home(): JSX.Element {

    const [rating, setRating] = useState<number>(4)

    return (
        <div>
            <Htag tag="h3">Text</Htag>
            <Button appearance='ghost' arrow='right' >Читать отзывы</Button>
            <Button appearance='primary' arrow='right' >Читать отзывы</Button>
            <P size={18}>Большой</P>
            <P>Средний</P>
            <P size={14}>Маленький</P>
            <Tag size='s' color='green'>-10 000 P</Tag>
            <Tag href='https://hh.ru/?hhtmFrom=resume_list' size='m' color='red'>hh.ru</Tag>
            <Tag size='s' color='primary'>Подготовка макетов</Tag>
            <Tag size='s' color='ghost'>Дизайн</Tag>
            <Tag size='m' color='grey'>10</Tag>
            <Rating rating={rating} isEditable={true} setRating={setRating}/>
        </div>
    )
}
