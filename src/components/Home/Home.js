import React, {useEffect} from "react";
import Hero from "./Hero";
import Achievements from "./Achievements";
import Services from "./Services";
import Features from "./Features";
import Performance from "./Performance";
import Buying from "./Buying";

const HomePage = props => {
    useEffect(() => {
        document.body.classList.toggle("landing-page");

        return () => {
            document.body.classList.toggle("landing-page");
        }
    }, []);

    return (
        <>
            <div className="wrapper">
                <div className="page-header">
                    <img
                        alt="..."
                        className="path"
                        src={require("../../assets/img/blob.png")}
                    />
                    <img
                        alt="..."
                        className="path2"
                        src={require("../../assets/img/path2.png")}
                    />
                    <img
                        alt="..."
                        className="shapes triangle"
                        src={require("../../assets/img/triunghiuri.png")}
                    />
                    <img
                        alt="..."
                        className="shapes wave"
                        src={require("../../assets/img/waves.png")}
                    />
                    <img
                        alt="..."
                        className="shapes squares"
                        src={require("../../assets/img/patrat.png")}
                    />
                    <img
                        alt="..."
                        className="shapes circle"
                        src={require("../../assets/img/cercuri.png")}
                    />
                    <Hero/>
                </div>
                <Achievements/>
                <Services/>
                {/*<Features/>*/}
                {/*<Performance/>*/}
                <Buying/>
            </div>
        </>
    );
};

export default HomePage;
