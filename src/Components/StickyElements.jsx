import MessageIcon from "../assets/icons/Whatsaap Button.svg";
import WhatsappIcon from "../assets/icons/Message Button.svg";
import MembershipIcon from "../assets/icons/membership_icon.svg";
import NewServicesIcon from "../assets/icons/newservices_icon.svg";

const FloatingButton = ({ icon, alt, position }) => (
  <div className={`fixed bottom-36 ${position} p-3 cursor-pointer`}>
    <img src={icon} alt={alt} className="w-[80px] h-[80px]" />
  </div>
);

const StickyLabel = ({ icon, text, position, rounded, flip }) => (
    <div className={`fixed ${position} top-1/2 -translate-y-1/4 bg-primary text-[#212124] p-2 shadow-md text-[32px] font-bold 
     [writing-mode:vertical-rl] flex items-center justify-center gap-2 ${rounded}`}>
      <span className={`${flip ? "rotate-180" : ""} tracking-wide leading-none`}>{text}</span>
      <img src={icon} alt={text} className="w-[32px] h-[32px] " />
    </div>
  );
  
const StickyElements = () => {
  return (
    <>
      <StickyLabel icon={MembershipIcon} text="Membership" position="left-0" rounded="rounded-r-3xl" />
      <StickyLabel icon={NewServicesIcon} text="New Services" position="right-0" rounded="rounded-l-3xl" flip={true }  />
      <FloatingButton icon={WhatsappIcon} alt="WhatsApp Icon" position="right-36" />
      <FloatingButton icon={MessageIcon} alt="Message Icon" position="left-36" />
    </>
  );
};

export default StickyElements;
