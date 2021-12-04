import React from 'react'
import Layout from '../../components/Layout'
export default function Home() {
    return (
        <>
        <Layout>
        <div className="text-center" >
            <h2 className="jumbotron">Welcome to Admin Dashboard</h2>
            <p className="mx-auto" style={{width: "1000px"}}>It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout. The point of using Lorem Ipsum is that it has a more-or-less normal distribution of letters, as opposed to using 'Content here, content here', making it look like readable English.</p>
        </div>
        </Layout>
        </>
    )
}
