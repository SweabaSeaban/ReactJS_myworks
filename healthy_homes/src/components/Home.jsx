import Navbar from "./Navbar";

const Home = () => {
    return ( 
        <div id="home" className="relative">
                <img src="3_1.png" alt="Home" className="absolute"/>
                <img src="2_1.png" alt="Home" className="absolute"/>
                <img src="1_1.png" alt="Home" className="absolute"/>
                <div className="relative flex flex-col items-center md:text-4xl pl-32 pt-20">We invest in talents, ideas and <br />build enduring homes with a <br />multigeneration outlook.</div>
        </div>
     );
}
 
export default Home;