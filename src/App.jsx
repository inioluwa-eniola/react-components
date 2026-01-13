import React from "react"
import Badge from "./Badge"
import Banner from "./Banner"
import "./index.css"

export default function App () {
    return (
        <>
            <section className="badges">
                <h1 className="badges-heading">Badges</h1>
                <section className="rectangular-badges">
                    <Badge variant="gray" shape="rectangle"/> 
                    <Badge variant="red" shape="rectangle"/> 
                    <Badge variant="yellow" shape="rectangle"/> 
                    <Badge variant="green" shape="rectangle"/> 
                    <Badge variant="blue" shape="rectangle"/>
                    <Badge variant="indigo" shape="rectangle"/> 
                    <Badge variant="purple" shape="rectangle"/> 
                    <Badge variant="pink" shape="rectangle"/> 
                </section>
                
                <section className="pill-badges">
                    <Badge variant="gray" shape="pill"/> 
                    <Badge variant="red" shape="pill"/> 
                    <Badge variant="yellow" shape="pill"/> 
                    <Badge variant="green" shape="pill"/> 
                    <Badge variant="blue" shape="pill"/>
                    <Badge variant="indigo" shape="pill"/> 
                    <Badge variant="purple" shape="pill"/> 
                    <Badge variant="pink" shape="pill"/> 
                </section>
            </section>

            <section className="banners">
                <h1 className="banners-heading">Banners</h1>
                <section className="single-line">
                    <Banner variant="success" style="single-line"/>
                    <Banner variant="warning" style="single-line"/>
                    <Banner variant="error" style="single-line"/>
                    <Banner variant="neutral" style="single-line"/>
                </section>

                <section className="multi-line">
                    <Banner variant="success" style="multi-line"/>
                    <Banner variant="warning"style="multi-line"/>
                    <Banner variant="error" style="multi-line"/>
                    <Banner variant="neutral" style="multi-line"/>
                </section>
            </section>

            <section>
                

            </section>

        </>
    )
}