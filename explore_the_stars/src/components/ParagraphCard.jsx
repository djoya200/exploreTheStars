import React, { Component } from 'react';

class ParagraphCard extends Component {
    render() {
        return (
            <div>
                <text>{this.props.description}</text>
            </div>
        );
    }
}

export default ParagraphCard;