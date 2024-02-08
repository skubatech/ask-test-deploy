'use client';
import {Autoplay, Pagination} from 'swiper/modules';
import {Swiper, SwiperSlide} from 'swiper/react';
import styles from '@/app/page.module.scss';
import Image from 'next/image';
import {useState} from 'react';
import {bannerItems} from '@/app/_components/MainBanner/MainBanner.constants';
import {useRouter} from 'next/navigation';

export const MainBanner = () => {
    const router = useRouter();
    const [currentIndexBanner, setCurrentIndexBanner] = useState(0);
    const bannerLinkTo = (path: string) => {
        router.push(path);
    };

    const createSlideBanner = () => {
        return bannerItems.map((item, i) => {
            return (
                <SwiperSlide key={item.title} onClick={() => bannerLinkTo(item.path)}>
                    <section className={styles.slider}>
                        <div className={styles.description}>
                            <h2
                                className={styles.title}
                                id={i === 2 ? styles.bannerTitle : undefined}
                            >
                                {item.title}
                            </h2>
                            <span className={styles.text}>{item.text}</span>
                            <button className={styles.btn}>Заказать сейчас</button>
                        </div>
                        <div className={styles.imgWrap}>
                            <Image
                                src={item.imgSrc}
                                alt='Banner'
                                className={`${styles.img} ${i === 0 && styles.banner1} ${
                                    i === 1 && styles.banner2
                                } ${i === 2 && styles.banner3}`}
                            />
                        </div>
                    </section>
                </SwiperSlide>
            );
        });
    };

    return (
        <Swiper
            slidesPerView={1}
            autoplay={{delay: 3500}}
            modules={[Autoplay, Pagination]}
            loop={true}
            onSlideChange={(swiper) => setCurrentIndexBanner(swiper.realIndex)}
            pagination={{
                el: '.swiper-pagination',
                type: 'bullets',
                clickable: true,
                renderBullet: (index, className) => {
                    return `<span class="${className}"><i></i><b></b></span>`;
                },
            }}
        >
            {createSlideBanner()}
            <div className='swiper-pagination'></div>
        </Swiper>
    );
};
