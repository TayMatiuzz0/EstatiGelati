import Header from "../components/Header"
import Banner from "./components/Banner"
import NossosSabores from "./components/NossosSabores"
import Delivery from "./components/Delivery"
import NossoLocal from "./components/NossoLocal"
import FaixaCTA from "./components/FaixaCTA"
import Footer from "../components/Footer"
import Nav from "../components/Nav"

function Home(){
    return(
        <>
            {/* <Header/> */}
            <Nav/>
            <Banner/>
            <NossosSabores/>
            <Delivery/>
            <NossoLocal/>
            <FaixaCTA/>
            <Footer/>
        </>
    )
}
export default Home;