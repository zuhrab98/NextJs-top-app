import { ButtonProps } from "./Button.props"
import styles from './Button.module.scss';
import cn from 'classnames'
import ArrowIcon from './arrow.svg'

export const Button = ({ appearance = 'primary', arrow = 'none', children, className, ...props }: ButtonProps): JSX.Element => {

    return (
        <button className={cn(styles.primary, {
            [styles.ghost]: appearance === 'ghost',
        })}>
            {children}
            {arrow != 'none' && <span className={cn(styles.arrow, {
                [styles.down]: arrow === 'down',
            })}>
                <ArrowIcon />
            </span>}
        </button>
    )
}