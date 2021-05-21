import React, { Component } from 'react';

class Title extends Component {
    render() {
        return (
            <div className='titleContainer'>
                {/* <img src='./Images/sparkles.png' />
                <img src='.Images/telescope.png'/>
                <img src='Images/telescope.png'/>
                <img src='telescope.png'/> */}
                <img className="titleImageSmall" src='https://emojipedia-us.s3.dualstack.us-west-1.amazonaws.com/thumbs/160/apple/279/sparkles_2728.png' />
                <img className="titleImageLarge" src='https://emojipedia-us.s3.dualstack.us-west-1.amazonaws.com/thumbs/160/apple/279/telescope_1f52d.png' />
               
                <text className='mainPageHeading'>Explore the Stars</text>
               
            </div>
        );
    }
}

export default Title;