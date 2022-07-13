import React from "react";

// <ToggleButton togggleText="ON"  />
// <ToggleButtonS count:10  />
export default class UrlInputCOMP extends React.Component {
    constructor(props) {
        super(props);
        let urlText = this.props.urlText;
        
        this.state = { urlLine: urlText, urlList:[] };

    }
 newline=()=>{"newline"}   
addToList= ()=>{let urlLinesArray= [...this.urlList]
    urlLinesArray.push(this.newline());
    this.setState({urlLine:"",urlList:urlLinesArray})}
    // toggle = (e) => {
    //     let newTextTogle = (this.state.toggleText == "OFF") ? "ON" : "OFF";
    //     this.setState({ toggleText: newTextTogle });
    // }

    // getStyleByMode(mode) {
    //     let styleMode = (mode === "OFF") ?
    //         { backgroundColor: "pink" }
    //         :
    //         { backgroundColor: "lightgreen", border: "1px solid grey" };
    //     return styleMode;
    // }

    render() {
       //  let arr= [...this.urlList]
      let liststr=""
        // for (let k=0; k < arr.length; k++ ){
        //    liststr= arr[k]+"_____"
        // }

        //CODE
       // let styleMode = this.getStyleByMode(this.state.toggleText);
        return (
            <>
            <h2>tst</h2>
            <p>{liststr}</p>

            <form>
      <label>Enter your name:
        <input
          type="text" 
          value={name}
          onChange={(e) => setName(e.target.value)}
        />
      </label>
    </form>

            <form onSubmit={this.handleAdd}>
        <label>
          enter url: 
          <input type="text" onChange={this.handleChange} />
        </label>
        <input type="submit" value="Submit" />
      </form>
            
            <label for="url">Enter url</label><br></br>
            
                <input type="text" id="url" value="" size="80"></input> <br></br>
            <button onClick={this.addToList} > ADD </button>

           
            
            </>
        );

    }
}