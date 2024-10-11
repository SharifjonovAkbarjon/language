import React from 'react';
import { FaUser, FaSearch, FaHeart, FaShoppingCart } from 'react-icons/fa';
import { useTranslation } from 'react-i18next';
const Header = () => {
  const { t, i18n } = useTranslation();
  return (
    <header className=" py-4">
      <div className="container mx-auto flex justify-between items-center">
        <div className="text-2xl font-bold text-yellow-500">
          <span className="font-logo">Furniro</span>
        </div>


        <nav className="flex space-x-8 text-gray-700">
          <a href="#" className="hover:text-yellow-500">{t("collection.home")}</a>
          <a href="#" className="hover:text-yellow-500">{t("collection.shop")}</a>
          <a href="#" className="hover:text-yellow-500">{t("collection.about")}</a>
          <a href="#" className="hover:text-yellow-500">{t("collection.contact")}</a>
        </nav>

        <div className='flex gap-2 sticky' >
          <button className='bg-green-500 px-[20px] py-2 rounded-[12px]' onClick={() => i18n.changeLanguage("en")}>uz</button>
          <button className='bg-green-500 px-[20px] py-2 rounded-[12px]' onClick={() => i18n.changeLanguage("uz")}>en</button>
        </div>

        <div className="flex space-x-6 text-gray-700 text-xl">
          <a href="#" className="hover:text-yellow-500">
            <FaUser />
          </a>
          <a href="#" className="hover:text-yellow-500">
            <FaSearch />
          </a>
          <a href="#" className="hover:text-yellow-500">
            <FaHeart />
          </a>
          <a href="#" className="hover:text-yellow-500">
            <FaShoppingCart />
          </a>
        </div>
      </div>
    </header>
  );
};

export default Header;
