import Header from "../../shared/widgets/header/header";
import Banner from "../elements/banner";
import Branding from "../elements/branding";
import Benefits from  "../elements/benefits";
import FeatureHightlight from "../elements/feature.hightlight"
import  Pricing from "../elements/pricing"
import Footer from "@/shared/widgets/footer/footer";


const Home = () => {
    return(
        <div>
            <Header />
            <Banner />
            <Branding />
            <Benefits />
            <FeatureHightlight />
            <Pricing />
            <Footer />
        </div>
    )
}


export default Home;
