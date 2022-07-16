import React from "react";

//---Class Components---
export default class Car extends React.Component {
    constructor(props) {
        super(props);
        this.state = { brand: "Ford", model: "4fx", color: "black", year: 2021 };
    }

    chageColor = () => {
        // this.state.color = "RED"; //WILL NOT WORK;
        this.setState({ color: "red", year: this.state.year + 1 });
    }




    //ADD A BUTTON THAT CHANEGE the COLOR----
    render() {

        return (

            <div>
                <h2>{this.props.username}</h2>
                <h2>{this.state.color}</h2>
                <p>s
                    Brand: {this.state.brand}
                    <br />
                    Year: {this.state.year}
                </p>
                <button onClick={() => this.chageColor()}>change state</button>
            </div>);
    }



}
