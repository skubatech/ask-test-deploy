'use client';
import styles from './cases.module.scss'
import Image from "next/image";
import ParkingImg from '@/assets/images/parking.jpeg'
import IMG1 from '@/assets/images/image 16.png'
import IMG2 from '@/assets/images/image 17.png'
import IMG3 from '@/assets/images/image 18.png'
import {useBreakpointIndex} from "@/utils/hooks/useBreakpointIndex";
import {BREAKPOINTS_INDEXES} from "@theme/constants/breakpoints";
import {CasesSlider} from "@/app/_components/Cases/CasesSlider/CasesSlider";

export const Cases = () => {
    const breakpoint = useBreakpointIndex();
    const isMobile = breakpoint === BREAKPOINTS_INDEXES.xs;
    return (
        <section className={styles.main} id='works'>
            <h1>Наши работы</h1>
            {!isMobile && <section className={styles.casesGrid}>
                <div className={styles.a}>
                    <Image {...ParkingImg} alt='Парковка'/>
                    <span className={styles.title}>Штраф-стоянка</span>
                </div>
                <div className={styles.b}>
                    <Image {...IMG1} alt='Парковка'/>
                    <span className={styles.title}>Вывоз грунта при строительстве ЖК «БелАрт»</span>
                </div>
                <div className={styles.c}>
                    <Image {...IMG2} alt='Парковка'/>
                    <span className={styles.title}>Самовывоз грунта и долгосрочное сотрудничество с ЖК «Астрид»</span>
                </div>
                <div className={styles.d}>
                    <Image {...IMG3} alt='Парковка'/>
                    <span className={styles.title}>Вывоз грунта идолгосрочное сотрудничество при строительстве «ИТМО Хай Парк»</span>
                </div>
            </section>
            }
            {isMobile && <CasesSlider/>}
        </section>
    )
}