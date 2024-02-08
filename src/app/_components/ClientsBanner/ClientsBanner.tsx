'use client';
import {Swiper, SwiperSlide} from "swiper/react";
import styles from "@/app/page.module.scss";
import Image from "next/image";
import {clientItems} from "@/app/_components/ClientsBanner/ClientsBanner.constants";
import {Autoplay} from "swiper/modules";

export const ClientsBanner = () => {

    return (
        <section className={`${styles.partners} container`}>
            <h2 className={styles.title}>Наши партнеры</h2>
            <div className='swiperPartner'>
                <Swiper
                    spaceBetween={40}
                    speed={5000}
                    loop={true}
                    autoplay={{
                        delay: 1,
                        disableOnInteraction: false,
                    }}
                    slidesPerView={'auto'}
                    modules={[Autoplay]}
                >
                    {clientItems.map((item, i) => {
                        return (
                            <SwiperSlide key={item.text}>
                                <div className={styles.partner}>
                                    <Image src={item.imgSrc} alt='Logo' className={styles.img}/>
                                    <span className={`${styles.name} ${i === 2 ? styles.mvd : ''}`}>
              {item.text}
            </span>
                                </div>
                            </SwiperSlide>
                        );
                    })}
                </Swiper>
            </div>
        </section>
    )
}