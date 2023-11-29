import React, { useState } from 'react'
import './NavBar.css';
import logo from '../Assets/logo.png';
import Badge from '@mui/material/Badge';
import { styled } from '@mui/material/styles';
import ShoppingCartIcon from '@mui/icons-material/ShoppingCart';
import { Link } from 'react-router-dom';


const NavBar = () => {

    const[menu,setmenu] = useState('shop')

    const StyledBadge = styled(Badge)(({ theme }) => ({
        '& .MuiBadge-badge': {
          right: -3,
          top: 1,
          border: `2px solid ${theme.palette.background.paper}`,
          padding: '0 4px',
        },
      }));

  return (
    <div className='navbar'>
    <div className='nav-logo'>
       <img src={logo} alt="logo" />
       <p>Craft_Buy</p>
    </div>
    <ul className='nav-menu'>
        <li onClick={()=>{setmenu("shop")}}><Link to='/' className='link'>Shop</Link>{menu==="shop"?<hr />:<></>}</li>
        <li onClick={()=>{setmenu("mens")}}><Link to='/mens' className='link'>Men</Link>{menu==="mens"?<hr />:<></>}</li>
        <li onClick={()=>{setmenu("womens")}}><Link to='/womens' className='link'>Women</Link>{menu==="womens"?<hr />:<></>}</li>
        <li onClick={()=>{setmenu("kids")}}><Link to='/kids' className='link'>Kids</Link>{menu==="kids"?<hr />:<></>}</li>
    </ul>

    <div className='navLoginCart'>
    <button><Link to='/login' className='link'>Login</Link></button>
    <Link className='link' to='/cart'>
    <Badge>
       <StyledBadge badgeContent={4} color="secondary">
          <ShoppingCartIcon />
       </StyledBadge>
    </Badge>
    </Link>
    </div>
    </div>
  )
}

export default NavBar
