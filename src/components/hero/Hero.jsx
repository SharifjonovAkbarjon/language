import React from 'react';
import { useTranslation } from 'react-i18next';


const Hero = () => {
    const { t, i18n } = useTranslation();
    return (
        <section className="bg-gray-100 py-16 hero">
            <div className="container flex justify-end  ">
                <div className="bg-[rgb(255,243,227)] w-[643px] px-[40px] py-[62px]">
                    <p >{t("hero.head")}</p>
                    <h1 className="text-[52px] leading-[65px] font-bold text-[rgb(184,142,47)] mb-4">{t("hero.h2")}</h1>
                    <p className="text-lg text-gray-600 mb-6">{t("hero.lorem")}</p>
                    <a href="#shop" className="bg-yellow-500 text-white px-6 py-3 rounded-full text-lg font-semibold">{t("hero.shopnow")}</a>
                </div>
            </div>
        </section>
    );
};

export default Hero;
