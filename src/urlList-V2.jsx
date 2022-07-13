import React from "react";

export default class UrlInputList_v2 extends React.Component {
    // <ToggleButtxport default class UrlInputList extends React.Component {
    constructor(props) {
        super(props);

        this.state = {
            urllist: [],
            urlLine: "",
            editMode: false,
            currentID: ""


        };




    }

    //Add Item
    onAddItem = () => {
        let newline ={
           text: this.state.urlLine,
           id:Date.now()

        } 
        this.setState({ urllist: [...this.state.urllist, newline] });
        this.setState({ urlLine: "" })
            };

    onRemove= (ID) =>{ const updatedArr= [...this.state.urllist].filter((item)=> item.id !== ID);
                        this.setState({urllist:updatedArr});

    }       
   
    render() {
        
                let resarr= this.state.urllist.map(
                 (url)=>(<li>{url.text}
                 {" "} <button type="button" onClick={()=>this.onRemove(url.id)}>remove</button> 
                   </li>   )  )
        return (
            <>
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

                    <button type="button" onClick={this.onAddItem}>Add Item</button> & nbsp;
                    <button type="button" onClick={this.onSortAsc}>Sort asc</button> & nbsp;
                    <button type="button" onClick={this.onSortDesc}>Sort desc</button> & nbsp;
                    <br></br>
                    <hr></hr>
                    <ul>
                        {resarr}
                    </ul>




                </div >
            </>)
    }
}