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
        title: "Keep Jesmond Clean (non-society event)",
        date: "11am, 8th February, 2025",
        description: (
            <>
                Join the community-driven effort to maintain Jesmond's beauty! On 8/02/2025, starting at 11:00 am,
                volunteers will gather at Jesmond Library for a two-hour litter pick. All necessary
                equipment will be provided on a walk through Jesmond, collecting litter to keep our neighborhood pristine.
                This event is organized by <EventLink
                    href="https://www.facebook.com/KeepJesmondClean/"
                    target="_blank"
                    rel="noopener noreferrer"
                >Keep Jesmond Clean</EventLink>, a local action group dedicated to reducing waste
                and promoting recycling in partnership with residents, businesses, and institutions.

                <br/>
                <br/>

                <i style={{ fontSize: '1rem' }}>
                    For more information, visit <EventLink
                        href="https://jesmondlibrary.org/event/keep-jesmond-clean-litterpick/"
                        target="_blank"
                        rel="noopener noreferrer"
                    >Jesmond Library's event page</EventLink>.
                    Let's come together to make a tangible difference in our community!
                </i>
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