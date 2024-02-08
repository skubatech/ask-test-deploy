import styles from './ProductCard.module.scss'
import {FC, ReactNode} from "react";
import Link from "next/link";

type Props = {
    title: string;
    image: ReactNode,
    url: string;
}
export const ProductCard: FC<Props> = ({title, image, url}) => {
    return (
        <div className={styles.card}>
            <span>{image}</span>
            <span className={styles.title}>{title}</span>
            <Link href={url} className={styles.btn}>Заказать</Link>
        </div>
    )
}