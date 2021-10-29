import { Component } from "react";

class Button extends Component {
    render() {
        const { text, onClick, disabled } = this.props;

        return (
            <div className="d-grid gap-2 mt-3">
                <button type="button" className="btn btn-primary" onClick={onClick} disabled={disabled}>
                    {text}
                </button>
            </div>
        )
    }
}

export default Button;