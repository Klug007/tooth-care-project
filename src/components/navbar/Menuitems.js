import React, { useState } from "react";
import { nav_data } from "../../static_data";

function Menuitems() {
    const [openCategory, setOpenCategory] = useState(null);

    const toggle = (categoryIndex) => {
        setOpenCategory((prevOpenCategory) =>
            prevOpenCategory === categoryIndex ? null : categoryIndex
        );
    };

    return (
        <div>
            {nav_data.map((category, index) => (
                <div className="menu-items" key={index}>
                    <h1 onClick={() => toggle(index)}>
                        {category.nav_name}
                    </h1>
                    <div
                        className={openCategory === index ? "open" : ""}
                        style={{
                            maxHeight: openCategory === index ? "100px" : "0",
                            opacity: openCategory === index ? 1 : 0,
                        }}
                    >
                        {category.nav_items.map((item, itemIndex) => (
                            <a href={item.nav_child_name} key={itemIndex} style={openCategory === index ? {display: "block" } : {display: 'none'}}>{item.nav_child_name}</a>
                        ))}
                    </div>
                </div>
            ))}
        </div>
    );
}

export default Menuitems;
