export interface ImageBanner {
    [key: string]: string;
}

const images: ImageBanner = {
    375: '/images/mock/main-banner/banner-bg-375.webp',
    768: '/images/mock/main-banner/banner-bg-768.webp',
    1024: '/images/mock/main-banner/banner-bg-1024.webp',
    1440: '/images/mock/main-banner/banner-bg-1440.webp',
    1920: '/images/mock/main-banner/banner-bg-1920.webp',
}

export const BannerExample = () => {
    return (
        <picture>
            <source media='(max-width: 375px)' srcSet={images['375']}/>
            <source media={`(max-width: 768px)`} srcSet={images['768']}/>
            <source media={`(max-width: 1024px)`} srcSet={images['1024']}/>
            <source media={`(max-width: 1440px)`} srcSet={images['1440']}/>
            <source media={`(max-width: 1920px)`} srcSet={images['1920']}/>
            <img src={images['1920']} alt='alt' title='title'/>
        </picture>
    )
}