import { Link } from 'react-router-dom';


function Nav() {
  return (
    <div>
        <ul className='nav'>
          <li className='nav-li'><Link to={'/'} className='nav'>home</Link></li>
          <li className='nav-li'><Link to={'/about'} className='nav'>about</Link></li>
          <li className='nav-li'><Link to={'/portfolio'} className='nav'>portfolio</Link></li>
          <li className='nav-li'><Link to={'/contact'} className='nav'>contact</Link></li>
        </ul>

    </div>
  )
}

export default Nav