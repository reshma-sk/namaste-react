//import { useEffect,useState } from "react";
import Shimmer from "./Shimmer";
import useRestaurantMenu from "../utils/useRestaurantMenu";
import { useParams } from "react-router-dom";
//import { MENU_URL } from "../utils/constants";
const RestaurantMenu = ()=>{
    //const[resInfo,setResInfo] = useState(null) 
    const{resId} = useParams()
    console.log(resId);
    const resInfo = useRestaurantMenu(resId)
    
    /*useEffect(()=>{
        fetchMenu();
       
    },[])
    const fetchMenu = async ()=>{
        const response = await fetch(MENU_URL + resId);
        const json = await response.json();       
        setResInfo(json.data)         
    }*/
    console.log(resInfo);
    if (resInfo == null) return <Shimmer/>;
    const {name,cuisines,costForTwoMessage} = resInfo?.cards[2].card.card.info;
    const {itemCards} = resInfo?.cards[4]?.groupedCard?.cardGroupMap?.REGULAR?.cards[2]?.card?.card;
    console.log(itemCards);
    return (
        <div>
            <h1>{name}</h1>
            <p>{cuisines.join(', ')} - {costForTwoMessage}</p>
            <ul>
                {itemCards.map(item=><li key={item.card.info.id}>{item.card.info.name} - {item.card.info.price}</li>)}
            </ul>

        </div>
    )

}
export default RestaurantMenu;