import NeRud from '@/assets/images/nerud.png'
import Develop from '@/assets/images/develop.png'
import Utilization from '@/assets/images/utilization.png'
import Rent from '@/assets/images/rent.png'
import {TProductType} from "@/app/_components/Products/ProductCard/ProductCard.types";


export const products: TProductType[] = [
    {
        title: 'Нерудные материалы',
        image: <img {...NeRud} alt='Нерудные материалы'/>,
        url: '/materials'
    },
    {
        title: 'Вывоз и утилизация',
        image: <img {...Utilization} alt='Вывоз и утилизация'/>,
        url: '/export'
    },
    {
        title: 'Аренда спецтехники',
        image: <img {...Rent} alt='Аренда спецтехники'/>,
        url: '/rent'
    },
    {
        title: 'Строительные работы',
        image: <img {...Develop} alt='Строительные работы'/>,
        url: '/delivery'
    },
]