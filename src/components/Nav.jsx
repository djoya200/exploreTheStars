import React from 'react';
import { Link } from "react-router-dom"

function Nav() {

    return (
        <div>
            <nav>
                <ul className="navStyle">
                    <Link to="/home">
                        <li>Home</li>
                    </Link>

                    <Link to="/about">
                        <li>About</li>
                    </Link>

                    <Link to="astronomyPickOfTheDay">
                        <li>Astronomy Pic Of The Day</li>
                    </Link>

                    <Link to="nasaImgAndVideo">
                        <li>NASA Image And Video Library</li>
                    </Link>

                    <Link to="marsRoverPhotos">
                    <li>Mars Rover Photos</li>
                    </Link>

                </ul>
            </nav>
        </div>
    );
}

export default Nav;