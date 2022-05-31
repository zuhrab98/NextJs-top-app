import { TagProps } from "./Tag.props"
import styles from './Tag.module.scss';
import cn from "classnames";


export const Tag = ({ size, color, href, children, className, ...props }: TagProps): JSX.Element => {
    return (
        <div className={cn(styles.tag, {
            [styles.m]: size === 'm',
            [styles.s]: size === 's',
            [styles.green]: color === 'green',
            [styles.red]: color === 'red',
            [styles.ghost]: color === 'ghost',
            [styles.grey]: color === 'grey',
            [styles.primary]: color === 'primary',
        })}>
            {href ?
                <a href={href}>{children}</a> :
                <>{children}</>
            }
        </div>
    )
}