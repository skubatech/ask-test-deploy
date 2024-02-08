import NeRud from '@/assets/images/nerud.png'
import Develop from '@/assets/images/develop.png'
import Utilization from '@/assets/images/utilization.png'
import Rent from '@/assets/images/rent.png'
import {TProductType} from "@/app/_components/Products/ProductCard/ProductCard.types";
import Image from "next/image";

export const products: TProductType[] = [
    {
        title: 'Нерудные материалы',
        image: <Image {...NeRud} alt='Нерудные материалы'/>,
        url: '/materials'
    },
    {
        title: 'Вывоз и утилизация',
        image: <Image {...Utilization} alt='Вывоз и утилизация'/>,
        url: '/export'
    },
    {
        title: 'Аренда спецтехники',
        image: <Image {...Rent} alt='Аренда спецтехники'/>,
        url: '/rent'
    },
    {
        title: 'Строительные работы',
        image: <Image {...Develop} alt='Строительные работы'/>,
        url: '/delivery'
    },
]