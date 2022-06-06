import { FooterProps } from "./Footer.props"
import styles from './Button.module.scss';
import cn from 'classnames'
import ArrowIcon from './arrow.svg'

export const Footer = ({ ...props }: FooterProps): JSX.Element => {

    return (
        <div {...props}>
            Footer
        </div>
    )
}