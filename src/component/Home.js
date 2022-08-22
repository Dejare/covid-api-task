import React, { useEffect } from 'react'
import { useDispatch } from 'react-redux'
import { fetchData } from '../redux/mainSlice'
const Home = () => {
    const dispatch = useDispatch()
    useEffect(() => {
        dispatch(fetchData())
        console.log(fetchData())
    }, [dispatch])
    return (
        <div><h1 className='mt-10 font-bold ml-10 text-3xl'>Covid in Nigeria..</h1></div>
    )
}

export default Home