import React from "react";

class Footer extends React.Component {
    constructor(props) {
        super(props);
    }
    render() {
        return (
            <div className="footer">
                {this.props.kaki()}
            </div>
        )
    }
}
export default Footer;