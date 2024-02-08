'use client';

import Image from 'next/image';
import styles from './guarantees.module.scss';
import { ReactNode, useState } from 'react';

import Technique from '@/assets/icons/technique.svg?url';
import Materials from '@/assets/icons/materials.svg?url';
import Staff from '@/assets/icons/staff.svg?url';
import Docs from '@/assets/icons/docs.svg?url';
import technique from '@/assets/images/technique.png';
import materials from '@/assets/images/materials.png';
import staff from '@/assets/images/staff.png';
import time from '@/assets/images/clocks.png';

interface ContentItem {
  imgSrc: ReactNode;
  title: string;
  text: string;
}

export const Guarantees = () => {
  const [mainImage, setMainImage] = useState(technique);
  const [imgStyles, setImgStyles] = useState(styles.img);
  const contentItems: ContentItem[] = [
    {
      imgSrc: <Image src={Technique} className={styles.icon} alt='Icon'/>,
      title: 'спецтехника',
      text: 'В нашем автопарке более 50 единиц спецтехники, что позволяет нам полноценно решить задачу любой сложности и объема!',
    },
    {
      imgSrc: <Image src={Materials} className={styles.icon} alt='Icon' />,
      title: 'материалы',
      text: 'ASK GROUP - ваш надежный поставщик нерудных материалов, предоставляемых по самым лучшим и низким ценам',
    },
    {
      imgSrc: <Image src={Staff} className={styles.icon} id={styles.staff} alt='Icon'/>,
      title: 'квалифицированный персонал',
      text: 'ASK GROUP - это команда экспертов своего дела, которые помогают клиентам быстро и качественно растить бизнес',
    },
    {
      imgSrc: <Image src={Docs} className={styles.icon} id={styles.docs} alt='Icon'/>,
      title: 'работаем быстро и качественно',
      text: 'Наше профессиональное кредо - это пунктуальность и швейцарская точность, мы всегда работаем только на результат',
    },
  ];

  const onMouseEnterHandler = (event: React.MouseEvent<HTMLDivElement>) => {
    setImgStyles(styles.animImg);
    const id = event.currentTarget.id;
    switch (id) {
      case 'спецтехника':
        setMainImage(technique);
        break;
      case 'материалы':
        setMainImage(materials);
        break;
      case 'квалифицированный персонал':
        setMainImage(staff);
        break;
      case 'работаем быстро и качественно':
        setMainImage(time);
        break;
      default:
        setMainImage(technique);
    }
  };

  const onMouseLeave = () => {
    setImgStyles(styles.img);
  }

  return (
    <section className={styles.guarantees}>
      <h2 className={styles.title}>
        ASK GROUP <span className={styles.accent}>гарантирует</span> высочайший сервис и качество в исполнении услуг:
      </h2>
      <div className={styles.content}>
        <div className={styles.items}>
          {contentItems.slice(0, 2).map((item) => {
            return (
              <div
                className={styles.item}
                key={item.title}
                id={item.title}
                onMouseEnter={(id) => onMouseEnterHandler(id)}
                onMouseLeave={onMouseLeave}
              >
                {item.imgSrc}
                <div className={styles.description}>
                  <span className={styles.title}>{item.title}</span>
                  <span className={styles.text}>{item.text}</span>
                </div>
              </div>
            );
          })}
        </div>
        <Image src={mainImage} alt='Guarantees' className={imgStyles} />
        <div className={styles.items}>
          {contentItems.slice(2, 4).map((item) => {
            return (
              <div
                className={styles.item}
                key={item.title}
                id={item.title}
                onMouseEnter={(id) => onMouseEnterHandler(id)}
                onMouseLeave={onMouseLeave}
              >
                {item.imgSrc}
                <div className={styles.description}>
                  <span className={styles.title}>{item.title}</span>
                  <span className={styles.text}>{item.text}</span>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
};
