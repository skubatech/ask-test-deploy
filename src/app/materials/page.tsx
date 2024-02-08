import {Guarantees} from "@/app/_components/guarantees";
import {Connection} from "@/app/_components/connection";
import {MaterialsSwitcher} from "@/app/materials/materialsSwitcher/MaterialsSwitcher";
import type {Metadata} from "next";
import styles from "@/app/export/styles.module.scss";

export const metadata: Metadata = {
    title: "Нерудные материалы - ASK GROUP",
    description: "Нерудные матералы | ASK GROUP",
};
const Materials = () => {
    return (
        <section className={`${styles.wrapper} container`}>
            <h2 className={styles.title}>Нерудные материалы</h2>
            <MaterialsSwitcher/>
            <Guarantees/>
            <Connection/>
        </section>
    )
}

export default Materials;