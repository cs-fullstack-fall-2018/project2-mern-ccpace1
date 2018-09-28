import React, {Component} from 'react'

class Posts extends Component{
    render()
    {        var forEachItem = this.props.arr.map(
        eachItem => {
            return (
                <div>
                    <p>{eachItem.username}</p>
                    <p>{eachItem.title}</p>
                    <p>{eachItem.journalEntry}</p>
                    <hr/>
                </div>

            )
        }
    );
        return(
            <div>
                {forEachItem}
            </div>
        );
    }
}

export default Posts;