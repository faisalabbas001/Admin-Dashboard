"use client";
import React, { useEffect, useState } from 'react';

const Form = () => {
    const [products, setProducts] = useState([]);

    useEffect(() => {
        const getData = async () => {
            const url = 'https://dummyjson.com/users';

            try {
                const res = await fetch(url);
                const result = await res.json();
                setProducts(result.users); // Correctly accessing the users array
            } catch (error) {
                console.error(error);
            }
        };

        getData();
    }, []);

    console.log("my api response is that here", products);

    return (
        <div style={{ overflowX: 'auto' }}>
            <table style={{ width: '100%', borderCollapse: 'collapse' }}>
                <thead>
                    <tr>
                        <th style={{ border: '1px solid black', padding: '8px' }}>ID</th>
                        <th style={{ border: '1px solid black', padding: '8px' }}>FirstName</th>
                        <th style={{ border: '1px solid black', padding: '8px' }}>LastName</th>
                        <th style={{ border: '1px solid black', padding: '8px' }}>MaidenName</th>
                        <th style={{ border: '1px solid black', padding: '8px' }}>Age</th>
                        <th style={{ border: '1px solid black', padding: '8px' }}>Gender</th>
                        <th style={{ border: '1px solid black', padding: '8px' }}>Email</th>
                        <th style={{ border: '1px solid black', padding: '8px' }}>Phone</th>
                        <th style={{ border: '1px solid black', padding: '8px' }}>Country</th>
                    </tr>
                </thead>
                <tbody>
                    {products.map(item => (
                        <tr key={item.id}>
                            <td style={{ border: '1px solid black', padding: '8px' }}>{item.id}</td>
                            <td style={{ border: '1px solid black', padding: '8px' }}>{item.firstName}</td>
                            <td style={{ border: '1px solid black', padding: '8px' }}>{item.lastName}</td>
                            <td style={{ border: '1px solid black', padding: '8px' }}>{item.maidenName}</td>
                            <td style={{ border: '1px solid black', padding: '8px' }}>{item.age}</td>
                            <td style={{ border: '1px solid black', padding: '8px' }}>{item.gender}</td>
                            <td style={{ border: '1px solid black', padding: '8px' }}>{item.email}</td>
                            <td style={{ border: '1px solid black', padding: '8px' }}>{item.phone}</td>
                            <td style={{ border: '1px solid black', padding: '8px' }}>{item.address?.country}</td> {/* If country is nested */}
                        </tr>
                    ))}
                </tbody>
            </table>
        </div>
    );
};

export default Form;
