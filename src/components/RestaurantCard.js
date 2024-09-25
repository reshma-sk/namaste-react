const RestaurantCard = (props)=>{
  const{resData} = props;
  console.log(resData);
  
  
  return(
    <div className="m-4 p-4 h-[300px] rounded-lg bg-gray-100 hover:bg-gray-200">
      <h4 className="font-bold py-2 mt-1 text-lg">{resData.info.name}</h4>
      <img className ="w-[200px] h-40 rounded-3xl ml-5" src={"https://media-assets.swiggy.com/swiggy/image/upload/fl_lossy,f_auto,q_auto,w_660/" + resData.info.cloudinaryImageId} alt="" />
      <h2>{resData.info.cuisines.join(", ")}</h2>
      <h2 className="font-semibold">{resData.info.avgRating}{"*"}</h2>
    </div>
  )
}
export default RestaurantCard;