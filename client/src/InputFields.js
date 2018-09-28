import React, {Component} from 'react'


class InputFields extends Component {
    constructor(props) {
        super(props);
        this.state = {
            data: [],
            username: "",
            title: "",
            journalEntry: "",
        }
    }

    submitChange = (event) => {
        fetch('/posts/new',
            {
                method: "POST",
                body: JSON.stringify(
                    {
                        username: this.state.username,
                        title: this.state.title,
                        journalEntry: this.state.body
                    }),
                headers: {
                    'Content-Type': 'application/json',
                }
            })
            .then(data => data.json());
    };
    InputOnChange = (event) => {
        this.setState({
            [event.target.id]: event.target.value
        })

    };


    render() {
        return (
            <div className="textfield">
                <form onSubmit={this.submitChange}>
                    <table className="center">
                        <tbody>
                        <tr>
                            <td><label>Username:</label></td>
                            <td><input id="username" type="text" value={this.state.username}
                                       onChange={this.InputOnChange}
                                       placeholder={"Enter Username"}/></td>
                        </tr>
                        <tr>
                            <td><label>Title:</label></td>
                            <td><input id="title" type="text" value={this.state.title} onChange={this.InputOnChange}
                                       placeholder={"Enter Journal Title"}/></td>
                        </tr>
                        <tr>
                            <td><label>Journal Body:</label></td>
                            <td><input id="journalEntry" type="text" value={this.state.journalEntry}
                                       onChange={this.InputOnChange}
                                       placeholder={"Enter Your Journal"}/></td>
                        </tr>
                        </tbody>
                    </table>
                    <input className="submit" type="submit" value="Submit"/>

                </form>
            </div>
        )
    }
}

export default InputFields;