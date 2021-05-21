import React, { Component } from 'react';

class ParagraphCard extends Component {
    render() {
        return (
            <div>
                <text className='paragraphText'>{this.props.description}</text>
            </div>
        );
    }
}

export default ParagraphCard;