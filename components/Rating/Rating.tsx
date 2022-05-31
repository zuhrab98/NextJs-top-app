import { RatingProps } from "./Rating.props"
import { useEffect, useState } from "react";

import StarIcon from './star.svg'
import styles from './Rating.module.scss';
import cn from "classnames";

export const Rating = ({ isEditable, rating, setRating, ...props }: RatingProps): JSX.Element => {

    const [ratingArray, setRatingArray] = useState<JSX.Element[]>(new Array(5).fill(<></>))

    useEffect(() => {
        constructRating(rating)
    }, [rating])

    const constructRating = (currentrating: number) => {
        const updatedArray = ratingArray.map((r: JSX.Element, i: number) => {
            return (
                <StarIcon
                    key={i} className={cn(styles.star, {
                        [styles.filled]: i < currentrating,
                        [styles.editable]: isEditable,
                    })}
                    onMouseEnter={() => changeDisplay(i + 1)}
                    onMouseLeave={() => changeDisplay(rating)}
                    onClick={() => onClick(i + 1)}
                />
            )
        })
        setRatingArray(updatedArray)
    }

    const changeDisplay = (i: number) => {
        if (!isEditable) {
            return
        }
        constructRating(i)
    }

    const onClick = (i: number) => {
        if (!isEditable || !setRating) {
            return
        }
        setRating(i)
    }

    return (
        <div>
            {ratingArray.map((r, i) => <span key={i}>{r}</span>)}
        </div>
    )
}