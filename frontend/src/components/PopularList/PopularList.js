import React, { useState } from "react";
import Post from "../Post";

function PopularList() {
    const [testData, setTestData] = useState([
        // Template
        // {
        //   subfeddit: '',
        //   poster: '',
        //   createdAt: '',
        //   title: '',
        //   body: '',
        // },
        {
            subfeddit: "jimmyjohnsfans",
            member: "TheSpicyItalian",
            createdAt: "02-02-2022",
            title: "Banana Peppers... Why?",
            body: "ipsum lorem yada yada",
            votes: 2,
        },
        {
            subfeddit: "gregorian",
            member: "confused",
            createdAt: "01-22-2021",
            title: "I don't get it",
            body: "Is this subfeddit about calendars, chants, or what?",
            votes: 22299,
        },
    ]);
    return (
        <div className="pop-list">
            {testData.map((post, index) => (
                <Post key={index} post={post} />
            ))}
        </div>
    );
}
export default PopularList;
