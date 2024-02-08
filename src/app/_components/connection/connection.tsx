import styles from './connection.module.scss';
import Image from 'next/image';

import Phone from '@/assets/icons/whitePhone.svg?url';
import Messenger from '@/assets/icons/messenger.svg?url';
import WhatsAppWhite from '@/assets/icons/waWhite.svg?url';
import TelegramWhite from '@/assets/icons/telegramWhite.svg?url';

export const Connection = () => {
  return (
    <section className={styles.connection}>
      <span className={styles.text}>
        Оставляйте заявку прямо сейчас и получите скидку 5% на любую услугу!
      </span>
      <div className={styles.itemsWrap}>
        <a href='tel:+79817272909' className={styles.item}>
          Позвонить
          <Image src={Phone} alt='Icon' className={styles.icon} />
        </a>
        <div className={styles.rowWrap}>
          <a
            className={`${styles.item} ${styles.itemRow}`}
            href='https://web.whatsapp.com/'
            target='_blank'
            rel='noopener noreferrer'
          >
            WhatsApp
            <Image src={WhatsAppWhite} alt='Icon' className={styles.icon}/>
          </a>
          <a
            className={`${styles.item} ${styles.itemRow}`}
            href='https://telegram.org/'
            target='_blank'
            rel='noopener noreferrer'
          >
            Telegram
            <Image src={TelegramWhite} alt='Icon' className={styles.icon} />
          </a>
        </div>
        <a
          href='https://api.whatsapp.com/'
          target='_blank'
          rel='noopener noreferrer'
          className={styles.item}
        >
          Оставить заяку на сайте
          <Image src={Messenger} alt='Icon' className={styles.icon} />
        </a>
      </div>
    </section>
  );
};
