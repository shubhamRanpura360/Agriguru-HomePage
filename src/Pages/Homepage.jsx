import React from "react";
import PriceUpdateTable from "../Components/PriceUpdateTabel";
import UpdatesSection from "../Components/UpdateSection";
import MarketedProducts from "../Components/MarkrtProducts";
import AgriguruVideo from "../Components/AgriguruVideo";
import AgriGuruUpdates from "../Components/Agri_Updates";
import InquiriesOverview from "../Components/InquirySection/InquiriesOverview";
import GallerySlider from "../Components/GallerySlider";
import PartnersSection from "../Components/PartnerSection";


const Home = () => {
  return (
    <div className="min-h-screen  bg-black ">
      <section>
        <PriceUpdateTable />
      </section>
      <section className="m-6">
        <UpdatesSection />       
      </section>
      <section className=" w-auto">
      < MarketedProducts/>
      </section>
      <section className="w-auto">
        <AgriguruVideo videoId="dtLIWS4HYQo" />
      </section>
      <section className="w-auto">
     < AgriGuruUpdates/>
      </section>
      <section className="w-auto">
     < InquiriesOverview/>
      </section>
      <section className="w-auto">
      <GallerySlider/>
      </section>
      <section className="w-auto">
      <PartnersSection/>
      </section>
    
    </div>
  );
};

export default Home;
 


