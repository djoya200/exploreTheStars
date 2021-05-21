import React, { Component } from 'react';

class MarsRoverPhotos extends Component {
    constructor() {
        super()
        this.state = {
            input: ' ',
            dataFromMarsApiSearch: [],
        }
    }

    handleChange = (event) => {
        event.preventDefault();
        console.log(this.state.input)
        this.setState({
            input: event.target.value
        })

    }

    searchMarsPhotos = async (event) => {
        event.preventDefault();
        console.log("searching for images")
        const query = this.state.input
        // console.log(query)
        const url = `https://api.nasa.gov/mars-photos/api/v1/rovers/curiosity/photos?earth_date=${query}&api_key=cHaweQh0OWsH1EGrzUVF0WZF8mbvnMfKihVc7FBS`

        try {
            const response = await fetch(url);
            const data = await response.json();
            console.log(data.photos)
            this.setState({
                dataFromMarsApiSearch: data.photos
            })
        }
        catch (err) {
            console.log(err)
            console.log("There was an error")
        }
    }


    render() {
        return (
            <div>
                <h1>Mars Rover Photos</h1>
                <form action=" " className="form" onSubmit={this.searchMarsPhotos}>
                    <label htmlFor="query" className='label'>Search by Earth date</label>
                    <input type="text" name="input" className="input" placeholder='YYYY-MM-DD' onChange={this.handleChange} />
                    <button type="submit" className="button">Search</button>
                </form>
                <text className="textStyleForAllPages">From 2013 to Now!</text>
                <div className="bigMarsCardContainer">
                    {this.state.dataFromMarsApiSearch.map((itemInTheMarsArray, index) => 
            //   console.log(itemInTheMarsArray)
                        itemInTheMarsArray.length < 50
                            ? <img src={itemInTheMarsArray.img_src} alt="" />
                            :
                                index < 50
                                    ? <img src={itemInTheMarsArray.img_src} alt="" />
                                    : null
                    
                        )}
                </div>
            </div>
        );
    }
}

export default MarsRoverPhotos;