import { products } from "../data/product";
import ProductCard from "../components/ProductCard";


function Home() {
    const hotProducts = products.filter((product) => product.isHot);

    return (
        <div className="min-h-screen bg-taupe-200">
            <main className="p-6">
                <h1 className="text-2xl font-bold mb-6">Hot Products</h1>
                <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
                    {hotProducts.map((product) => (
                        <ProductCard
                            key={product.id}
                            name={product.name}
                            price={product.price}
                            category={product.category}
                            image={product.image}
                            isHot={product.isHot}
                        />
                    ))}
                </div>
            </main>
        </div>
    );
}

export default Home;
