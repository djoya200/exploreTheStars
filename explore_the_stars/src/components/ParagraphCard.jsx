import React, { Component } from 'react';

class ParagraphCard extends Component {
    render() {
        return (
            <div>
                <p className='paragraphText'>{this.props.description}</p>
            </div>
        );
    }
}

export default ParagraphCard;