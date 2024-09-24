import { BU_URL } from "./constants";
import { BI_URL } from "./constants";

let resList = [
  {
    type:"restaurant",
      data: {
        id:1,
        img:BU_URL,
        name : "KFC",
        cuisines :["Burger","Americans","snacks"],
        costForTwo:40000,
        avgRating:"3.6",
    },
  },
  {
    type:"restaurant",
      data: {
        id:2,
        img :BI_URL,
        name : "Meghna Food",
        cuisines :["Biryani","Indian","main course"],
        cos3ForTwo:70000,
        avgRating:"4.6",
    },
  },
  {
    type:"restaurant",
      data: {
        id:3,
        img:BU_URL,
        name : "Zaitoon",
        cuisines :["Burger","Americans","snacks"],
        costForTwo:40000,
        avgRating:"4.0",
    },
  },
  {
    type:"restaurant",
      data: {
        id:4,
        img:BU_URL,
        name : "Andhra",
        cuisines :["Burger","Americans","snacks"],
        costForTwo:40000,
        avgRating:"4.5",
    },
  },
  {
    type:"restaurant",
      data: {
        id:5,
        img:BU_URL,
        name : "MCD",
        cuisines :["Burger","Americans","snacks"],
        costForTwo:40000,
        avgRating:"3.6",
    },
  },
  
]
export default resList;