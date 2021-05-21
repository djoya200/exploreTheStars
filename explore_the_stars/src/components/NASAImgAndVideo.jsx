import React, { Component } from 'react';
import ParagraphCard from './ParagraphCard';

class NASAImgAndVideo extends Component {
    constructor() {
        super()
        this.state = {
            input: '',
            dataFromApiSearch: [],
            seeMore: false,
            seeMoreIndex: ''

        }
    }


    handleChange = (event) => {
        event.preventDefault();
        console.log(this.state.input)
        this.setState({
            input: event.target.value
        })

    }
    makeDescriptionChange = (passedIndex) => {
        //  this is a fx for button to allow user to see more information about the picture and a link to NASA web site
        // we are setting a key in state to make it show by a terinay and giving it an index so it only changes that one
        if(passedIndex === this.state.seeMoreIndex){
            this.setState({
                seeMore: false,
                seeMoreIndex: ''
            })
        } else { 
            this.setState({
                seeMore: true,
                seeMoreIndex: passedIndex
            })
        }
        
    }

    searchImagesAndVideos = async (event) => {
        event.preventDefault();
        // console.log("searching for images and videos")
        const query = this.state.input
        // console.log(query)
        const url = `https://images-api.nasa.gov/search?q=${query}`

        try {
            const response = await fetch(url);
            const data = await response.json();
            console.log(data)
            this.setState({
                dataFromApiSearch: data.collection.items
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
                <h1>Welcome To NASA's Image and Video Library</h1>
                <h3 className="textStyleForAllPages">Search For Images and Videos</h3>
                <form action=" " className="form" onSubmit={this.searchImagesAndVideos}>
                    <label htmlFor="query" className='label'>What do you want to learn about</label>
                    <input type="text" name="input" className="input" onChange={this.handleChange} />
                    <button type="submit" className="button">Search</button>
                </form>

<div>
    <text> Moon ⭐️  Stars ⭐️  Moon Landing ⭐️  Sun ⭐️  Mercury ⭐️  Venus ⭐️  Earth ⭐️  Mars ⭐️  Jupiter ⭐️  Saturn ⭐️  Uranus ⭐️  Neptune ⭐️  Pluto ⭐️  Sun ⭐️  Meteor </text>
</div>
                <div className="bigContainerForCards">
                    {/* We added all these nested terinaries because some of the items in the arryay do not have 
                    images to display and a terniry to show the description or not 
                    
                    added additional div and turinary to display button or not because some of the items in the array 
                    did not have more information*/}
                    {this.state.dataFromApiSearch.map((itemInTheList, index) =>
                        index < 50
                            ?
                            itemInTheList.links !== undefined
                                ? itemInTheList.links[0] !== undefined
                                    ? itemInTheList.links[0].href !== undefined
                                        ?
                                        <div className='cardDiv' key={index}>
                                            <img className='cardImg' src={itemInTheList.links[0].href} alt="" />
                                            <text> {itemInTheList.data[0].title} </text>
                                            {itemInTheList.data[0].title == itemInTheList.data[0].description
                                                ? null
                                                : <div>
                                                    <button className='seeMore' onClick={() => { this.makeDescriptionChange(index) }}>{this.state.seeMore ? this.state.seeMoreIndex === index ? 'Show Less' : 'Show More' : 'Show More'}</button>
                                                    {this.state.seeMore
                                                        ?
                                                        this.state.seeMoreIndex === index
                                                            ? <ParagraphCard description={itemInTheList.data[0].description} />
                                                            : null
                                                        : null}
                                                </div>
                                            }

                                        </div>
                                        : null
                                    : null
                                : null


                            : null
                    )}

                </div>
            </div>
        );
    }
}

export default NASAImgAndVideo;