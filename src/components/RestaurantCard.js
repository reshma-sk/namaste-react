const RestaurantCard = (props)=>{
  const{resData} = props;
  console.log(resData);
  
  
  return(
    <div className="m-4 p-4 w-[250px] rounded-lg bg-gray-100 hover:bg-gray-200">
      <h4 className="font-bold py-4 text-lg">{resData.info.name}</h4>
    </div>
  )
}
export default RestaurantCard;