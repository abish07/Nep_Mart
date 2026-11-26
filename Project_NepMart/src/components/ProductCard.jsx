function ProductCard({ name, price, category, image, isHot , onAdd}) {
    const formattedPrice = Number(price).toLocaleString("en-in");

    return (
        <div className="relative flex flex-col bg-white rounded-lg shadow p-3 hover:scale-105 transition-transform duration-200 cursor-pointer">
            <div>
                {isHot && (
                    <span className="absolute top-2 left-2 z-10 bg-red-600 text-white text-xs px-2 py-1 rounded">
                        🔥 Hot
                    </span>
                )}
                <img className="w-full h-48 object-contain mb-3" src={image} alt={name} />
            </div>
            
            <div>
                <h3 className="font-bold">{name}</h3>
                <p className="text-sm text-gray-500">{category}</p>
                <p>
                    <span className="font-bold">Rs.</span> {formattedPrice}
                </p>
            </div>
            {/* <button className="bg-gray-900 text-white h-fit">Add to Cart</button> */}
            <button onClick={onAdd} className="bg-red-600 text-white px-4 py-2 my-2 cursor-pointer rounded-lg hover:bg-red-700 transition-colors w-full">Add to Cart</button>
        </div>
    );
}

export default ProductCard;