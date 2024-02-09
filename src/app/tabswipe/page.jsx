"use client"
import React, { useState } from 'react'
import Tabs from 'rc-tabs';


const callback = (key) => {
    console.log(key);
};

const items = [
    {
        key: '1',
        label: 'Google',
        children: (
            <div className="text-xl">
                <p>Lorem Ipsum is simply dummy text of the printing and typesetting</p>
            </div>
        ),
    },
    {
        key: '2',
        label: <p>Amazon</p>,
        children:
            'Neque porro quisquam est qui dolorem ipsum quia dolor sit amet, consectetur, adipisci velit...',
        disabled: true,
    },
    {
        key: '3',
        label: <p>Twitter</p>,
        children: (
            <div>
                "There is no one who loves pain itself, who seeks after it and wants to have it, simply
                because it is pain..."
            </div>
        ),
    },
];


const TabSwiper = () => {
    const [items_data, setitem] = useState({
        activeItemIndex: 2,
        items: [
            { title: "Item 1" },
            { title: "Item 2" },
            { title: "Item 3" },
            { title: "Item 4" },
            { title: "Item 5" },
            { title: "Item 6" },
            { title: "Item 7" },
            { title: "Item 8" },
            { title: "Item 9" },
            { title: "Item 10" },
            { title: "Item 11" },
            { title: "Item 12" },
        ]
    })
    return (
        <Tabs
            tabPosition="bottom"
            items={items}
            defaultActiveKey="1"
            className="p-5 w-full h-full"
            onChange={callback}
            style={{ color: 'red' }}
        />
    );
}

export default TabSwiper