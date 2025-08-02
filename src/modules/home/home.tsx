import Header from "../../shared/widgets/header/header";
import Banner from "../features/banner";
import Branding from "../features/branding";
import Benefits from  "../features/benefits";
import FeatureHightlight from "../features/feature.hightlight"
import  Pricing from "../features/pricing"


const Home = () => {
    return(
        <div>
            <Header />
            <Banner />
            <Branding />
            <Benefits />
            <FeatureHightlight />
            <Pricing />
        </div>
    )
}


export default Home;
