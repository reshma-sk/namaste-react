import { useEffect, useState } from "react";
import RestaurantCard from "./RestaurantCard";
import Shimmer from "./Shimmer";
import  {Link}  from "react-router-dom";
import useOnlineStatus from "../utils/useOnlineStatus";

const Body = () => {
  const [res, setRes] = useState([])
  const [srch, setSrch] = useState("")
  const [filteredItems, setFilteredItems] = useState([])
  console.log('body rendered');
  
  useEffect(() => {
    console.log('use effect called');
    fetchData();
  }, []);
  const fetchData = async () => {
    const data = await fetch("https://corsproxy.io/?https://www.swiggy.com/dapi/restaurants/list/v5?lat=17.2472528&lng=80.1514447&is-seo-homepage-enabled=true&page_type=DESKTOP_WEB_LISTING%22")
    const json = await data.json()
    console.log(json.data.cards[4].card.card.gridElements.infoWithStyle.restaurants[0].info.name);
    setRes(json?.data?.cards[4]?.card?.card?.gridElements?.infoWithStyle?.restaurants);
    setFilteredItems(json?.data?.cards[4]?.card?.card?.gridElements?.infoWithStyle?.restaurants)  
  }
  const onlineStatus = useOnlineStatus();
  if(onlineStatus == false)
  
    return (
      <h1>Looks you are offline, pleae check your Internet</h1>
    )
    
  
  return res.length === 0 ? (
    <Shimmer />
  ) : (
    <div className="body">
      <div className="filter flex">
        <div className="search m-4 p-4">
          <input type="text" className="border border-solid border-black" onChange={(e) => { setSrch(e.target.value) }} />
          <button className="px-5 py-1 m-4 bg-green-200  rounded-xl" onClick={() => {
            const filteredItems = res.filter((item) => item.title.includes(srch));
            setFilteredItems(filteredItems)
          }}>Search
          </button>
        </div>
        <div className="search m-4 p-4 flex items-center">
          <button className="px-2 py-1 m-4 bg-green-200" 
            onClick={()=>{
            const filteredList = res.filter((restro)=>restro.data.avgRating > 4)
            setRes(filteredList)
            }}>Top Rated Restaurants
          </button>
        </div>
      </div>
      <div className="flex flex-wrap">
        {filteredItems.map(restaurant => <Link key={restaurant.info.id} to={"/restaurants/"+restaurant.info.id}><RestaurantCard  resData={restaurant} /></Link>)}

      </div>
    </div>
  )
}
export default Body;