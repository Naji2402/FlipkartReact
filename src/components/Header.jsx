import './header.css';
import HamLogo from '../assets/Logos/Menu.svg';
import FlipLogo from '../assets/Logos/FlipkartLogo.svg';
import GetAppLogo from '../assets/Logos/Get App.svg';
import LoginLogo from '../assets/Logos/Login.svg';
import CartLogo from '../assets/Logos/Cart.svg';
import SellerLogo from '../assets/Logos/Become a Seller.svg'
import DropdownLogo from '../assets/Logos/Dropdown.svg'
import SearchIcon from '../assets/Logos/SearchIcon.svg'

 function Header(){
     return (
        <>
            <header>
                <div className='header-left-section'>
                    <div className='hamburger'>
                        <img src={HamLogo} alt="hamburger logo icom" />
                    </div>
                    <div className='flip-logo'>
                        <img src={FlipLogo} alt=" flipkart logo" />
                    </div>
                    <div>
                        <div className='search-main'>
                            <button>
                                <img src={SearchIcon} alt="" />
                            </button>
                            <div>
                                <input className='search-bar' type="text" placeholder='Search for Products, Brands and More' />
                            </div>
                        </div>
                    </div>
                </div>
                <div className='header-right-section'>
                    <div>
                        <img src={GetAppLogo} className="get-app-logo" alt="" />
                    </div>
                    <div>
                        <img src={LoginLogo} className='login-logo' alt="" />
                        <span>Login</span>
                        <svg xmlns:xlink="http://www.w3.org/1999/xlink" width="14" height="11" viewBox="0 0 14 11" fill="none" xmlns="http://www.w3.org/2000/svg"><g filter="url(#filter0_d_4974_75969)"><path d="M3 2L7 6L11 2" stroke="#111112" stroke-width="1.5" stroke-linecap="round"></path></g><defs><filter id="filter0_d_4974_75969" x="0.25" y="0.25" width="13.5" height="9.8125" filterUnits="userSpaceOnUse" color-interpolation-filters="sRGB"><feFlood flood-opacity="0" result="BackgroundImageFix"></feFlood><feColorMatrix in="SourceAlpha" type="matrix" values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0" result="hardAlpha"></feColorMatrix><feOffset dy="1"></feOffset><feGaussianBlur stdDeviation="1"></feGaussianBlur><feColorMatrix type="matrix" values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0.16 0"></feColorMatrix><feBlend mode="normal" in2="BackgroundImageFix" result="effect1_dropShadow_4974_75969"></feBlend><feBlend mode="normal" in="SourceGraphic" in2="effect1_dropShadow_4974_75969" result="shape"></feBlend></filter></defs></svg>
                    </div>
                    <div>
                        <img src={CartLogo} className='cart-logo' alt="" />
                    </div>
                    <div>
                        <img src={SellerLogo} alt="" />
                    </div>
                    <div className='drop-down-main'>
                        <img src={DropdownLogo} alt="" />
                    </div>
                </div>
            </header>
        </>
)}



 export default Header;