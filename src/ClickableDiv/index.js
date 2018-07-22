import React, { Component } from "react";


class ClickableDiv extends Component {

    shouldComponentUpdate(nextProps) {
        return nextProps.html !== this.getDOMNode().innerHTML;
    }

    componentDidUpdate() {
        if (this.props.html !== this.getDOMNode().innerHTML) {
            this.getDOMNode().innerHTML = this.props.html;
        }
    }

    emitChange(e) {
        var html = e.target.innerText;
        console.log(html);
    }

    render() {
        return (
            <div id="contenteditable"
                onBlur={this.emitChange}
                contentEditable
                dangerouslySetInnerHTML={{ __html: this.props.html }}></div>
        );
    }
}

export default ClickableDiv;