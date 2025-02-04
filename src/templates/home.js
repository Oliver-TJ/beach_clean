import React from "react";
import {
    TextContainer,
    BackgroundWrapper,
    IgContainer,
    HeaderBox,
    Section,
    TextDiv,
    CoverImg,
    FontStyle,
    AboutContainer,
    ContentSection,
    ResponsiveInstagramWrapper,
    JoinButtonWrapper,
    DescDivs
} from "../components/home";
import { JoinButton } from "../components/join_button";
import { InstagramEmbed } from "react-social-media-embed";
import RubbishCounter  from "../components/rubbish_counter"
import "./home.css";
import CoverImage from "../assets/cover_img.jpg"

// New styled component for content sections


const Home = () => {
    return (
        <div>
            <BackgroundWrapper />
            <TextContainer>
                <RubbishCounter/>

                <IgContainer>
                    <ContentSection>
                        <HeaderBox>
                            <h2>About Us</h2>
                        </HeaderBox>

                        <FontStyle/>
                        <DescDivs>
                            Welcome to the Beach Cleaning Society Website!
                            We are a passionate group of environmental activists dedicated to preserving
                            and protecting the beautiful Tyne and Wear coastline.
                        </DescDivs>

                        <DescDivs>
                            Our mission is to organise regular beach cleaning events to reduce waste and protect marine
                            ecosystems from harmful pollution. We aim to hold at least two beach cleaning
                            meetings each semester, and we always hope for sunny weather!
                        </DescDivs>

                        <DescDivs highlight>
                            Each location is
                            conveniently accessible by Metro, making it easy for everyone to participate.
                            Membership costs <strong>only £5</strong> - join us and help make a real difference!
                        </DescDivs>
                    </ContentSection>

                    <ResponsiveInstagramWrapper>
                        <InstagramEmbed
                            url="https://www.instagram.com/p/DEr90YfTyfe/"
                            width="100%"
                            style={{ maxWidth: '328px' }}
                        />
                    </ResponsiveInstagramWrapper>
                </IgContainer>

                <Section>
                    <TextDiv>
                        <CoverImg>
                            <img src={CoverImage} alt="Beach clean committee"/>
                        </CoverImg>
                        <AboutContainer>
                            <HeaderBox mobile>
                                <h2>Our Story</h2>
                            </HeaderBox>
                            <DescDivs>
                                It all began with a simple yet powerful idea: to protect the stunning
                                coastline of Tyne and Wear while creating pristine, enjoyable beaches
                                for both wildlife and people.
                            </DescDivs>
                            <DescDivs>
                                What started as a small initiative quickly grew into a vibrant university
                                society driven by shared passion for sustainability and community action.
                            </DescDivs>
                            <DescDivs highlight>
                                But we’re more than just beach cleans! Our society is all about fostering connections and having fun.
                                We host a variety of exciting socials, from the hilarity of Pub Golf to the cozy chaos of Pajama Bowling nights.
                                Whether you’re passionate about the environment or just looking to meet new friends, our society offers the
                                perfect mix of purpose and fun.
                            </DescDivs>
                            <JoinButtonWrapper>
                                <JoinButton/>
                            </JoinButtonWrapper>
                        </AboutContainer>
                    </TextDiv>
                </Section>
            </TextContainer>
        </div>
    )
}


export default Home;