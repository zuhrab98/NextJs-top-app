import { HeaderProps } from "./Header.props"
import styles from './Button.module.scss';
import cn from 'classnames'
import ArrowIcon from './arrow.svg'

export const Header = ({ ...props }: HeaderProps): JSX.Element => {

    return (
        <div {...props}>
            Header
        </div>
    )
}