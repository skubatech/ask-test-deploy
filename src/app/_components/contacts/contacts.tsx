import styles from './contacts.module.scss';
import Image from 'next/image';

import Vk from '@/assets/icons/vk.svg?url';
import Telegram from '@/assets/icons/telegram.svg?url';
import Whatsapp from '@/assets/icons/wa.svg?url';
import Instagram from '@/assets/icons/instagram.svg?url';
import Phone from '@/assets/icons/whitePhone.svg?url';
import Messenger from '@/assets/icons/messenger.svg?url';
import WhatsAppWhite from '@/assets/icons/waWhite.svg?url';
import TelegramWhite from '@/assets/icons/telegramWhite.svg?url';

export const Contacts = () => {
  return (
    <section className={`${styles.contacts} container`} id='contacts'>
      <h2 className={styles.title}>Контакты</h2>
      <div className={styles.wrapper}>
        <div className={styles.content}>
          <span className={styles.link}>
            Санкт-Петербург, Пулковское шоссе 30/4, офис 101Д
          </span>
          <a href='tel:+79817272909' className={styles.link}>
            +7 (981) 727-29-09
          </a>
          <a href='mailto:zakaz@askspb.ru' className={styles.link}>
            zakaz@askspb.ru
          </a>
          <a href='mailto:inform@askspb.ru' className={styles.link}>
            inform@askspb.ru
          </a>
          <div className={styles.social}>
            <a
              href='https://telegram.org/'
              target='_blank'
              rel='noopener noreferrer'
              className={styles.link}
            >
              < Image src={Telegram} alt='Icon' className={styles.icon} />
            </a>
            <a
              href='https://web.whatsapp.com/'
              target='_blank'
              rel='noopener noreferrer'
              className={styles.link}
            >
              <Image src={Whatsapp} alt='Icon' className={styles.icon} />
            </a>
            <a
              href='https://vk.com/'
              target='_blank'
              rel='noopener noreferrer'
              className={styles.link}
            >
              <Image src={Vk} alt='Icon' className={styles.icon} />
            </a>
            <a
              href='https://instagram.com/'
              target='_blank'
              rel='noopener noreferrer'
              className={styles.link}
            >
              <Image src={Instagram} alt='Icon' className={styles.icon}/>
            </a>
          </div>
        </div>
        <div className={styles.card}>
          <span className={styles.title}>Закажите удобным для Вас способом</span>
          <div className={styles.links}>
            <a className={styles.item} href='tel:+79817272909'>
              <span className={styles.text}>Позвонить</span>
              <Image src={Phone} alt='Icon' className={styles.icon} />
            </a>
            <div className={styles.itemWrap}>
              <a
                className={`${styles.item} ${styles.itemRow}`}
                href='https://web.whatsapp.com/'
                target='_blank'
                rel='noopener noreferrer'
              >
                <span className={styles.text}>WhatsApp</span>
                <Image src={WhatsAppWhite} alt='Icon' className={styles.icon} />
              </a>
              <a
                className={`${styles.item} ${styles.itemRow}`}
                href='https://telegram.org/'
                target='_blank'
                rel='noopener noreferrer'
              >
                <span className={styles.text}>Telegram</span>
                <Image src={TelegramWhite} alt='Icon' className={styles.icon} />
              </a>
            </div>
            <a
              className={styles.item}
              href='https://api.whatsapp.com/'
              target='_blank'
              rel='noopener noreferrer'
            >
              <span className={styles.text}>Оставить заяку на сайте</span>
              <Image src={Messenger} alt='Icon' className={styles.icon} />
            </a>
          </div>
        </div>
      </div>
    </section>
  );
};
