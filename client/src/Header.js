 import React, {Component} from 'react'
 import welcome from './welcome.jpeg'

        class Header extends Component{
            render()
            {
                return(
                    <header className="App-header">
                        <img src={welcome} />
                    </header>
                );
            }
        }

        export default Header;