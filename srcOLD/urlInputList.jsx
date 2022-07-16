import React from "react";
import { findAllInRenderedTree } from "react-dom/test-utils";
import UrlListElement from "./urlListElementComp";
// <ToggleButton togggleText="ON"  />
// <ToggleButtonS count:10  />
export default class UrlInputList extends React.Component {
    constructor(props) {
        super(props);
    let urlLineVal=""
        this.state = {urllist: [],urlLine:urlLineVal};
        
       
     
  }

//Add Item
onAddItem = () => {
    let newline = this.state.urlLine
    this.setState({ urllist: [...this.state.urllist,newline] });
    this.setState({urlLine:""})
   
};

//Remove Last Item
onSortAsc = () => {
  
  let arr= this.state.urllist
  this.setState({urllist:arr.sort()})
  
};
onSortDesc = () => {
  let arr= this.state.urllist
  arr = arr.sort()
  arr = arr.reverse()
  this.setState({urllist:arr})
  
};
RemoveFromList=(i)=>{
  
  let arr=[]
  arr= [...this.state.urllist]
  arr.splice(i,1)
  this.setState({urllist:arr})
  
  

}

  render() {
    let resarr=[]
    for (let i=0 ; i< this.state.urllist.length; i++  )
    { let elem = this.state.urllist[i]
      resarr.push(<UrlListElement text={elem} key={i} index={i} onRemove={this.RemoveFromList} />)
    }
   // this.state.urllist.forEach((elem)=>{resarr.push(<UrlListElement text={elem} key={elem} onRemove={this.RemoveFromList} />)})
    
    return (
 
      <div>
        <form>
          <label>Enter url {" "}
            <input
              type="text"
              value={this.state.urlLine}
              size={80}
              onChange={(e) => this.setState({ urlLine: e.target.value })}

            />
          </label>{" "}
        </form>
        <br></br>
     
         <button type="button" onClick={this.onAddItem}>Add Item</button>&nbsp;
         <button type="button" onClick={this.onSortAsc}>Sort asc</button>&nbsp;
         <button type="button" onClick={this.onSortDesc}>Sort desc</button>&nbsp;
         <br></br>
        <hr></hr>
        {/* <ul>  
          {this.state.urllist.map(item => (
            <li key={item}>{item}</li>
          ))}
        </ul> */}
        {resarr}


      
      </div>)}
    
}