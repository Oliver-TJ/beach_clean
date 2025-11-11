import React from "react";
import "./home.css";
import GroupPhoto from "../assets/group_photo.jpg";
import backgroundImage from "../assets/bg_image.jpg";

const EventLink = ({ href, children }) => (
    <a
        href={href}
        target="_blank"
        rel="noopener noreferrer"
        className="font-bold text-accent underline transition-all duration-300 ease-in-out hover:rounded-md hover:bg-accent hover:p-1 hover:text-primary hover:no-underline"
    >
        {children}
    </a>
);

const events = [
    {
        title: "The Great Big Beach Clean",
        eventDate: new Date("2025-11-15T12:45:00"),
        displayDate: "12:45pm, Saturday 15th November, 2025",
        description: (
            <>
                Get ready for our biggest collaborative cleanup of the year! Join us for 'The Great Big Beach Clean' as we team up with an incredible group of societies to make a massive impact on our coastline.
                <br/><br/>
                We are proud to be collaborating with:
                <ul className="list-disc list-inside my-3 space-y-1 text-accent">
                    <li>Women in Ocean Science ambassadors</li>
                    <li>NCL Marine Society</li>
                    <li>NCL Cold Water Swimming Society</li>
                    <li>NCL Environment & Earth Society</li>
                    <li>NCL Surf Club</li>
                    <li>NCL Chemistry Society</li>
                    <li>NCL BioSoc</li>
                    <li>NCL Sub Aqua Society</li>
                </ul>
                We will be meeting at the <b>Dove Marine Laboratory at 12:45pm</b>. All equipment will be provided, so just bring your enthusiasm! From there, we will make our way along the beautiful coast to King Edwards Bay, cleaning as we go.
                <br/><br/>
                This is a fantastic opportunity to protect our marine environment, meet like-minded people from across the university, and make a real difference. We can't wait to see you there!
            </>
        )
    },
    {
        title: "Beach Clean Success!",
        eventDate: new Date("2025-02-22T13:00:00"),
        displayDate: "22nd February 2025",
        description: (
            <>
                We’re thrilled to share that our recent beach clean-up was a massive success!
                Together, 24 incredible volunteers removed <b>57.5kg of litter</b> from our beautiful coastline,
                stretching from Cullercoats to King Edwards Bay. <i>From plastic waste to dumped wiring,
                every piece collected helps protect marine life and keep our beaches pristine.</i>
                <br/>
                <br/>
                <b className="text-accent text-xl">🌟 A Heartfelt Thank You! 🌟</b><br/>
                To everyone who joined us—whether you’re a regular volunteer or first-timer—your energy and dedication
                made this event! Special thanks to <b><EventLink href="https://conferences.ncl.ac.uk/hopenotheat2025/home/">Hope not Heat</EventLink></b> and <b><EventLink href="https://www.sas.org.uk/">Surfers Against Sewage</EventLink></b> for their
                support, and to all who braved the February chill to make a difference.
                <br/>
                <br/>
                <div className="text-center">
                    <div className="relative inline-block flex-shrink-0">
                        <img src={GroupPhoto} alt={"22nd February Beach Clean crew"} className="h-auto w-full max-w-md rounded-2xl border-8 border-accent shadow-xl" />
                    </div>
                    <i className="mt-2 block text-sm text-accent">Huge thank you to everyone who came!!</i>
                </div>
                <br/>
                <i>With thanks,</i><br/><b>The Beach Cleaning Society</b><br/>
                <i>In partnership with Hope not Heat & Surfers Against Sewage</i>
            </>
        )
    },
    {
        title: "Hope not Heat Beach Clean",
        eventDate: new Date("2025-02-22T13:00:00"),
        displayDate: "1pm, 22nd February, 2025",
        description: (
            <>
                Join us for our biggest cleanup of the year! We'll tackle Cullercoats Beach, Long Sands,
                and King Edward's Bay in a single day. This special event partners with volunteers from
                the <EventLink href="https://conferences.ncl.ac.uk/hopenotheat2025/"> Hope Not Heat 2025 conference </EventLink> - hopefully making this our largest coastal cleanup yet! After the hard work, we'll head to
                a Tynemouth pub for well-earned refreshments and celebrations. Don't miss this
                record-breaking community effort!
                <br/>
                <br/>
                <i>Be sure to check out our <EventLink href="https://www.instagram.com/beachcleaningsociety__ncl">Instagram 📷</EventLink> to stay updated on this event.</i>
            </>
        )
    },
    {
        title: "New merchandise",
        eventDate: new Date("2025-03-01T23:59:59"),
        displayDate: "Due 1st March, 2025",
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
                <b className="text-xl"><EventLink href="https://docs.google.com/forms/d/e/1FAIpQLSeMUwVgvg3sGusqX0x9rnKJUWuWZcCSicGGX6aE-eUsBooSSQ/viewform">Get your merch here!</EventLink></b>
            </>
        )
    },
    {
        title: "Beach Cleaning Social",
        eventDate: new Date("2099-01-01T00:00:00"), // Far future date for TBD
        displayDate: "tbd",
        description: (
            <>
                We are currently looking at running another social! 🎉
                Help us choose the next adventure — whether it’s another chaotic round of Pub Golf,
                a laid-back Pub Quiz Night, or a sunset Beach Barbecue with music!
                Give us a message on Insta with some of your ideas, and stay tuned for a vote on our Instagram stories.
                <br/>
                <br/>
                <i>P.S. Bonus points for creative themes — think fun costumes or crazy pub routes!</i>
            </>
        )
    },
    {
        title: "Hope not Heat: Climate Comedy with Matt Winning",
        eventDate: new Date("2025-02-25T17:30:00"),
        displayDate: "5.30 pm, 25th February, 2025",
        description: (
            <>
                Stand-up comedy set by climate scientist Matt Winning, author of 'Hot Mess', part of the{' '}
                <EventLink href="https://conferences.ncl.ac.uk/hopenotheat2025/">Hope Not Heat 2025</EventLink> series. Curtis Auditorium, Newcastle University. Free registration required.
                <br/>
                <br/>
                <EventLink href="https://www.ncl.ac.uk/events/noticeboard/item/250225mattwinning.html">Book tickets (available from 18th Feb)</EventLink>
            </>
        )
    },
    {
        title: "Hope not Heat: Carbon Capture in Soils Talk",
        eventDate: new Date("2025-02-26T14:30:00"),
        displayDate: "2.30-3.30 pm, 26th February, 2025",
        description: (
            <>
                Explore how soil science could combat climate change with One Planet. Ages 16+.
                <br/>
                <i>Stage 2, Northumbria SU</i>
                <br/>
                <br/>
                <EventLink href="https://conferences.ncl.ac.uk/media/sites/conferencewebsites/hopenotheat2025/Marron.pdf">More about Marron talk</EventLink>
            </>
        )
    },
    {
        title: "Hope not Heat: Film Screening: '2040' Documentary",
        eventDate: new Date("2025-02-26T17:15:00"),
        displayDate: "5.15 pm, 26th February, 2025",
        description: (
            <>
                Join us for Damon Gameau's hopeful vision for sustainability. Ages 16+.
                <br/>
                <i>Stage 2, Northumbria SU</i>
                <br/>
                <br/>
                <EventLink href="https://mynsu.co.uk/events/id/1339-2040-film-screening">Reserve free ticket</EventLink>
            </>
        )
    },
    {
        title: "Hope not Heat: Campus Climate Action Day",
        eventDate: new Date("2025-02-26T14:00:00"),
        displayDate: "26th February, 2025",
        description: (
            <>
                University members-only events:
                <ul className="list-disc list-inside my-2">
                    <li>2.00-3.30pm: Model UN COP-style debate</li>
                    <li>3.30-4.15pm: Climate anxiety discussion</li>
                    <li>4.15-5.00pm: Plant-Based Universities Q&A</li>
                </ul>
                <i>Merz Court, Newcastle University</i>
                <br/>
                <EventLink href="https://conferences.ncl.ac.uk/hopenotheat2025/joinagroup/">See group details</EventLink>
            </>
        )
    }
];

