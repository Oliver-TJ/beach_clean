import React, { useState, useEffect } from 'react';

const LocalNewsWidget = () => {
    const [articles, setArticles] = useState([]);
    const [isLoading, setIsLoading] = useState(true);

    useEffect(() => {
        const fetchLocalNews = async () => {
            try {
                const locations = '("North East England" OR Newcastle Upon Tyne OR Sunderland OR Durham OR Tynemouth OR "Whitley Bay" OR Cullercoats OR "North Shields" OR "South Shields" OR Northumberland OR "Tyne and Wear" OR "Lindisfarne" OR "England" OR "UK")';
                const topics = '(coast OR sea OR beach OR ocean OR pollution OR environment OR marine)';
                const exclusions = 'AND NOT (Australia OR NSW OR "New South Wales" OR "Florida")';
                const query = `${locations} AND ${topics} ${exclusions}`;
                const encodedQuery = encodeURIComponent(query);


                const response = await fetch(
                    `https://content.guardianapis.com/search?q=${encodedQuery}&tag=environment/environment&order-by=relevance&page-size=3&api-key=${process.env.REACT_APP_GUARDIAN_KEY}`
                );

                const data = await response.json();
                setArticles(data.response.results);
                setIsLoading(false);
            } catch (error) {
                console.error("Error fetching local news", error);
                setIsLoading(false);
            }
        };

        fetchLocalNews();
    }, []);

    if (isLoading) return <div className="text-center text-accent animate-pulse">Loading local updates...</div>;
    if (articles.length === 0) return null;

    return (
        <div className="grid gap-4 md:grid-cols-3">
            {articles.map(article => (
                <a
                    key={article.id}
                    href={article.webUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="group flex flex-col justify-between rounded-xl border border-accent/20 bg-black/20 p-4 transition-all hover:bg-black/40 hover:shadow-lg"
                >
                    <h4 className="mb-2 text-sm font-bold leading-snug text-white group-hover:text-accent">
                        {article.webTitle}
                    </h4>
                    <div className="mt-2 flex items-center justify-between text-xs text-gray-400">
                        <span>{new Date(article.webPublicationDate).toLocaleDateString('en-GB')}</span>
                        <span className="text-accent opacity-0 transition-opacity group-hover:opacity-100">Read &rarr;</span>
                    </div>
                </a>
            ))}
        </div>
    );
}

export default LocalNewsWidget;