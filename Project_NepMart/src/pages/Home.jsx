
import { useState } from "react";
import { products } from "../data/product";
import ProductCard from "../components/ProductCard";

function Home() {
    const [currentIndex, setCurrentIndex] = useState(0);

    const nextSlide = () => {
        setCurrentIndex((prev) =>
            Math.min(prev + 1, products.length - 1)
        );
    };

    const prevSlide = () => {
        setCurrentIndex((prev) =>
            Math.max(prev - 1, 0)
        );
    };

    return (
        <div className="p-6">

            <h1 className="text-2xl font-bold mb-5">
                Our Products
            </h1>

            <div className="relative overflow-hidden bg-slate-700 border rounded flex justify-around p-3 text-white">

                {/* Left Arrow */}
                <button
                    onClick={prevSlide}
                    disabled={currentIndex === 0}
                    className="absolute left-2 top-1/2 -translate-y-1/2 z-10 bg-white shadow-lg rounded-full p-3 disabled:opacity-30 cursor-pointer hover:bg-gray-200 text-black"
                >
                    &#10094;
                </button>

                {/* Products */}
                <div
                    className="flex gap-5 transition-transform duration-500 ease-in-out"
                    style={{
                        transform: `translateX(-${currentIndex * 25}%)`
                    }}
                >
                    {products.map((product) => (
                        <div
                            key={product.id}
                            className="min-w-[25%]"
                        >
                            <ProductCard
                                name={product.name}
                                price={product.price}
                                category={product.category}
                                image={product.image}
                                isHot={product.isHot}
                            />
                        </div>
                    ))}
                </div>

                {/* Right Arrow */}
                <button
                    onClick={nextSlide}
                    disabled={currentIndex === products.length - 1}
                    className="absolute right-2 top-1/2 -translate-y-1/2 z-10 bg-white shadow-lg rounded-full p-3 disabled:opacity-30 cursor-pointer hover:bg-gray-200 text-black"
                >
                    &#10095;
                </button>

            </div>
        </div>
    );
}

export default Home;
