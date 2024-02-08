'use client';
import styles from './header.module.scss'
import LogoSvg from '@/assets/icons/logo.svg'
import {headerMenu} from "@/app/_components/header/header.constants";
import {NavItem} from "@/app/_components/header/navItem/navItem";
import {useState} from "react";
import PhoneSvg from '@/assets/icons/phone.svg'
import {useBreakpointIndex} from "@/utils/hooks/useBreakpointIndex";
import {BREAKPOINTS_INDEXES} from "@theme/constants/breakpoints";
import {Burger} from "@/app/_components/header/burger/burger";

export const Header = () => {
    const [activeMenu, setActiveMenu] = useState<string>();
    const breakpoint = useBreakpointIndex();
    const isMobile = breakpoint === BREAKPOINTS_INDEXES.xs || breakpoint === BREAKPOINTS_INDEXES.sm;

    const isActiveTab = (slug: string) => {
        return activeMenu === slug;
    }

    return (
        <header className={styles.header}>
            <span className={styles.mainRow}>
                <span className={styles.logo}><LogoSvg/></span>
                {!isMobile && <>
                    <span className={styles.location}>Санкт-Петербург, Пулковское шоссе 30/4, офис 101Д</span>
                    <span className={styles.phone}> <PhoneSvg/> +7 (981) 727-29-09</span>
                </>
                }
                {isMobile && <Burger/>}

            </span>
            {!isMobile &&
                <nav className={styles.navigation}>
                    {headerMenu.map((item) =>
                        <NavItem
                            item={item}
                            key={item.title}
                        />
                    )}
                </nav>
            }

        </header>
    )
}