import React, { Component } from 'react';

class AstronomyPicOfTheDay extends Component {
    constructor() {
        super()
        this.state = {
            title: " ",
            date: " ",
            picture: " ",
            explanation: " ",
        }
    }
    componentDidMount() {
        console.log("I mounted!!!")
        this.callPicOfTheDay()
    }
    callPicOfTheDay = async () => {

        console.log("pic of the day called ")
        const url = `https://api.nasa.gov/planetary/apod?api_key=cHaweQh0OWsH1EGrzUVF0WZF8mbvnMfKihVc7FBS`

        try {
            const response = await fetch(url);
            const data = await response.json();
            console.log(data)
            this.setState({
                title: data.title,
                date: data.date,
                picture: data.url,
                explanation: data.explanation
            })
        }
        catch (err) {
            console.log("There was an error")
        }
    }

    render() {
        return (
            <div>
                <h1>Astronomy Picture of the Day!</h1>
                <div className="bigPageContiner">

                    {/* explore_the_stars/src/images/tri.png */}
                    <text className="textStyleForAllPages">Title: {this.state.title}</text>
                    <text className="textStyleForAllPages">Date: {this.state.date}</text>
                    <div className="picContainer">
                        <img className="astronomyPicture" src={this.state.picture} alt="" />
                    </div>
                    <div className='astronomyPicContainer'>


                        <text className="textStyleForAllPages">About This Photo:{this.state.explanation}</text>
                    </div>
                </div>
            </div>
        );
    }
}

export default AstronomyPicOfTheDay;