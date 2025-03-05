import React from "react";
import Appstore from "../assets/icons/apple_logo.svg";
import AppleQR from "../assets/icons/apple_qr 1.svg";
import AgriguruLogo from "../assets/icons/agriguru-logo.svg";
import PlayStore from "../assets/icons/google_logo.svg";
import GoogleQR from "../assets/icons/google_qr 1.svg";
import Instagram from "../assets/icons/instagram.svg";
import Youtube from "../assets/icons/Youtube.svg";
import Linkedin from "../assets/icons/linkedin.svg";
import Facebook from "../assets/icons/fashbook.svg";
import UaeIcon from "../assets/icons/uae_flag.svg";
import IndiaIcon from "../assets/icons/Flag.svg";

const socialIcons = [
  { src: Instagram, alt: "Instagram" },
  { src: Youtube, alt: "YouTube" },
  { src: Linkedin, alt: "LinkedIn" },
  { src: Facebook, alt: "Facebook" },
];

const footerLinks = [
  {
    title: "ABOUT US",
    links: ["About Us", "Worldwide Network"],
    styles: "w-[210px] h-[106px]",
  },
  {
    title: "TRADE SERVICES",
    links: ["News & Stories", "Membership Plan"],
    styles: "w-[211px] h-[106px]",
  },
  {
    title: "VALUE SERVICES",
    links: [
      "Terms & Conditions",
      "Privacy Policy",
      "Cancellation & Refund Policy URL",
    ],
    styles: "w-[336px] h-[134px]",
  },
  {
    title: "CONTACT US",
    links: [
      { text: "+97 1543299131", icon: UaeIcon },
      { text: "+91 8980310100", icon: IndiaIcon },
      { text: "+91 9512640099", icon: IndiaIcon },
    ],

    styles: "w-[173px] h-[138px]",
  },
];

const Footer = () => {
  return (
    <footer className="bg-black text-secondary-200">
      <div className="text-center mx-auto max-w-[611px] mt-20">
        <p className="text-[24px] font-bold">Your App, Your Way</p>
        <h2 className="text-[32px] font-bold">
          Download AGRIGURU ONLINE Today!
        </h2>
      </div>
      <div className="flex justify-center items-center gap-[394px] my-8">
        <div className="flex flex-col items-center">
          <img
            src={Appstore}
            alt="Download on App Store"
            className="mb-2 pr-[90px]"
          />
          <img src={AppleQR} alt="QR Code" className="w-[210px] h-[210px]" />
        </div>
        <div className="flex flex-col items-center">
          <img
            src={AgriguruLogo}
            alt="AgriGuru Logo"
            className="w-[218px] h-[218px]"
          />
          <div className="flex gap-[25px] mt-6">
            {socialIcons.map((icon, index) => (
              <img
                key={index}
                src={icon.src}
                alt={icon.alt}
                className="w-6 h-6"
              />
            ))}
          </div>
        </div>
        <div className="flex flex-col items-center">
          <img
            src={PlayStore}
            alt="Get it on Google Play"
            className="mb-2 pl-[70px]"
          />
          <img src={GoogleQR} alt="QR Code" className="w-[210px] h-[210px]" />
        </div>
      </div>
      <div className="bg-[#212124] border-t border-[#504F4F] py-10">
        <div className="max-w-[1430px] w-full  mx-auto flex gap-[42px] text-[18px] font-medium text-secondary-100">
          {footerLinks.map((section, index) => (
            <div key={index} className={`${section.styles}`}>
              <h3 className="text-[#F1F5F9] text-[20px] font-bold mb-2">
                {section.title}
              </h3>
              {section.title === "CONTACT US"
                ? section.links.map((contact, idx) => (
                    <div key={idx} className="flex items-center gap-[8px]">
                      <img src={contact.icon} alt="Icon" className="w-5 h-5" />
                      <p className="cursor-pointer text-[18px] font-medium">{contact.text}</p>
                    </div>
                  ))
                : section.links.map((link, idx) => (
                    <p key={idx} className="cursor-pointer text-[18px]">
                      {link}
                    </p>
                  ))}
            </div>
          ))}
          <p className="cursor-pointer text-[18px] flex-row mt-9">
            inquiry@agriguruonline.com <br />
            <span className="text-[18px] mt-2 font-medium">Need Help?</span>
          </p>
        </div>
      </div>
      <p className="text-center text-[20px] font-medium text-secondary-200 py-4">
        Copyright © by Agriguru Online Trade Private Limited
      </p>
    </footer>
  );   
};

export default Footer;


