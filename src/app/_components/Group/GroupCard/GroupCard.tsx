import styles from './GroupCard.module.scss'
import {FC, ReactNode, useState} from "react";
import cn from "classnames";
import {GroupCardSpinner} from "@/app/_components/Group/GroupCardSpinner/GroupCardSpinner";

type Props = {
    className: string;
    spinnerClassName?: string;
    titleClassName?: string;
    title: string;
    backContent: ReactNode;
}
export const GroupCard: FC<Props> = ({className, spinnerClassName, title, backContent, titleClassName}) => {
    const [isActive, setIsActive] = useState(false);
    const [isRotate, setRotate] = useState(false);

    const clickToCard = () => {
        setRotate(prev => !prev)
    }
    return (
        <div
            className={cn(styles.card, {[styles.rotate]: isRotate}, className)}
            onMouseEnter={() => setIsActive(true)}
            onMouseLeave={() => setIsActive(false)}
            onClick={clickToCard}
        >
            <div className={styles.cardFront}>
                <span className={cn(styles.title, titleClassName)}>{title}</span>
                {spinnerClassName && <GroupCardSpinner className={spinnerClassName} isActive={isActive}/>}
            </div>
            <div className={styles.cardBack}>
                {backContent}
            </div>
        </div>
    )
}