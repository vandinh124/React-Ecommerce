import React from 'react';
import { connect } from 'react-redux';

import { Link } from 'react-router-dom';
import { auth } from '../../firebase/Firebase.utils';
import CartIcon from '../cart-icon/CartIcon';
import CartDropdown from '../cart-dropdown/CartDropdown';

import {ReactComponent as Logo} from '../../assets/crown.svg';

import './Header.styles.scss';

const Header = ({currentUser, hidden}) => (
    <div className='header'>
        <Link className='logo-container' to="/">
            <Logo className='logo' />
        </Link>
        <div className='options'>
            <Link className='option' to='/shop'>
                SHOP
            </Link>
            <Link className='option' to='/contact'>
                CONTACT
            </Link>
            {
                currentUser ?
                (<div className='option' onClick={()=> auth.signOut()}>SIGN OUT</div>
                ) : (
                <Link className='option' to='/signin'>SIGN IN</Link>
                )
            }
            <CartIcon />
            
        </div>
        {hidden ? null : <CartDropdown />}
    </div>
);

// const mapStateToProps = (state) => ({
//     currentUser: state.user.currentUser,
//     hidden: state.cart.hidden
// })

const mapStateToProps = ({user: {currentUser}, cart: {hidden}}) => ({
    currentUser,
    hidden
})

export default connect(mapStateToProps)(Header);

