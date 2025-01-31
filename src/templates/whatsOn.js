// events.js
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
    EventDate
} from "../components/home";
import "./home.css";

const events = [
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
                    rel="noopenet noreferrer"
                >
                    Instagram 📷
                </EventLink> to stay updated on this event.</i>
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
    }
];

const EventCard = ({ title, date, description }) => (
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