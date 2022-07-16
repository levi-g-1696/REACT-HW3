import React from "react";

export default class UrlInputList_v2 extends React.Component {
    // <ToggleButtxport default class UrlInputList extends React.Component {
    constructor(props) {
        super(props);
        let tempCurrentID = ""
        this.state = {
            urllist: [],
            urlLine: "",
            currentInput: "",
            currentID: "klklk"


        };
    }

    //Add Item
    onAddItem = () => {
        let newline = {
            text: this.state.urlLine,
            id: Date.now(),
            editMode: false,
            editModeText: this.state.urlLine
        }
        this.setState({ urllist: [...this.state.urllist, newline] });
        this.setState({ urlLine: "" })

    };

    onRemove = (ID) => {
        const updatedArr = [...this.state.urllist].filter((item) => item.id !== ID);
        this.setState({ urllist: updatedArr });

    }
    delay(delayInms) {
        return new Promise(resolve => {
            setTimeout(() => {
                resolve(2);
            }, delayInms);
        });
    }

    onEdit = (urlObj) => {

        urlObj.editMode = true

        //     this.setState({ urllist: [...this.state.urllist] })
        //  this.setState({currentID: "urlObj.id" })
        this.setState({ currentID: urlObj.id })
        this.tempCurrentID = urlObj.id



    }

    onSortAsc = () => {
        let arr = [... this.state.urllist]
        arr.sort((a, b) => (a.text > b.text) ? 1 : ((b.text > a.text) ? -1 : 0))
        this.setState({ urllist: arr })

    };
    onSortDesc = () => {
        let arr = [... this.state.urllist]
        arr.sort((a, b) => (a.text > b.text) ? -1 : ((b.text > a.text) ? 1 : 0))
        this.setState({ urllist: arr })
    };
    hanleInput = (e) => {
        e.preventDefault()
        this.setState({ currentInput: e.target.value })

        const newarr = this.state.urllist.map((url) => {
            //    if (url.id===this.state.currentID)
            if (url.id == this.tempCurrentID) { url.editModeText = this.state.currentInput }
        })
        this.setState({ urllist: newarr })

    }

    //==========================================================

    render() {
        let resarr = []
        for (let k = 0; k < this.state.urllist.length; k++) {
            let nextObj = this.state.urllist[k]
            //    this.saveState( nextObj.ID)
            let nextHtmlLine = ""
            if (!nextObj.editMode) {
                nextHtmlLine = <li>{nextObj.text}
                    {" "} <button type="button" onClick={() => this.onRemove(nextObj.id)}>remove</button>
                    {" "} <button type="button" onClick={() => this.onEdit(nextObj)}>edit</button>

                </li>

            }
            else {
                //    this.setState({currentInput:nextObj.text})

                nextHtmlLine = <form>

                    <input
                        type="text"
                        value={nextObj.editModeText}

                        size={80}
                        //
                        onChange={this.hanleInput}
                    />    </form >

            }

            resarr = [...resarr, nextHtmlLine]

        }
        // let resarr = this.state.urllist.map(
        //     (url) => (<li>{url.text}
        //         {" "} <button type="button" onClick={() => this.onRemove(url.id)}>remove</button>
        //         {" "} <button type="button" onClick={() => this.onEdit(url)}>edit</button>
        //         <span> {url.editMode}</span>
        //     </li>))
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

                    <button type="button" onClick={this.onAddItem}>Add Item</button>&nbsp;
                    <button type="button" onClick={this.onSortAsc}>Sort asc</button> &nbsp;
                    <button type="button" onClick={this.onSortDesc}>Sort desc</button>&nbsp;
                    <br></br>
                    <hr></hr>
                    <ul>
                        {resarr}
                    </ul>

                </div >
            </>)
    }
}