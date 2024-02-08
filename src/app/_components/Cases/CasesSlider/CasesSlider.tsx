import {Swiper, SwiperSlide} from "swiper/react";
import {Pagination} from "swiper/modules";
import styles from "@/app/_components/Cases/cases.module.scss";
import Image from "next/image";
import ParkingImg from "@/assets/images/parking.jpeg";
import IMG1 from "@/assets/images/image 16.png";
import IMG2 from "@/assets/images/image 17.png";
import IMG3 from "@/assets/images/image 18.png";

export const CasesSlider = () => {
    return (
        <Swiper
            slidesPerView={1}
            className={styles.swiper}
            modules={[Pagination]}
            loop={true}
            pagination={{
                el: '.swiper-pagination',
                type: 'bullets',
                clickable: true,
                renderBullet: (index, className) => {
                    return (
                        `<span class="${className}"><i></i><b></b></span>`
                    );
                },
            }}
        >
            <SwiperSlide className={styles.slider}>
                <div className={styles.a}>
                    <Image {...ParkingImg} alt='Парковка'/>
                    <span className={styles.title}>Штраф-стоянка</span>
                </div>
            </SwiperSlide>
            <SwiperSlide className={styles.slider}>
                <div className={styles.b}>
                    <Image {...IMG1} alt='Парковка'/>
                    <span className={styles.title}>Вывоз грунта при строительстве ЖК «БелАрт»</span>
                </div>
            </SwiperSlide>
            <SwiperSlide className={styles.slider}>
                <div className={styles.c}>
                    <Image {...IMG2} alt='Парковка'/>
                    <span className={styles.title}>Самовывоз грунта и долгосрочное сотрудничество с ЖК «Астрид»</span>
                </div>
            </SwiperSlide>
            <SwiperSlide className={styles.slider}>
                <div className={styles.d}>
                    <Image {...IMG3} alt='Парковка'/>
                    <span className={styles.title}>Вывоз грунта идолгосрочное сотрудничество при строительстве «ИТМО Хай Парк»</span>
                </div>
            </SwiperSlide>
            <div className='swiper-pagination'></div>
        </Swiper>
    )
}