import React from "react";
import {
    TextContainer,
    BackgroundWrapper,
    FontStyle,
    EventLink,
    PageHeader,
    EventCardContainer,
    EventHeader,
    EventDescription,
    EventDate, CoverImg
} from "../components/home";
import "./home.css";
import GroupPhoto from "../assets/group_photo.jpg";

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
    },
    {
        title: "Hope not Heat Beach Clean",
        date: "1pm, 22nd February, 2025",
        description: (
            <>
                Join us for our biggest cleanup of the year! We'll tackle Cullercoats Beach, Long Sands,
                and King Edward's Bay in a single day. This special event partners with volunteers from
                the <EventLink
                    href="https://conferences.ncl.ac.uk/hopenotheat2025/"
                    target="_blank"
                    rel="noopener noreferrer"
                > Hope Not Heat 2025 conference </EventLink> - hopefully making this our largest coastal cleanup yet! After the hard work, we'll head to
                a Tynemouth pub for well-earned refreshments and celebrations. Don't miss this
                record-breaking community effort!
                <br/>
                <br/>

                <i style={{ fontSize: '1rem' }}>Be sure to check out our <EventLink
                    href="https://www.instagram.com/beachcleaningsociety__ncl"
                    target="_blank"
                    rel="noopener noreferrer"
                >
                    Instagram 📷
                </EventLink> to stay updated on this event.</i>
            </>
        )
    },
    {
        title: "New merchandise",
        date: "Due 1st March, 2025",
        description: (
            <>
                <b>Our NUBCS official merchandise is now live! 🎉</b> Show your pride with our new quarter-zips and trackies,
                available exclusively for Beach Clean Society members. <br/>
                Applications close March 1,
                2025 — don’t miss your chance to grab these limited-edition items! Check our
                WhatsApp and socials for sizing, pricing, and order details. Join the squad, rep your society,
                and help us keep our beaches clean! 🌊✨

                <br/>
                <br/>

                <b style={{ fontSize: "1.5rem" }}>  <EventLink
                    href="https://docs.google.com/forms/d/e/1FAIpQLSeMUwVgvg3sGusqX0x9rnKJUWuWZcCSicGGX6aE-eUsBooSSQ/viewform"
                    target="_blank"
                    rel="noopener noreferrer"
                >
                    Get your merch here!
                </EventLink>
                </b>
            </>
        )
    },
    {
        title: "Beach Cleaning Social",
        date: "tbd",
        description: (
            <>
                We are currently looking at running another social! 🎉
                Help us choose the next adventure — whether it’s another chaotic round of Pub Golf,
                a laid-back Pub Quiz Night, or a sunset Beach Barbecue with music!
                Give us a message on Insta with some of your ideas, and stay tuned for a vote on our Instagram stories.

                <br/>
                <br/>

                <i style={{ fontSize: '1rem' }}>P.S. Bonus points for creative themes — think fun costumes or crazy pub routes!</i>
            </>
        )
    },
    {
        title: "Hope not Heat: Climate Comedy with Matt Winning",
        date: "5.30 pm, 25th February, 2025",
        description: (
            <>
                Stand-up comedy set by climate scientist Matt Winning, author of 'Hot Mess', part of the{' '}
                <EventLink
                    href="https://conferences.ncl.ac.uk/hopenotheat2025/"
                    target="_blank"
                    rel="noopener noreferrer"
                >
                    Hope Not Heat 2025
                </EventLink> series. Curtis Auditorium, Newcastle University. Free registration required.
                <br/>
                <br/>
                <EventLink
                    href="https://www.ncl.ac.uk/events/noticeboard/item/250225mattwinning.html"
                    target="_blank"
                    rel="noopener noreferrer"
                >
                    Book tickets (available from 18th Feb)
                </EventLink>
            </>
        )
    },
    {
        title: "Hope not Heat: Carbon Capture in Soils Talk",
        date: "2.30-3.30 pm, 26th February, 2025",
        description: (
            <>
                Explore how soil science could combat climate change with One Planet. Ages 16+.
                <br/>
                <i>Stage 2, Northumbria SU</i>
                <br/>
                <br/>
                <EventLink
                    href="https://conferences.ncl.ac.uk/media/sites/conferencewebsites/hopenotheat2025/Marron.pdf"
                    target="_blank"
                    rel="noopener noreferrer"
                >
                    More about Marron talk
                </EventLink>
            </>
        )
    },
    {
        title: "Hope not Heat: Film Screening: '2040' Documentary",
        date: "5.15 pm, 26th February, 2025",
        description: (
            <>
                Join us for Damon Gameau's hopeful vision for sustainability. Ages 16+.
                <br/>
                <i>Stage 2, Northumbria SU</i>
                <br/>
                <br/>
                <EventLink
                    href="https://mynsu.co.uk/events/id/1339-2040-film-screening"
                    target="_blank"
                    rel="noopener noreferrer"
                >
                    Reserve free ticket
                </EventLink>
            </>
        )
    },
    {
        title: "Hope not Heat: Campus Climate Action Day",
        date: "26th February, 2025",
        description: (
            <>
                University members-only events:
                <ul>
                    <li>2.00-3.30pm: Model UN COP-style debate</li>
                    <li>3.30-4.15pm: Climate anxiety discussion</li>
                    <li>4.15-5.00pm: Plant-Based Universities Q&A</li>
                </ul>
                <i>Merz Court, Newcastle University</i>
                <br/>
                <EventLink
                    href="https://conferences.ncl.ac.uk/hopenotheat2025/joinagroup/"
                    target="_blank"
                    rel="noopener noreferrer"
                >
                    See group details
                </EventLink>
            </>
        )
    }
];

export const EventCard = ({ title, date, description }) => (
    <EventCardContainer>
        <EventHeader>
            <h3>{title}</h3>
        </EventHeader>
        <EventDate>{date}</EventDate>
        <EventDescription>
            {description}
        </EventDescription>
    </EventCardContainer>
);

const EventsPage = () => {
    return (
        <div>
            <BackgroundWrapper />
            <TextContainer>
                <FontStyle />
                <PageHeader>Upcoming Events</PageHeader>

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
            </TextContainer>
        </div>
    );
};

export default EventsPage;