import styles from './style.module.css'
import { MdHomeFilled } from "react-icons/md"
import Menu from './menu'

export default function Nav({ page, setPage }) {

    return (
        <div className={styles.container}>
            <div className={styles.menu}>
                <Menu open="Dash" icon="MdDashboard" setPage={setPage} page={page} />
                <Menu open="Proyect" icon="MdDeviceHub" setPage={setPage} page={page} />
                <Menu open="Database" icon="MdDns" setPage={setPage} page={page} />
            </div>
            <div className={styles.menu}>
                <Menu open="Setting" icon="MdBuild" setPage={setPage} page={page} />
            </div>
        </div>
    )
}
