import React from "react";

// <ToggleButton togggleText="ON"  />
// <ToggleButtonS count:10  />
export default class UrlInputCOMP extends React.Component {
  constructor(props) {
    super(props);
    let urlText = this.props.urlText;

    this.state = { urlLine: urlText, urlList: [] };
    this.state = {list: [2,3,1]};
  
    this.AddToList= this.AddToList.bind(this);
  }
  newline = () => { "newline" }
  // addToList = () => {
  //   let urlLinesArray = [...this.urlList]
  //   let values = "name=" + this.state.name + "," + "email=" + this.state.email;
  //       console.log(values);
  //       alert(values);
  //   urlLinesArray.push(this.newline());
  //   this.setState({ urlLine: "", urlList: urlLinesArray })
    
  // }
AddToList(){
  
  const newline = this.state.urlLine
  let newArray= [...this.state.urlList,newline]
 // this.setState({ list: [...this.state.list, newNum] });
  this.setState({ urlLine: "", urlList: [...this.state.urlList.concat([newline]) ] })
this.setState({list:[2,6,7,889]})
 const x = this.state.urlList[1] 
 
 alert(this.state.list);
}

  render() {
    //  let arr= [...this.urlList]
    let liststr = ""
    // for (let k=0; k < arr.length; k++ ){
    //    liststr= arr[k]+"_____"
    // }
   //  let arr2=["string1"]
  //   arr2.push(this.urlList[0])
    //CODE
    // let styleMode = this.getStyleByMode(this.state.toggleText);
    return (
      <>
      <h1>URL LIST</h1>
        <form>
          <label>Enter url {" "}
            <input
              type="text"
              value={this.state.urlLine}
              size={80}
              onChange={(e) => this.setState({ urlLine: e.target.value })}

            />
          </label>{" "}
          <button onClick={this.AddToList } > ADD </button>
        </form>
        <br />
         
        <h2>your list</h2>
        {/* <form onSubmit={this.handleAdd}>
          <label>
            enter url:
            <input type="text" onChange={this.handleChange} />
          </label>
          <input type="submit" value="Submit" />
        </form> */}






      </>
    );

  }
}

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