const EventCard = ({ title, date, description, isPast }) => (
    <div className={`w-full max-w-4xl transition-all duration-500 ${isPast ? 'opacity-75' : ''}`}>
        <div className="rounded-2xl border border-accent/30 bg-primary/80 p-6 shadow-2xl backdrop-blur-sm sm:p-8">
            <h3 className="text-2xl font-bold text-accent">{title}</h3>
            <p className="mb-4 mt-1 text-base italic text-accent/80">{date}</p>
            <div className="text-base leading-relaxed text-white md:text-lg">
                {description}
            </div>
        </div>
    </div>
);

const SectionHeader = ({ children }) => (
    <h2 className="relative w-full text-center text-3xl font-bold uppercase tracking-wider text-accent after:absolute after:bottom-[-12px] after:left-1/2 after:h-1 after:w-1/3 after:-translate-x-1/2 after:bg-primary md:text-4xl">
        {children}
    </h2>
);

const EventsPage = () => {
    const now = new Date();
    const upcomingEvents = events
        .filter(event => event.eventDate >= now)
        .sort((a, b) => a.eventDate - b.eventDate);
    const pastEvents = events
        .filter(event => event.eventDate < now)
        .sort((a, b) => b.eventDate - a.eventDate);

    return (
        <div className="w-full">
            <div
                style={{ backgroundImage: `url(${backgroundImage})` }}
                className="fixed top-0 left-0 -z-10 h-screen w-screen bg-cover bg-center bg-fixed opacity-90 grayscale-[20%]"
            />

            <div className="relative mx-auto flex w-full max-w-7xl flex-col items-center justify-center border-x-2 border-accent bg-background/95 px-4 py-12 text-white shadow-2xl sm:px-6 md:border-x-4 md:py-16 lg:px-12 lg:py-24">
                <h1 className="relative mb-16 mt-4 text-center text-4xl font-bold uppercase tracking-wider text-accent after:absolute after:bottom-[-8px] after:left-1/2 after:h-1 after:w-2/3 after:-translate-x-1/2 after:bg-primary md:text-5xl">
                    What's On
                </h1>

                <div className="flex w-full flex-col items-center space-y-16">
                    <section className="flex w-full flex-col items-center space-y-12">
                        <SectionHeader>Upcoming Events</SectionHeader>
                        {upcomingEvents.length > 0 ? (
                            upcomingEvents.map((event, index) => (
                                <EventCard
                                    key={`upcoming-${index}`}
                                    title={event.title}
                                    date={event.displayDate}
                                    description={event.description}
                                    isPast={false}
                                />
                            ))
                        ) : (
                            <p className="pt-4 text-center text-lg text-accent">
                                No upcoming events scheduled. Check back soon!
                            </p>
                        )}
                    </section>

                    <section className="flex w-full flex-col items-center space-y-12">
                        <SectionHeader>Past Events</SectionHeader>
                        {pastEvents.map((event, index) => (
                            <EventCard
                                key={`past-${index}`}
                                title={event.title}
                                date={event.displayDate}
                                description={event.description}
                                isPast={true}
                            />
                        ))}
                    </section>
                </div>
            </div>
        </div>
    );
};

export default EventsPage;