import React, { useState, useEffect } from "react";
import { client, urlFor } from "../sanityClient";
import { PortableText } from "@portabletext/react";
import "./home.css";
import backgroundImage from "../assets/bg_image.jpg";

interface Event {
    _id: string;
    title: string;
    eventDate: string;
    displayDate: string;
    description: any[];
    mainImage?: {
        asset: {
            _ref: string;
        };
        alt: string;
    };
}

const EventLink = ({ href, children }: { href?: string; children: React.ReactNode }) => (
    <a
        href={href}
        target="_blank"
        rel="noopener noreferrer"
        className="font-bold text-accent underline transition-all duration-300 ease-in-out hover:rounded-md hover:bg-accent hover:p-1 hover:text-primary hover:no-underline"
    >
        {children}
    </a>
);

const ptComponents = {
    block: {
        // Target only the 'normal' style (paragraphs)
        normal: (props: any) => (
            <p className="mb-4 last:mb-0">{props.children}</p>
        ),
    },
    marks: {
        link: (props: any) => (
            <EventLink href={props?.value?.href}>{props.children}</EventLink>
        ),
        accent: (props: any) => (
            <span className="text-accent">{props.children}</span>
        ),
    },
    list: {
        bullet: (props: any) => (
            <ul className="list-disc list-inside space-y-2 py-2 pl-4">{props.children}</ul>
        ),
    },
    listItem: {
        bullet: (props: any) => <li>{props.children}</li>,
    },
};

const EventCard = ({ title, date, description, isPast, mainImage }: { title: string; date: string; description: any[]; isPast: boolean; mainImage?: Event['mainImage'] }) => (
    <div className={`w-full max-w-4xl transition-all duration-500 ${isPast ? 'opacity-75' : ''}`}>
        <div className="rounded-2xl border border-accent/30 bg-primary/80 p-6 shadow-2xl backdrop-blur-sm sm:p-8">
            {mainImage && (
                <img
                    src={urlFor(mainImage).width(800).url()}
                    alt={mainImage.alt}
                    className="mb-6 h-auto w-full rounded-lg object-cover shadow-lg"
                />
            )}
            <h3 className="text-2xl font-bold text-accent">{title}</h3>
            <p className="mb-4 mt-1 text-base italic text-accent/80">{date}</p>
            <div className="text-base leading-relaxed text-white md:text-lg">
                <PortableText value={description} components={ptComponents} />
            </div>
        </div>
    </div>
);

const SectionHeader = ({ children }: { children: React.ReactNode }) => (
    <h2 className="relative w-full text-center text-3xl font-bold uppercase tracking-wider text-accent after:absolute after:bottom-[-12px] after:left-1/2 after:h-1 after:w-1/3 after:-translate-x-1/2 after:bg-primary md:text-4xl">
        {children}
    </h2>
);

const EventsPage = () => {
    const [events, setEvents] = useState<Event[]>([]);
    const [isLoading, setIsLoading] = useState(true);

    useEffect(() => {
        const query = '*[_type == "event"]';
        setIsLoading(true);
        client.fetch(query)
            .then((data: Event[]) => {
                setEvents(data);
                setIsLoading(false);
            })
            .catch(console.error);
    }, []);

    const now = new Date();
    const upcomingEvents = events
        .filter(event => new Date(event.eventDate) >= now)
        .sort((a, b) => new Date(a.eventDate).getTime() - new Date(b.eventDate).getTime());
    const pastEvents = events
        .filter(event => new Date(event.eventDate) < now)
        .sort((a, b) => new Date(b.eventDate).getTime() - new Date(a.eventDate).getTime());

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

                {isLoading ? (
                    <p className="text-lg text-accent">Loading events...</p>
                ) : (
                    <div className="flex w-full flex-col items-center space-y-16">
                        <section className="flex w-full flex-col items-center space-y-12">
                            <SectionHeader>Upcoming Events</SectionHeader>
                            {upcomingEvents.length > 0 ? (
                                upcomingEvents.map((event) => (
                                    <EventCard
                                        key={event._id}
                                        title={event.title}
                                        date={event.displayDate}
                                        description={event.description}
                                        mainImage={event.mainImage}
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
                            {pastEvents.map((event) => (
                                <EventCard
                                    key={event._id}
                                    title={event.title}
                                    date={event.displayDate}
                                    description={event.description}
                                    mainImage={event.mainImage}
                                    isPast={true}
                                />
                            ))}
                        </section>
                    </div>
                )}
            </div>
        </div>
    );
};

export default EventsPage;