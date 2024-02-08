import Image from 'next/image';
import styles from './exportCards.module.scss';

import snow from '@/assets/images/snow.png';
import ground from '@/assets/images/ground.png';
import { useState } from 'react';
import { Modal } from '../modal';

export const ExportCards = () => {
  const [open, setOpen] = useState(false);
  
  const handleClick = () => {
    setOpen(true);
  }
  return (
    <section className={styles.cards}>
      <div className={styles.card}>
        <Image src={snow} alt='Image' className={styles.img} />
        <span className={styles.title}>Вывоз снега</span>
        <button className={styles.btn} onClick={handleClick}>Заказать</button>
      </div>
      <div className={styles.card}>
        <Image src={ground} alt='Image' className={styles.img} />
        <span className={styles.title}>Вывоз грунта</span>
        <button className={styles.btn} onClick={handleClick}>Заказать</button>
      </div>
      {open && <Modal setOpen={setOpen}>Modal open </Modal>}
    </section>
  );
};
