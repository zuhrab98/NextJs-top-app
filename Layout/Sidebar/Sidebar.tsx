import { SidebarProps } from "./Sidebar.props"
import styles from './Button.module.scss';
import cn from 'classnames'
import ArrowIcon from './arrow.svg'

export const Sidebar = ({ ...props }: SidebarProps): JSX.Element => {

    return (
        <div {...props}>
            Sidebar
        </div>
    )
}