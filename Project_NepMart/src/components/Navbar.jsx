function Navbar({onLogin,onHome,onSignup,cart}) {
    const countCart = cart.reduce((sum, item)=> sum + item.quantity, 0);
    return (
        <nav className="flex justify-between items-center px-6 py-4 bg-white shadow">
            <div className="hover:scale-105  cursor-pointer" onClick={onHome}>
                <h2 className="text-xl font-bold">NepMart</h2>
            </div>
            <div className="flex gap-3 items-center">
                <button onClick={onLogin} className="px-4 py-2 border rounded cursor-pointer">Login</button>
                <button onClick={onSignup} className="px-4 py-2 bg-red-600 text-white rounded cursor-pointer">Sign Up</button>
                <p className="px-4 py-2 border rounded cursor-pointer flex items-center gap-1 bg-gray-900 text-white">
                    <span>Cart</span>
                    <span>({countCart})</span>
                </p>
            </div>
        </nav>
    );
}

export default Navbar;