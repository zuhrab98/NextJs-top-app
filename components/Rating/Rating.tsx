import { RatingProps } from "./Rating.props"
import { useEffect, useState, KeyboardEvent } from "react";

import StarIcon from './star.svg'
import styles from './Rating.module.scss';
import cn from "classnames";

export const Rating = ({ isEditable, rating, setRating, ...props }: RatingProps): JSX.Element => {

    const [ratingArray, setRatingArray] = useState<JSX.Element[]>(new Array(5).fill(<></>))

    useEffect(() => {
        constructorRating(rating)
    }, [rating])


    const constructorRating = (currentRating: number) => {
        const updateRating = ratingArray.map((r: JSX.Element, i: number) => {
            return (
                <span
                    key={i}
                    className={cn(styles.star, {
                        [styles.filled]: i < currentRating,
                        [styles.editable]: isEditable
                    })}
                    onMouseEnter={() => onChangeDisplay(i + 1)}
                    onMouseLeave={() => onChangeDisplay(rating)}
                    onClick={() => onClick(i + 1)}>
                        
                    <StarIcon
                        tabIndex={isEditable ? 0 : -1}
                        onKeyDown={(e: KeyboardEvent<SVGAElement>) => isEditable && handleSpace(i + 1, e)}
                    />
                </span>
            )
        })
        setRatingArray(updateRating)
    }

    const onChangeDisplay = (i: number) => {
        if (!isEditable) {
            return
        }
        constructorRating(i)
    }

    const onClick = (i: number) => {
        if (!isEditable || !setRating) return
        setRating(i)
    }

    const handleSpace = (i: number, e: KeyboardEvent<SVGElement>) => {
        if (e.code !== 'Space' || !setRating) return;
        setRating(i)
    }

    return (
        <div {...props}>
            {ratingArray.map((r: JSX.Element, i) => (
                <span key={i}>{r}</span>
            ))}
        </div>
    )
}