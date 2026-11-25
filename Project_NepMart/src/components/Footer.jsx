import Facebook from "../assets/icons/facebook.png"
import Instagram from "../assets/icons/instagram.png"
import Youtube from "../assets/icons/youtube.png"
function Footer({onHome,onLogin,onSignup}){
    const iconImage = "w-7 h-7 object-contain shrink-0 rounded-full";

    const linkClass = "hover:underline hover:opacity-75 transition-opacity cursor-pointer w-fit";
    const headingClass = "text-xl font-bold text-red-600 pb-3"
    const listingClass = "list-none flex flex-col space-y-2"

    const goTo = (action) =>{
        action();
        window.scrollTo({top:0,behavior:"smooth"})
    }
    return(
        <footer className="bg-gray-900 text-gray-300 px-4 py-6">
            <div className="flex flex-col sm:flex-row gap-6 sm:justify-around sm:flex-wrap">
                <div>
                    <div>
                        <h3 className={headingClass}>About NepMart</h3>
                    </div>
                    <ul className={listingClass}>
                        <li className={linkClass} onClick={()=>goTo(onHome)}>NepMart</li>
                        <li>Nepal's own online store</li>
                        <li>Quality products, delivered across Nepal</li>
                    </ul>
                </div>
                <div>
                    <div>
                        <h3 className={headingClass}>Shop</h3>
                    </div>
                    <ul className={listingClass}>
                        <li className={linkClass} onClick={()=>goTo(onHome)}>Home</li>
                        <li className={linkClass}>Hot Products</li>
                        <li className={linkClass}>Cart</li>
                        <li className={linkClass}>All Categories</li>
                    </ul>
                </div>
                <div>
                    <div>
                        <h3 className={headingClass}>Account</h3>
                    </div>
                    <ul className={listingClass}>
                        <li className={linkClass} onClick={()=>goTo(onLogin)}>Login</li>
                        <li className={linkClass} onClick={()=>goTo(onSignup)}>Sign Up</li>
                    </ul>
                </div>
                <div>
                    <div>
                        <h3 className={headingClass}>Help</h3>
                    </div>
                    <ul className={listingClass}>
                        <li className={linkClass}>Contact Us</li>
                        <li className={linkClass}>Delivery Info</li>
                        <li className={linkClass}>Return Policy</li>
                        <li className={linkClass}>FAQ</li>
                    </ul>
                </div>
                <div>
                    <div>
                        <h3 className={headingClass}>Contact</h3>
                    </div>
                    <ul className={listingClass}>
                        <li>support@nepmart.com</li>
                        <li>+977-9876128750</li>
                        <li>Kathmandu, Nepal</li>
                    </ul>
                </div>
                <div>
                    <div>
                        <h3 className={headingClass}>Follow Us</h3>
                    </div>
                    <ul className={listingClass}>
                        <li className="flex items-center gap-2">
                            <img className={iconImage} src={Facebook} alt="Facebook" />
                            <a 
                            href="https://www.facebook.com/abish.shrestha.912368" 
                            className={linkClass}
                            target="_blank" 
                            rel="noopener noreferrer"
                            >Facebook</a>
                            
                        </li>
                        <li className="flex items-center gap-2">
                            <img className={iconImage} src={Instagram} alt="Instagram" />
                            <a 
                            href="https://www.instagram.com/abish_it_is/" 
                            className={linkClass}
                            target="_blank" 
                            rel="noopener noreferrer"
                            >
                            Instagram</a>
                        </li>
                        <li className="flex items-center gap-2">
                            <img className={iconImage} src={Youtube} alt="Youtube" />
                            <a 
                            href="https://www.youtube.com/@Abish_07" 
                            className={linkClass}
                            target="_blank" 
                            rel="noopener noreferrer"
                            >YouTube</a>
                        </li>
                    </ul>
                </div>
            </div>
            <div className="w-full border-2 border-gray-200 mt-10 opacity-10"></div>
            <div className="flex flex-col items-center pt-10 pb-4 gap-2">
                <p>© 2026 NepMart. All rights reserved.</p>
                <p>We accept: eSewa • Khalti • Cash on Delivery</p>
            </div>
        </footer>
    )
}
export default Footer;