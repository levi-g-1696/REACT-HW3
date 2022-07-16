import React from "react";
//import { findAllInRenderedTree } from "react-dom/test-utils";

// <ToggleButton togggleText="ON"  />
// <ToggleButtonS count:10  />
export default class UrlListElement extends React.Component {
    constructor(props) {
        super(props);
     
  
  }
  render() {
    const txt= this.props.text
    const index= this.props.index
   // this.setState({text:"txt"})
//   this.setState({index:this.props.index})
    return (<>
     <p>
      {txt}{" "} <button type="button" onClick={this.handleRemove}>remove</button> 
     </p>
   
    </>

      )}
      handleRemove=(index)=>{
        
        this.props.onRemove(index) 
        console.log("removing")
      }
        
     // onRemoveFunc(indexToRenove)
     // { 
  //      this.props.onRemove(1) 
    //    }

      }
      