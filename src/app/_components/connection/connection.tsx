'use client';
import styles from './connection.module.scss';


import Phone from '@/assets/icons/whitePhone.svg';
import Messenger from '@/assets/icons/messenger.svg';
import WhatsAppWhite from '@/assets/icons/waWhite.svg';
import TelegramWhite from '@/assets/icons/telegramWhite.svg';

export const Connection = () => {
  return (
    <section className={styles.connection}>
      <span className={styles.text}>
        Оставляйте заявку прямо сейчас и получите скидку 5% на любую услугу!
      </span>
      <div className={styles.itemsWrap}>
        <a href='tel:+79817272909' className={styles.item}>
          Позвонить
          <img src={Phone} alt='Icon' className={styles.icon} />
        </a>
        <div className={styles.rowWrap}>
          <a
            className={`${styles.item} ${styles.itemRow}`}
            href='https://web.whatsapp.com/'
            target='_blank'
            rel='noopener noreferrer'
          >
            WhatsApp
            <img src={WhatsAppWhite} alt='Icon' className={styles.icon}/>
          </a>
          <a
            className={`${styles.item} ${styles.itemRow}`}
            href='https://telegram.org/'
            target='_blank'
            rel='noopener noreferrer'
          >
            Telegram
            <img src={TelegramWhite} alt='Icon' className={styles.icon} />
          </a>
        </div>
        <a
          href='https://api.whatsapp.com/'
          target='_blank'
          rel='noopener noreferrer'
          className={styles.item}
        >
          Оставить заяку на сайте
          <img src={Messenger} alt='Icon' className={styles.icon} />
        </a>
      </div>
    </section>
  );
};
