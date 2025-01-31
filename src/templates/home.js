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
    FontStyle
} from "../components/home";
import { InstagramEmbed } from "react-social-media-embed";
import RubbishCounter  from "../components/rubbish_counter"
import "./home.css";
import CoverImage from "../assets/cover_img.jpg"

const JoinButton = () => {
    const handleClick = () => {
        window.location.href = 'https://nusu.co.uk/activities/view-society/550';
    }

    return (
        <button className="cta" onClick={handleClick} style={{ align: 'center'}}>
            <span className="span">JOIN NOW</span>
            <span className="second">
            <svg
                width="50px"
                height="20px"
                viewBox="0 0 66 43"
                version="1.1"
                xmlns="http://www.w3.org/2000/svg"
                xmlnsXlink="http://www.w3.org/1999/xlink"
            >
              <g
                  id="arrow"
                  stroke="none"
                  strokeWidth="1"
                  fill="none"
                  fillRule="evenodd"
              >
                <path
    className="one"
    d="M40.1543933,3.89485454 L43.9763149,0.139296592 C44.1708311,-0.0518420739 44.4826329,-0.0518571125 44.6771675,0.139262789 L65.6916134,20.7848311 C66.0855801,21.1718824 66.0911863,21.8050225 65.704135,22.1989893 C65.7000188,22.2031791 65.6958657,22.2073326 65.6916762,22.2114492 L44.677098,42.8607841 C44.4825957,43.0519059 44.1708242,43.0519358 43.9762853,42.8608513 L40.1545186,39.1069479 C39.9575152,38.9134427 39.9546793,38.5968729 40.1481845,38.3998695 C40.1502893,38.3977268 40.1524132,38.395603 40.1545562,38.3934985 L56.9937789,21.8567812 C57.1908028,21.6632968 57.193672,21.3467273 57.0001876,21.1497035 C56.9980647,21.1475418 56.9959223,21.1453995 56.9937605,21.1432767 L40.1545208,4.60825197 C39.9574869,4.41477773 39.9546013,4.09820839 40.1480756,3.90117456 C40.1501626,3.89904911 40.1522686,3.89694235 40.1543933,3.89485454 Z"
    fill="#FFFFFF"
    />
                <path
    className="two"
    d="M20.1543933,3.89485454 L23.9763149,0.139296592 C24.1708311,-0.0518420739 24.4826329,-0.0518571125 24.6771675,0.139262789 L45.6916134,20.7848311 C46.0855801,21.1718824 46.0911863,21.8050225 45.704135,22.1989893 C45.7000188,22.2031791 45.6958657,22.2073326 45.6916762,22.2114492 L24.677098,42.8607841 C24.4825957,43.0519059 24.1708242,43.0519358 23.9762853,42.8608513 L20.1545186,39.1069479 C19.9575152,38.9134427 19.9546793,38.5968729 20.1481845,38.3998695 C20.1502893,38.3977268 20.1524132,38.395603 20.1545562,38.3934985 L36.9937789,21.8567812 C37.1908028,21.6632968 37.193672,21.3467273 37.0001876,21.1497035 C36.9980647,21.1475418 36.9959223,21.1453995 36.9937605,21.1432767 L20.1545208,4.60825197 C19.9574869,4.41477773 19.9546013,4.09820839 20.1480756,3.90117456 C20.1501626,3.89904911 20.1522686,3.89694235 20.1543933,3.89485454 Z"
    fill="#FFFFFF"
    />
                <path
    className="three"
    d="M0.154393339,3.89485454 L3.97631488,0.139296592 C4.17083111,-0.0518420739 4.48263286,-0.0518571125 4.67716753,0.139262789 L25.6916134,20.7848311 C26.0855801,21.1718824 26.0911863,21.8050225 25.704135,22.1989893 C25.7000188,22.2031791 25.6958657,22.2073326 25.6916762,22.2114492 L4.67709797,42.8607841 C4.48259567,43.0519059 4.17082418,43.0519358 3.97628526,42.8608513 L0.154518591,39.1069479 C-0.0424848215,38.9134427 -0.0453206733,38.5968729 0.148184538,38.3998695 C0.150289256,38.3977268 0.152413239,38.395603 0.154556228,38.3934985 L16.9937789,21.8567812 C17.1908028,21.6632968 17.193672,21.3467273 17.0001876,21.1497035 C16.9980647,21.1475418 16.9959223,21.1453995 16.9937605,21.1432767 L0.15452076,4.60825197 C-0.0425130651,4.41477773 -0.0453986756,4.09820839 0.148075568,3.90117456 C0.150162624,3.89904911 0.152268631,3.89694235 0.154393339,3.89485454 Z"
    fill="#FFFFFF"
    />
              </g>
            </svg>
          </span>
        </button>
    )
}

const Home = () => {
    return (
        <div>
            <BackgroundWrapper />
            <TextContainer>
                <RubbishCounter/>
                <br/>
                <IgContainer>
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
                        <div>
                            <HeaderBox><b>Our Story</b></HeaderBox>
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
                        </div>
                    </TextDiv>
                </Section>
            </TextContainer>
        </div>
    )
}

export default Home;