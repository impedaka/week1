import React, {useState, useEffect} from 'react'
import Foods from '../../foods'
import {Layout} from '../../../layout';
import { db } from '../../../../firebase'

//displays food data from db
const Regular = () => {
    const [popular, setPopular] = useState([])

    const getFoods = () => {
        db.collection('regular').onSnapshot((snapshot) => {
            let tempPopular = []
            tempPopular = snapshot.docs.map((doc) => (
                {
                    id: doc.id,
                    popular: doc.data()
                }
            ))
            setPopular(tempPopular);
        })
    }

    useEffect(() => {
        getFoods()
    }, [])

    return (
        <div>
            <h1 style={{padding: "40px 20px"}}>Regular roll</h1>
        <Layout>
            {
                popular.map((data) => (
            <Foods
                title={data.popular.title}
                price={data.popular.price.toFixed(2)}
                image={data.popular.image}
                id={data.id}
            />
                ))}
        </Layout>
        </div>
    )
}

export default Regular;