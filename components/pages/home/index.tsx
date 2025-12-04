import HBrands from "./sections/HBrands";
import HCountrysTopLearning from "./sections/HCountrysTopLearning";
import HGoogleMap from "./sections/HGoogleMap";
import HHaveALookAtOurEvents from "./sections/HHaveALookAtOurEvents";
import HHero from "./sections/HHero";
import HLearningPlatform from "./sections/HLearningPlatform";
import HLimitlessEducationMaterial from "./sections/HLimitlessEducationMaterial";
import HOurOtherBranches from "./sections/HOurOtherBranches";
import HOurPartners from "./sections/HOurPartners";
import HTestimonial from "./sections/HTestimonial";

const Home = () => {
  return (
    <div>
      <HHero />
      <HLimitlessEducationMaterial />
      <HBrands />
      <HCountrysTopLearning />
      <HHaveALookAtOurEvents />
      <HLearningPlatform />
      <HTestimonial />
      <HOurPartners />
      <HGoogleMap />
      <HOurOtherBranches />
    </div>
  );
};

export default Home;
