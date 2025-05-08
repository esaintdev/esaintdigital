import React, { useEffect, useState } from "react";
import Preloader from "../elements/Preloader";
import HelmetReact from "../elements/HelmetReact";
import HeaderFive from "../components/HeaderFive";
import HeroFive from "../components/HeroFive";
import ServiceFive from "../components/ServiceFive";
import ClientThree from "../components/ClientThree";
import AboutFive from "../components/AboutFive";
import TestimonialFour from "../components/TestimonialFour";
import PricingTwo from "../components/PricingTwo";
import CTAThree from "../components/CTAThree";
import TeamFour from "../components/TeamFour";
import FooterFive from "../components/FooterFive";



const HomeFive = () => {
  let [active, setActive] = useState(true);
  useEffect(() => {
    setTimeout(function () {
      setActive(false);
    }, 2000);
  }, []);
  return (
    <>
      {/* Preloader */}
      {active === true && <Preloader />}

      {/* Helmet */}
      <HelmetReact title={"Home"} />

      {/* HeaderFive */}
      <HeaderFive />

      {/* HeroFive */}
      <HeroFive />

      {/* ServiceFive */}
      <ServiceFive />

      {/* ClientThree */}
      <ClientThree />

      {/* AboutFive */}
      <AboutFive />

      {/* TestimonialFour */}
      {/* <TestimonialFour /> */}

      {/* PricingTwo */}
      <PricingTwo />

      {/* CTAThree */}
      <CTAThree />

      {/* TeamFour */}
      {/* <TeamFour /> */}

      {/* FaqThree */}
      {/* <FaqThree /> */}
    

      {/* FooterFive */}
      <FooterFive />





    </>
  );
};

export default HomeFive;
