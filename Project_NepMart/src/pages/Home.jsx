import { products } from "../data/product";
import ProductCard from "../components/ProductCard";


function Home({onAddToCart,cart,onDecrease,onDelete}) {
    const hotProducts = products.filter((product) => product.isHot);
    const grandTotal = cart.reduce((sum, item) => sum + item.price * item.quantity, 0);
    return (
        <div className="min-h-screen bg-taupe-200">
            <main className="p-6">
                <h1 className="text-2xl font-bold mb-6">Hot Products</h1>
                <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
                    {hotProducts.map((product) => (
                        <ProductCard
                            key={product.id}
                            name={product.name}
                            price={product.price}
                            category={product.category}
                            image={product.image}
                            isHot={product.isHot}
                            onAdd={()=>onAddToCart(product)}
                        />
                    ))}
                </div>
            </main>
            <section className="max-w-3xl mx-auto px-4 py-8">
                <div className="flex justify-center">
                    <h3 className="text-2xl font-bold text-gray-900 mb-4">Your Cart</h3>
                </div>
                {cart.length===0?(<p className="bg-white rounded-lg shadow p-6 text-center text-gray-500">Your cart is empty</p>):(
                <div className="overflow-x-auto bg-white rounded-lg shadow">
                    <table className="w-full text-left">
                        <thead className="bg-gray-900 text-white">
                            <tr>
                                {/* <th>S.N</th> */}
                                <th className="px-4 py-3">Product Name</th>
                                <th className="px-4 py-3 text-center">Quantity</th>
                                <th className="px-4 py-3 text-right">Price</th>
                                <th className="px-4 py-3 text-right">Total</th>
                                <th className="px-4 py-3 text-center">Delete</th>
                            </tr>
                        </thead>
                       <tbody className="divide-y divide-gray-200 text-gray-700">
                            {cart.map((item) => (
                                <tr key={item.id}>
                                    <td className="px-4 py-3">{item.name}</td>
                                    <td className="px-4 py-3">
                                        <div className="flex justify-center items-center gap-3">
                                            <button className="w-5 h-fit bg-gray-100 shadow cursor-pointer" onClick={()=>onDecrease(item.id)}>-</button>
                                            {item.quantity}
                                            <button className="w-5 h-fit bg-gray-100 shadow cursor-pointer" onClick={()=>onAddToCart(item)}>+</button>
                                        </div>
                                    </td>
                                    <td className="px-4 py-3 text-right">
                                            Rs. {item.price.toLocaleString("en-in")}
                                    </td>
                                    <td className="px-4 py-3 text-right font-medium">
                                        Rs. {(item.price * item.quantity).toLocaleString("en-in")}
                                    </td>
                                    <td className="px-4 py-3 text-center">
                                        <button className="bg-gray-100 p-1.5 shadow cursor-pointer" onClick={()=>onDelete(item.id)}>🗑️</button>
                                    </td>
                                </tr>
                            ))}
                        </tbody>
                        <tfoot className="bg-gray-100">
                            <tr>
                                <td colSpan={3} className="px-4 py-3 text-right font-bold text-gray-900">
                                    Grand Total
                                </td>
                                <td className="px-4 py-3 text-right font-bold text-red-600">
                                    Rs. {grandTotal.toLocaleString("en-in")}
                                </td>
                                <td></td>
                            </tr>
                        </tfoot>
                    </table>
                </div>
                )}
            </section>
        </div>
    );
}

export default Home;
