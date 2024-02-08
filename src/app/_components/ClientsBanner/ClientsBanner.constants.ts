import rusal from "@/assets/images/rusalLogo.png";
import itmo from "@/assets/images/itmoLogo.png";
import mvd from "@/assets/images/mvdLogo.png";
import almas from "@/assets/images/almasLogo.png";
import fosagro from "@/assets/images/fosagroLogo.png";
import lsr from "@/assets/images/lsrLogo.png";
import rr from "@/assets/images/rrLogo.png";
import {StaticImageData} from "next/image";

interface clientItemsType {
    imgSrc: StaticImageData;
    text: string;
}

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