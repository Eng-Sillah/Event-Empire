import React from "react";
import './Categories.css';

function Categories() {

    return (
        <div className="categories-section" >
            <div className="area">
                <h3>Pupular</h3>
                <select>
                    <option value="Western Area">Western Area</option>
                    <option>Central Area</option>
                    <option>Easter Area</option>
                    <option>Proviences</option>
                </select>
            </div>
            <div className="sections">
                <ul>
                    <li>All</li>
                    <li>For You</li>
                    <li>Online</li>
                    <li>Today</li>
                    <li>This Weekend</li>
                    <li>Free</li>
                    <li>Music</li>
                    <li>Food & Drink</li>
                    <li>Charity & Causes</li>
                </ul>
                <hr />
            <div>
                <h2>Check out our trending categories</h2>
                <div className="trending-categories">
                    <div>Music</div>
                    <div>Performing & Visual Arts</div>
                    <div>Holiday</div>
                    <div>Health</div>
                    <div>Hobbies</div>
                    <div>Business</div>
                    <div>Food & drink</div>
                    <div>Sports & Fittness</div>

                </div>
            </div>
            </div>
        </div>
    )
}

export default Categories;