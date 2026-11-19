
function ProductCard({name,price,category,image,isHot}){
    return(
        <div>
            <h1>{name}</h1>
            <p>{price}</p>
            <p>{category}</p>
            <img className="w-[200px] h-48 object-contain" src={image} alt={name} />
            <p>{isHot?"":"Hot Product"}</p>
        </div>
    )
}
export default ProductCard;