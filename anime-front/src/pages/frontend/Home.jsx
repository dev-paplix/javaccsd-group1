import React, { useState } from 'react';
//import './Home.css';

const animes = [
    { id: 1, name: 'Naruto', rating: 0, image: 'path/to/naruto.jpg' },
    { id: 2, name: 'One Piece', rating: 0, image: 'path/to/onepiece.jpg' },
    { id: 3, name: 'Attack on Titan', rating: 0, image: 'path/to/aot.jpg' },
    // Add more animes as needed
];

const Home = () => {
    const [animeList, setAnimeList] = useState(animes);

    const handleRating = (id, rating) => {
        const updatedAnimes = animeList.map(anime => 
            anime.id === id ? { ...anime, rating } : anime
        );
        setAnimeList(updatedAnimes);
    };

    return (
        <div className=' container ml-6'>
            <h1 >Anime List</h1>
            <div className="anime-list">
                {animeList.map(anime => (
                    <div key={anime.id} className="anime-item">
                        <h2>{anime.name}</h2>
                        <div className="rating">
                            <span>Rate: </span>
                            {[1, 2, 3, 4, 5].map(star => (
                                <button 
                                    key={star} 
                                    onClick={() => handleRating(anime.id, star)}
                                    className={anime.rating >= star ? 'rated' : ''}
                                >
                                    {star}
                                </button>
                            ))}
                        </div>
                    </div>
                ))}
            </div>
        </div>
    );
};

export default Home;