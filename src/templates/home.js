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
import GroupPhoto from "../assets/group_photo.jpg"
import {EventCard} from "./whatsOn";

const events = [
    {
        title: "Beach Clean Success!",
        date: "22nd February 2025",
        description: (
            <>
                We’re thrilled to share that our recent beach clean-up was a massive success!
                Together, 24 incredible volunteers removed <b>57.5kg of litter</b> from our beautiful coastline,
                stretching from Cullercoats to King Edwards Bay. <i>From plastic waste to dumped wiring,
                every piece collected helps protect marine life and keep our beaches pristine.</i>
                <br/>
                <br/>
                <b style={{ color: "#CBBD93", fontSize: "1.5rem"}}>🌟 A Heartfelt Thank You! 🌟</b><br/>
                To everyone who joined us—whether you’re a regular volunteer or first-timer—your energy and dedication
                made this event! Special thanks to <b><EventLink
                    href="https://conferences.ncl.ac.uk/hopenotheat2025/home/"
                    target="_blank"
                    rel="noopener noreferrer"
                >
                    Hope not Heat
                </EventLink></b> and <b><EventLink
                    href="https://www.sas.org.uk/"
                    target="_blank"
                    rel="noopener noreferrer"
                >
                Surfers Against Sewage
                </EventLink></b> for their
                support, and to all who braved the February chill to make a difference.
                <br/>
                <br/>
                <b style={{ color: "#CBBD93", fontSize: "1.5rem"}}>
                    🌍 Join the Hope not Heat Events! 🌍
                </b>
                <br/>
                Our beach clean was part of the inspiring Hope not Heat initiative,
                which continues with fantastic climate-focused events this week (22nd to 26th February). Check out what’s coming up on their <b><EventLink
                    href="https://conferences.ncl.ac.uk/hopenotheat2025/programme/"
                    target="_blank"
                    rel="noopener noreferrer"
                >
                    webpage
                </EventLink></b> and support them by turning up!

                <br/>
                <br/>
                <br/>
                <div style={{ textAlign: "center" }}>
                    <CoverImg>
                        <img src={GroupPhoto} alt={"22nd February Beach Clean crew"} />
                    </CoverImg>
                    <i style={{ fontSize: "0.9rem", color: "#CBBD93"}}>Huge thank you to everyone who came!!</i>
                </div>
                <br/>
                <i>With thanks,</i><br/><b>The Beach Cleaning Society</b><br/>
                <i>In partnership with Hope not Heat & Surfers Against Sewage</i>
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