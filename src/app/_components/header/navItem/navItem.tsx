import styles from "./navItem.module.scss";
import ArrowDown from "@/assets/icons/arrow-down.svg";
import {FC, useEffect, useRef, useState} from "react";
import {TNavItem} from './navItem.types'
import useClickOutSide from "@/utils/hooks/useClickOutSide";

type Props = {
    item: TNavItem;
    isActiveTab?: boolean;
    onActive?: () => void;
}
export const NavItem: FC<Props> = ({item, isActiveTab, onActive}) => {
    const ref = useRef(null);
    const [isActive, setIsActive] = useState(false);
    useClickOutSide(ref, () => setIsActive(false));

    useEffect(() => {
        setIsActive(false);
    }, [isActiveTab])

    const mouseEnter = () => {
        setIsActive(true);
    }

    return (
        <div className={styles.navItem}
             ref={ref}
             onMouseOver={mouseEnter}>
            <span className={styles.title}>
                <span>{item.title}</span>
                {item.child && <ArrowDown/>}
            </span>
            {/*{*/}
            {/*    item.child &&*/}
            {/*    <ul className={cn(styles.childList, {[styles.active]: isActive})}>*/}
            {/*        {item.child.map((child) =>*/}
            {/*            <li key={child.title} className={styles.childItem}>{child.title}</li>*/}
            {/*        )}*/}
            {/*    </ul>*/}
            {/*}*/}
        </div>
    )
}