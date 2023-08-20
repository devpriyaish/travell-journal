import './Navbar.css'
import globe from '../assets/globe.png'

export default function Navbar() {
  return (
    <div className='navbar'>
      <img src={globe} alt="globe" />
      <p>my travel journal.</p>
    </div>
  )
}