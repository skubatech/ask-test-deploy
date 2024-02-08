import exportSnow from "@/assets/images/exportSnow.png";
import sandSupply from "@/assets/images/sandSupply.png";
import exportGround from "@/assets/images/exportGround.png";
import {StaticImageData} from "next/image";

interface SliderItemsType {
    imgSrc: StaticImageData;
    title: string;
    text: string;
    path: string;
}

export const bannerItems: SliderItemsType[] = [
    {
        imgSrc: exportSnow,
        title: 'Вывоз снега',
        text: 'от 250 руб/м',
        path: '/export'
    },
    {
        imgSrc: sandSupply,
        title: 'Поставка песка',
        text: 'от 300 руб/м',
        path: '/delivery'
    },
    {
        imgSrc: exportGround,
        title: 'Вывоз и утилизация грунта',
        text: 'от 200 руб/м',
        path: '/export'
    },
];