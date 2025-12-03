import HCountrysTopLearning from "./sections/HCountrysTopLearning";
import HHero from "./sections/HHero";
import HLearningPlatform from "./sections/HLearningPlatform";
import HLimitlessEducationMaterial from "./sections/HLimitlessEducationMaterial";
import HOurOtherBranches from "./sections/HOurOtherBranches";
import HTestimonial from "./sections/HTestimonial";

const Home = () => {
  return (
    <div>
      <HHero />
      <HLimitlessEducationMaterial />
      <HCountrysTopLearning />
      <HLearningPlatform />
      <HTestimonial />
      <HOurOtherBranches />
    </div>
  );
};

export default Home;
