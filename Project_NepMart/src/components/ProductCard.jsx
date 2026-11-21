function ProductCard({ name, price, category, image, isHot }) {
    const formattedPrice = Number(price).toLocaleString("en-in");

    return (
        <div className="relative flex flex-col bg-white rounded-lg shadow p-3 hover:scale-105 transition-transform duration-200 cursor-pointer">
            {isHot && (
                <span className="absolute top-2 left-2 z-10 bg-red-600 text-white text-xs px-2 py-1 rounded">
                    🔥 Hot
                </span>
            )}
            <img className="w-full h-48 object-contain mb-3" src={image} alt={name} />
            <h3 className="font-bold">{name}</h3>
            <p className="text-sm text-gray-500">{category}</p>
            <p>
                <span className="font-bold">Rs.</span> {formattedPrice}
            </p>
        </div>
    );
}

export default ProductCard;