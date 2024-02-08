import {FC, useEffect, useState} from "react";
import cn from "classnames";
import styles from './GroupCardSpinner.module.scss'

type Props = {
    className: string;
    isActive: boolean;
}
export const GroupCardSpinner: FC<Props> = ({className, isActive}) => {
    const [isRotate, setIsRotate] = useState(false);

    useEffect(() => {
        if (isActive)
            setIsRotate(true);
        else setTimeout(() => {
            setIsRotate(false)
        }, 500)

    }, [isActive]);

    return (
        <section className={cn(className, styles.spinner)}>
            <span className={cn(styles.f_spin, {[styles.active_f]: isRotate})}>
                  <span className={cn(styles.s_spin, {[styles.active_s]: isRotate})}></span>
            </span>
        </section>
    )
}