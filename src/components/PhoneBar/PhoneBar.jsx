import React, { useEffect, useState } from 'react';
import axios from 'axios';
import { BarChart, Bar, XAxis, YAxis } from 'recharts';

const PhoneBar = () => {
    const [phones, setPhones] = useState([]);
    useEffect(() => {
        // fetch('https://openapi.programming-hero.com/api/phones?search=iphone')
        // .then(res => res.json())
        // .then(data => console.log(data.data))
        axios.get('https://openapi.programming-hero.com/api/phones?search=iphone')
            .then(data => {
                const loadedData = data.data.data;
                console.log(loadedData)
                const phoneData = loadedData.map(phone => {
                    const parts = phone.slug.split('-');
                    const price = parseInt(parts[1]);
                    const phoneInfo = {
                        name: phone.phone_name,
                        price: price

                    }
                    return phoneInfo

                })
                console.log(phoneData)
                setPhones(phoneData)
            })

    }, [])
    return (
        <div>

        <BarChart width={960} height={400} data={phones}>
            <Bar dataKey="price" fill="#27E1C1" />
            <XAxis dataKey="name"/>
            <YAxis/>
            </BarChart>
        </div>
    );
};

export default PhoneBar;