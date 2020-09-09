import React, { useState, useCallback, useEffect } from 'react';
const axios = require('axios');

export const Landing = ({  }) => {

    const[cont, setCont] = useState(0)


    const getNumbers = useCallback(() => {
        axios({
            method: 'get',
            url: `http://localhost:8080/users/number`
        })
            .then(res => res.data)
         
            .then((data, index) => {
                setCont(data[0].num);
            })
            .catch(err => console.error(err));
    }, [])


    useEffect(() => {
        getNumbers()
    }, [getNumbers])
console.log(cont)

    return (
        <>
        <button onClick={() => setCont(cont +1)}>aggiungi</button>
        <button onClick={() => setCont(cont -1)}>togli</button>
        <div><h3>{cont}</h3></div>
        </>
    )
}