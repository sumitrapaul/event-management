import Banner from "../../components/Banner/Banner";
import Goal from "../../components/Goal/Goal";
import Services from "../../components/Services/Services";
import Team from "../../components/team/Team";
const Home = () => {
  return (
    <div>
      <Banner></Banner>
      <div>
      <Services></Services>
      </div>
     <Team></Team>
     <Goal></Goal>
     </div>
  );
};

export default Home;
