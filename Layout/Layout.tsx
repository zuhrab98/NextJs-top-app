import { Pprops } from "./Layout.props"
import styles from './P.module.scss';


export const P = ({ size = 16, children }: Pprops): JSX.Element => {
    return (
        <p
            className={styles.p}
            style={{ fontSize: size }}
        >{children}</p>
    )
}