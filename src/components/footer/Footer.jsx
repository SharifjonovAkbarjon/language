import React from 'react';
import { useTranslation } from 'react-i18next';

const Footer = () => {
  const { t, i18n } = useTranslation();
  return (
    <footer className="bg-gray-100 py-8">
      <div className="container mx-auto px-4">
        <div className="flex flex-col lg:flex-row justify-between">
          <div className="mb-6 lg:mb-0">
            <h2 className="font-bold text-lg text-gray-800">Funiro.</h2>
            <p className="text-gray-600 w-[300px]">
            {t("footer.logos.first")}
            </p>
          </div>

          <div className="mb-6 lg:mb-0">
            <h4 className="font-semibold text-gray-800">{t("footer.links.link")}</h4>
            <ul>
              <li className="text-gray-600 hover:text-gray-800"><a href="#">{t("footer.links.home")}</a></li>
              <li className="text-gray-600 hover:text-gray-800"><a href="#">{t("footer.links.about")}</a></li>
              <li className="text-gray-600 hover:text-gray-800"><a href="#">{t("footer.links.shop")}</a></li>
              <li className="text-gray-600 hover:text-gray-800"><a href="#">{t("footer.links.contact")}</a></li>
            </ul>
          </div>

          <div className="mb-6 lg:mb-0">
            <h4 className="font-semibold text-gray-800">{t("footer.help.hep")}</h4>
            <ul>
              <li className="text-gray-600 hover:text-gray-800"><a href="#">{t("footer.help.payment")}</a></li>
              <li className="text-gray-600 hover:text-gray-800"><a href="#">{t("footer.help.return")}</a></li>
              <li className="text-gray-600 hover:text-gray-800"><a href="#">{t("footer.help.privacy")}</a></li>
            </ul>
          </div>

          <div>
            <h4 className="font-semibold text-gray-800">{t("footer.letter.news")}</h4>
            <form>
              <input
                type="email"
                placeholder={t("footer.letter.input")}
                className="border border-gray-400 p-2 rounded w-full lg:w-auto"
              />
              <button
                type="submit"
                className="bg-black text-white px-4 py-2 mt-2 rounded-lg w-full lg:w-auto">
                {t("footer.letter.bnt")}
              </button>
            </form>
          </div>
        </div>
        <div className="border-t border-gray-300 mt-8 pt-4">
          <p className="text-gray-600 text-sm text-center">  {t("footer.end.reserve")}</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
