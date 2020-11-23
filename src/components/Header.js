import React, { useEffect } from 'react'
import { connect } from 'react-redux'
import { Link } from 'react-router-dom'

const Header = props => {
    useEffect(() => {
        console.log(props.auth.user)
    }, [])
    return (
        <nav>
            <div className='nav-wrapper'>
                <Link 
                    className='left brand-logo' 
                    to={props.auth.user ? '/surveys' : '/'}
                >
                    Emaily
                </Link>
                <ul className='right'>
                    <li>
                        {props.auth.user ? 
                            <a href='/api/logout'>logout</a> :
                            <a href='/auth/google'>Login with Google</a>
                        }
                    </li>
                </ul>
            </div>
        </nav>
    )
}

const mapStateToProps = state => {
    return { auth: state.auth }
}

export default connect(mapStateToProps)(Header)