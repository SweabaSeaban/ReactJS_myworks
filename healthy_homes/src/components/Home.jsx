import Navbar from "./Navbar";

const Home = () => {
    return ( 
        <div id="home">
            <img src="3_1.png" alt="Home" className="absolute"/>
            <img src="2_1.png" alt="Home" className="absolute"/>
            <img src="1_1.png" alt="Home" className="absolute"/>
            <div className="flex flex-col items-center text-lg md:text-4xl absolute h-full w-full">
            We invest in talents, ideas and <br />
            build enduring homes with a <br />
            multigeneration outlook
            </div>
        </div>
     );
}
 
export default Home;