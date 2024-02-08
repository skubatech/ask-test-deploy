'use client';
import styles from './page.module.scss';

import './swipper-bullet.scss';
import 'swiper/css';
import 'swiper/css/autoplay';
import 'swiper/css/pagination';
import {AboutCompany} from './_components/aboutCompany';
import {Contacts} from './_components/contacts';
import {Group} from "@/app/_components/Group/Group";
import {Cases} from "@/app/_components/Cases/Cases";
import {Products} from "@/app/_components/Products/Products";
import {ClientsBanner} from "@/app/_components/ClientsBanner/ClientsBanner";
import {MainBanner} from "@/app/_components/MainBanner/MainBanner";
import {useEffect} from "react";

const Home = () => {

    useEffect(() => {
        if (window.location.hash) {
            const element = document.querySelector(window.location.hash);
            if (element) {
                element.scrollIntoView({behavior: 'smooth'});
            }
        }
    }, []);

    return (
        <main className={styles.main}>
            <MainBanner/>
            <Products/>
            <Group/>
            <AboutCompany/>
            <ClientsBanner/>
            <Cases/>
            <Contacts/>
        </main>
    );
};

export default Home;
