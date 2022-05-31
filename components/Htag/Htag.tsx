import { HtagProps } from "./Tag.props"
import styles from './Htag.module.scss'
import cn from 'classnames'

export const Htag = ({ tag, children }: HtagProps): JSX.Element => {
    const Tag = tag

    return (
        <Tag className={cn({
            [styles.h1]: tag === 'h1',
            [styles.h2]: tag === 'h2',
            [styles.h3]: tag === 'h3',
        })}>{children}</Tag>
    )
}