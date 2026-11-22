function Navbar({onLogin,onHome}) {
    return (
        <nav className="flex justify-between items-center px-6 py-4 bg-white shadow">
            <div>
                <h2 className="text-xl font-bold cursor-pointer" onClick={onHome}>NepMart</h2>
            </div>
            <div className="flex gap-3">
                <button onClick={onLogin} className="px-4 py-2 border rounded">Login</button>
                <button className="px-4 py-2 bg-red-600 text-white rounded">Sign Up</button>
            </div>
        </nav>
    );
}

export default Navbar;