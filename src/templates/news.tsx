import React, { useState, useEffect } from 'react';
import "./home.css";
import backgroundImage from "../assets/bg_image.jpg";

interface Article {
    id: string;
    webTitle: string;
    webUrl: string;
    webPublicationDate: string;
    sectionName: string;
}

const NewsPage = () => {
    const [articles, setArticles] = useState<Article[]>([]);
    const [isLoading, setIsLoading] = useState(true);
    const [error, setError] = useState<string | null>(null);

    useEffect(() => {
        const fetchNews = async () => {
            setIsLoading(true);
            try {
                const response = await fetch(
                    `https://content.guardianapis.com/search?q=ocean%20plastic&section=environment&order-by=newest&page-size=9&api-key=${process.env.REACT_APP_GUARDIAN_KEY}`
                );

                if (!response.ok) {
                    throw new Error('Failed to fetch news');
                }

                const data = await response.json();
                setArticles(data.response.results);
            } catch (err) {
                console.error("Error fetching news:", err);
                setError("Unable to load the latest news. Please try again later.");
            } finally {
                setIsLoading(false);
            }
        };

        fetchNews();
    }, []);

    return (
        <div className="w-full min-h-screen">
            <div
                style={{ backgroundImage: `url(${backgroundImage})` }}
                className="fixed top-0 left-0 -z-10 h-screen w-screen bg-cover bg-center bg-fixed opacity-90 grayscale-[20%]"
            />

            <div className="relative mx-auto flex w-full max-w-7xl flex-col items-center border-x-2 border-accent bg-background/95 px-4 py-12 text-white shadow-2xl sm:px-6 md:border-x-4 md:py-16 lg:px-12 lg:py-24">
                
                <h1 className="relative mb-12 mt-4 text-center text-4xl font-bold uppercase tracking-wider text-accent after:absolute after:bottom-[-8px] after:left-1/2 after:h-1 after:w-2/3 after:-translate-x-1/2 after:bg-primary md:text-5xl">
                    Ocean News
                </h1>

                <p className="mb-12 max-w-2xl text-center text-lg text-white/90">
                    Stay up to date with the latest environmental stories, ocean conservation efforts, and plastic pollution news from The Guardian.
                </p>

                {isLoading && (
                    <div className="flex h-64 items-center justify-center">
                        <div className="text-xl font-bold text-accent animate-pulse">Loading latest headlines...</div>
                    </div>
                )}

                {error && (
                    <div className="rounded-lg border border-red-500/50 bg-red-900/20 p-6 text-center text-red-200">
                        {error}
                    </div>
                )}

                {!isLoading && !error && (
                    <div className="grid w-full gap-6 sm:grid-cols-2 lg:grid-cols-3">
                        {articles.map((article) => (
                            <a
                                key={article.id}
                                href={article.webUrl}
                                target="_blank"
                                rel="noopener noreferrer"
                                className="group flex flex-col justify-between rounded-xl border border-accent/30 bg-primary/80 p-6 shadow-lg backdrop-blur-sm transition-all duration-300 hover:-translate-y-1 hover:border-accent hover:bg-primary hover:shadow-accent/20"
                            >
                                <div>
                                    <span className="mb-3 inline-block rounded-full bg-accent/10 px-3 py-1 text-xs font-bold uppercase tracking-wide text-accent">
                                        {article.sectionName}
                                    </span>
                                    <h3 className="mb-3 text-xl font-bold leading-tight text-white group-hover:text-accent">
                                        {article.webTitle}
                                    </h3>
                                </div>
                                <div className="mt-4 flex items-center justify-between border-t border-white/10 pt-4 text-sm text-gray-300">
                                    <span>{new Date(article.webPublicationDate).toLocaleDateString('en-GB')}</span>
                                    <span className="font-semibold text-accent group-hover:underline">Read more &rarr;</span>
                                </div>
                            </a>
                        ))}
                    </div>
                )}
                
                <div className="mt-12 text-center text-sm text-gray-400">
                    News provided by <a href="https://www.theguardian.com" target="_blank" rel="noreferrer" className="underline hover:text-accent">The Guardian Open Platform</a>
                </div>
            </div>
        </div>
    );
};

export default NewsPage;