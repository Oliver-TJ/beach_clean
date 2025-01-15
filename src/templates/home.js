import React from "react";
import { TextContainer, BackgroundWrapper } from "../components/home";

const Home = () => {
    return (
        <div>
            <BackgroundWrapper />
            <TextContainer>
                <h1>Welcome to the official webpage of the Newcastle Beach Clean Society</h1>
                <h2>About Us</h2>

                <p>
                    Welcome to the Beach Cleaning Society!
                    We are a passionate group of environmental activists dedicated to preserving
                    and protecting the beautiful Tyne and Wear coastline. Our mission is to
                    organise regular beach cleaning events to reduce waste and protect marine
                    ecosystems from harmful pollution. We aim to hold at least two beach cleaning
                    meetings each semester, and we always hope for sunny weather! Each location is
                    conveniently accessible by Metro, making it easy for everyone to participate.
                    Plus, our society is incredibly affordable, with membership costing only £5.
                    Join us and help make a real difference to our coastal environment!
                </p>
            </TextContainer>
        </div>
    )
}

export default Home;