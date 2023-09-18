import styles from "../style";
import { unsa } from "../assets";
import { footerLinks, socialMedia } from "../constants";
import "../css/footer.css";

const Footer = () => (
  <section className={`${styles.flexCenter} ${styles.paddingY} flex-col`}>
    {/*<div className={`flex ${styles.flexStart} flex-col md:flex-row mb-8 w-full justify-between`}>
      <div className={`sm:px-16 px-6 flex-[1] flex flex-col mr-10 unsa-container`}>
        <img
          src={unsa}
          alt="hoobank"
          className="w-[266px] h-[72.14px] object-contain img-unsa"
        />
        <p className={`${styles.paragraph} mt-4 max-w-[312px] txt-img-unsa`}>
          Universidad Nacional de
          <br /> San Agustin
        </p>
      </div>

      <div className={`sm:px-20 px-6 flex  footer-container md:flex-row md:justify-between`}>
        {footerLinks.map((footerlink) => (
          <div
            key={footerlink.title}
            className={`$sm:px-16 px-6 flex flex-col ss:my-0 my-4`}
          >
            <h4 className="font-poppins font-medium text-[18px] leading-[27px] text-white">
              {footerlink.title}
            </h4>
            <ul className="list-none mt-4">
              {footerlink.links.map((link, index) => (
                <li
                  key={link.name}
                  className={`font-poppins font-normal text-[16px] leading-[24px] text-dimWhite hover:text-secondary cursor-pointer ${
                    index !== footerlink.links.length - 1 ? "mb-4" : "mb-0"
                  }`}
                >
                  <a href={link.link} target="blank">
                    {link.name}
                  </a>
                </li>
              ))}
            </ul>
          </div>
        ))}
      </div>
                </div>*/}

    <div className={`${styles.paddingX} w-full flex justify-between items-center md:flex-row flex-col pt-6 border-t-[1px] border-t-[#3F3E45]`}>
      <p className="font-poppins font-normal text-center text-[18px] leading-[27px] text-white">
        Copyright Ⓒ 2023 School of Computer Science. All Rights Reserved.
      </p>

      <div className="flex flex-row md:mt-0 mt-6">
        {socialMedia.map((social, index) => (
          <img
            key={social.id}
            src={social.icon}
            alt={social.id}
            className={`w-[21px] h-[21px] object-contain cursor-pointer ${
              index !== socialMedia.length - 1 ? "mr-6" : "mr-0"
            }`}
            onClick={() => window.open(social.link)}
          />
        ))}
      </div>
    </div>
  </section>
);

export default Footer;
