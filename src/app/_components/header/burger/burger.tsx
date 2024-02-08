import styles from './burger.module.scss'
import {headerMenu} from "@/app/_components/header/header.constants";
import PhoneSvg from "@/assets/icons/phone.svg";
import cn from "classnames";

export const Burger = () => {
    return (
        <div className={styles.hamburgerMenu}>
            <input className={styles.menu__toggle} id='menu__toggle' type="checkbox"/>
            <label className={styles.menu__btn} htmlFor="menu__toggle">
                <span></span>
            </label>

            <ul className={styles.menu__box}>
                {headerMenu.map((item) => <li><a className={styles.menu__item} href={item.url}>{item.title}</a></li>)}
                <li className={cn(styles.phone, styles.menu__item)}><PhoneSvg/> +7 (981) 727-29-09</li>
                <li className={cn(styles.location, styles.menu__item)}>Санкт-Петербург, Пулковское шоссе 30/4, офис
                    101Д
                </li>

            </ul>

        </div>)
}