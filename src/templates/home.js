import React from "react";
import {
    TextContainer,
    BackgroundWrapper,
    IgContainer,
    HeaderBox,
    Section,
    TextDiv,
    DescDiv,
    CoverImg,
    FontStyle,
    AboutContainer
} from "../components/home";
import { JoinButton } from "../components/join_button";
import { InstagramEmbed } from "react-social-media-embed";
import RubbishCounter  from "../components/rubbish_counter"
import "./home.css";
import CoverImage from "../assets/cover_img.jpg"


const Home = () => {
    return (
        <div>
            <BackgroundWrapper />
            <TextContainer>
                <RubbishCounter/>
                <br/>
                <IgContainer style={{ zIndex: '-2' }}>
                    <div style={{ padding: '2rem' }}>
                        <HeaderBox>
                            <h2>About Us</h2>
                        </HeaderBox>

                        <FontStyle/>
                        <p>
                            Welcome to the Beach Cleaning Society Website!
                            We are a passionate group of environmental activists dedicated to preserving
                            and protecting the beautiful Tyne and Wear coastline.
                        </p>
                        <p>
                            Our mission is to
                            organise regular beach cleaning events to reduce waste and protect marine
                            ecosystems from harmful pollution. We aim to hold at least two beach cleaning
                            meetings each semester, and we always hope for sunny weather!
                        </p>
                        <br/>
                        <p>
                            Each location is
                            conveniently accessible by Metro, making it easy for everyone to participate.
                            Plus, our society is incredibly affordable, with membership costing <b>only £5! </b>
                            Join us and help make a real difference to our coastal environment!
                        </p>
                        <p>
                            Click the button at the bottom of the page to become a member!
                        </p>
                    </div>
                    <div style={{ display: 'flex', justifyContent: 'center' }}>
                        <InstagramEmbed url="https://www.instagram.com/p/DEr90YfTyfe/" width={328}/>
                    </div>

                </IgContainer>

                <Section>
                    <TextDiv>
                        <CoverImg>
                            <img src={CoverImage}  alt="Beach clean committee"/>
                        </CoverImg>
                        <AboutContainer>
                            <HeaderBox>
                                <h2>Our Story</h2>
                            </HeaderBox>
                            <DescDiv>
                                <br/>
                                It all began with a simple yet powerful idea: to protect the stunning coastline of Tyne and Wear
                                while creating pristine, enjoyable beaches for both wildlife and people.
                                What started as a small initiative quickly grew into a vibrant university society,
                                driven by a shared passion for sustainability and community action.
                            </DescDiv>
                            <DescDiv>
                                But we’re more than just beach cleans! Our society is all about fostering connections and having fun.
                                We host a variety of exciting socials, from the hilarity of Pub Golf to the cozy chaos of Pajama Bowling nights.
                                Whether you’re passionate about the environment or just looking to meet new friends, our society offers the
                                perfect mix of purpose and fun.
                            </DescDiv>
                            <JoinButton/>
                        </AboutContainer>
                    </TextDiv>
                </Section>
            </TextContainer>
        </div>
    )
}

export default Home;