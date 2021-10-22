import React from 'react';
import '../assets/css/header.css'
import {MdLogout} from 'react-icons/md'
import {Link} from 'react-router-dom';
class Header extends React.Component{
    render() {
        return(
            <>
                <div className="header d-flex justify-content-between align-items-center">
                    <div className="mx-5 font-speci">
                        <h2>{this.props.role}</h2>
                    </div>
                    <Link className="btn-logout" to="/">
                        <div className="p-2 bd-highlight mr-5">To main page
                            <MdLogout className="logout-icon ml-2"/>
                        </div>
                    </Link>

                </div>
            </>
            
        )
    }
}

export default Header;