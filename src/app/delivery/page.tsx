import { Connection } from "../_components/connection";
import { Guarantees } from "../_components/guarantees";

import styles from './styles.module.scss';

const Delivery = () => {
    return (
        <section className={`${styles.wrapper} container`}>
            <Guarantees />
            <Connection />
        </section>
    )
}

export default Delivery;