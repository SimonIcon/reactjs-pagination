import axios from 'axios'
import { useState, useEffect } from 'react'
const [data, setData] = useState([])
useEffect(() => {
    axios.get("https://jsonplaceholder.typicode.com/comments").then((req, res) => {
        console.log("we got the data")
    }).then((err) => {
        console.log(`we got the problem ${err}`)
    })
}, [])