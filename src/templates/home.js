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
    DescDivs,
    EventLink
} from "../components/home";
import { JoinButton } from "../components/join_button";
import { InstagramEmbed } from "react-social-media-embed";
import RubbishCounter  from "../components/rubbish_counter"
import "./home.css";
import CoverImage from "../assets/cover_img.jpg"
import Diving from "../assets/diving.jpg";
import {EventCard} from "./whatsOn";

const events = [
    {
        title: "Our New Partners",
        date: "1st August 2025",
        description: (
            <>
                You’ve cleaned up the northeast coast – now it’s time to take your ocean impact global 🌊
                <br/>
                We’ve partnered with <b><EventLink
                    href="https://www.gvi.co.uk/"
                    target="_blank"
                    rel="noopener noreferrer"
                >
                    gvitravel
                </EventLink></b> to offer grants of up to £10,000 for Newcastle Beach Cleaning Society
                members to join marine conservation internships, apprenticeships, or research fellowships abroad.

                <br/>
                <br/>


                <div style={{ textAlign: "center" }}>
                    <CoverImg>
                        <img src={Diving} alt={"22nd February Beach Clean crew"} />
                    </CoverImg>
                    <i style={{ fontSize: "0.9rem", color: "#CBBD93"}}>GVI Travel offer environmental protection and community programs</i>
                </div>
                <br/>
                <i>With thanks,</i><br/><b>The Beach Cleaning Society</b><br/>
            </>
        )
    }
]


const Home = () => {
    return (
        <div>
            <BackgroundWrapper />
            <TextContainer>
                <RubbishCounter/>

                <div style={{ width: "100%" }}>
                    {events.map((event, index) => (
                        <EventCard
                            key={index}
                            title={event.title}
                            date={event.date}
                            description={event.description}
                        />
                    ))}
                </div>

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
                            url="https://www.instagram.com/beachcleaningsociety__ncl"
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