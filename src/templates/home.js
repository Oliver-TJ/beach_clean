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
    EventLink,
    YouTubePlayerWrapper, // 1. Import the new wrapper
    StyledYouTube         // 2. Import the new styled component
} from "../components/home";
import { JoinButton } from "../components/join_button";
import { InstagramEmbed } from "react-social-media-embed";
import RubbishCounter  from "../components/rubbish_counter"
import "./home.css";
import CoverImage from "../assets/cover_img.jpg"
import {EventCard} from "./whatsOn";

const events = [
    {
        title: "Our New Partners",
        date: "10th November 2025",
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
                    <YouTubePlayerWrapper>
                        <StyledYouTube
                            videoId="n2q2ZGbZ7M0"
                            opts={{
                                height: '100%',
                                width: '100%',
                                playerVars: {
                                    autoplay: 1,
                                    loop: 1
                                }
                            }}
                        />
                    </YouTubePlayerWrapper>
                    <i style={{ fontSize: "0.9rem", color: "#CBBD93"}}>GVI Travel offer environmental protection and community programs</i>
                </div>
                <br/>
                <br/>
                We've teamed up with GVI to offer conservation opportunities to our members! 
                We want to share a bit more about who they are, what they do and why we've partnered with them 🌊
                <br/><br/>
                For over 25 years, GVI has been an award-winning leader in impactful field training, empowering a global
                 alumni network of over 40,000 people 🌎
                <br/><br/>
                They specialise in helping students gain the hands-on skills needed to build impact-driven careers and 
                land their dream role in conservation. You could live at one of GVI's remote research hubs and take part 
                in vital conservation activities every day, working alongside local partners on projects focused on sustainable 
                conservation and community development.
                <br/><br/>
                Their programs are highly flexible, and start at just £1645. With durations ranging from 2 to 24 weeks, 
                they're a perfect fit for a summer break, placement years, or post-graduation plans. Participants can join 
                GVI in incredible locations like South Africa, Seychelles, Costa Rica, Madagascar, Peru, and beyond!
                <br/><br/>
                As part of our partnership, they're offering our <i>NUBCS</i> members an exclusive grant of up to £10,000, 
                which could <i>cover up to 80% of your program fees</i> (covers accommodation, meals, and training from 2 - 36 weeks). 
                Use our unique grant code <b><i>NCS-BCSOC</i></b> to access the grant fund.
                <br/><br/>
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