import React from "react";
import { useSelector } from "react-redux";
import SearchBar from "../SearchBar/SearchBar";
import './navbar.css'

export default function Navbar({ handleFilterGenre, handleFilterCreated, handleRating, handleSort, handleFilterPlatforms }) {
    const allGenre = useSelector(state => state.genres);
    const allPlatforms = useSelector(state => state.platforms);

    return (
        <div>
            <div className="navbar_container">
                <SearchBar />
            </div>
            <div>
                <select className="select" onChange={(e) => handleSort(e)}>
                    <option hidden value=''>Sort</option>
                    <option value='Asc'>A-Z</option>
                    <option value='Desc'>Z-A</option>
                </select>
                <select className="select" onChange={(e) => handleRating(e)}>
                    <option hidden value=''>Rating</option>
                    <option value="Top">Rating ⭸</option>
                    <option value="Low">Rating ⭷</option>
                </select>
                <select className="select" onChange={(e) => handleFilterCreated(e)}>
                    <option hidden value=''>Filter by</option>
                    <option value='All'>All</option>
                    <option value='Created'>Created</option>
                    <option value='Api'>Existent</option>
                </select>
                <select className="select" onChange={(e) => handleFilterGenre(e)}>
                    <option hidden value=''>Genres</option>
                    <option value='All'>All</option>
                    {allGenre.map((genre) => (
                        <option key={genre.name} value={genre.name}>
                            {genre.name}
                        </option>
                    ))}
                </select>
                <select className="select" onChange={(e) => handleFilterPlatforms(e)}>
                    <option hidden value=''>Platforms</option>
                    <option value='All'>All</option>
                    {allPlatforms.map((platform) => (
                        <option key={platform.name} value={platform.name}>
                            {platform.name}
                        </option>
                    ))}
                </select>
            </div>
        </div>
    )
}