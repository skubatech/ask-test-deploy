import { StaticImageData } from 'next/image';

import exportSnow from '@/assets/images/exportSnow.png';
import sandSupply from '@/assets/images/sandSupply.png';
import exportGround from '@/assets/images/exportGround.png';
import rusal from '@/assets/images/rusalLogo.png';
import itmo from '@/assets/images/itmoLogo.png';
import mvd from '@/assets/images/mvdLogo.png';
import almas from '@/assets/images/almasLogo.png';
import fosagro from '@/assets/images/fosagroLogo.png';
import lsr from '@/assets/images/lsrLogo.png';
import rr from '@/assets/images/rrLogo.png';

interface SliderItemsType {
  imgSrc: StaticImageData;
  title: string;
  text: string;
  path: string;
}

interface clientItemsType {
  imgSrc: StaticImageData;
  text: string;
}

export const bannerItems: SliderItemsType[] = [
    {
      imgSrc: exportSnow,
      title: 'Вывоз снега',
      text: 'от 300 руб/м',
      path: '/export'
    },
    {
      imgSrc: sandSupply,
      title: 'Поставка песка',
      text: 'от 600 руб/м',
      path: '/delivery'
    },
    {
      imgSrc: exportGround,
      title: 'Вывоз и утилизация грунта',
      text: 'от 300 руб/м',
      path: '/export'
    },
  ];

  export const clientItems: clientItemsType[] = [
    {
      imgSrc: rusal,
      text: 'АО «РУСАЛ»',
    },
    {
      imgSrc: itmo,
      text: 'АО «ИТМО ХАЙПАРК»',
    },
    {
      imgSrc: mvd,
      text: 'Главное управление МВД России по СПб и Лен. области',
    },
    {
      imgSrc: almas,
      text: 'КОНЦЕРН ВКО «АЛМАЗ-АНТЕЙ»',
    },
    {
      imgSrc: fosagro,
      text: 'АО «АПАТИТ» ФОСАРГО',
    },
    {
      imgSrc: lsr,
      text: 'ЛСР',
    },
    {
      imgSrc: rr,
      text: 'АО «МегаМейд»',
    },
  ];