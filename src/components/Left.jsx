import  React,{useState,useEffect} from "react";
import "../Pages/Hotelslist.css"
import StarRateIcon from '@mui/icons-material/StarRate';
import Hoteldata from "../Hoteldata.json"


export const Left=()=> {
  const [Data,setData] = useState([])

  let data=Hoteldata.Hoteldata

  // const HotData=async()=>{
  //   let promise =await fetch("http://localhost:3000/HotelData");
  //   let data = await promise.json();
  //   setData(data)
  // }


  // useEffect(()=>{
  //   HotData();
  // },[])

const handleStar=(star)=>{
        let newData = data.filter(el=>el.Rating>=star && el.Rating<star+1)
        setData(newData)
}

  // const handleStar=async(star)=>{
  //       let promise =await fetch("http://localhost:3000/Hoteldata");
  //       let data = await promise.json();
  //       setData(newData)
  //     }
    

  return (
    <>
   <div>
  
    <h3>Filters</h3>
    <h3>----------------------------------</h3>
      <h3>Popular Filters</h3>
      {/* <div id="popsort">
      <input type="checkbox" name="Free airport shuttle" label="Free airport shuttle"/> <span>Free airport shuttle</span>
      <br />
      <input type="checkbox" name="Juhu Beach" /> <span>Juhu Beach</span>
      <br />
      <input type="checkbox" name="All inclusive" /> <span>All inclusive</span>
      <br />
      <input type="checkbox" name="All-inclusive plan available" /> <span>All-inclusive plan available</span>
      <br />
      <input type="checkbox" name="Hot tub" /> <span>Hot tub</span>
      </div> */}

      <h3>Star Rating</h3>
      <span id="star">
      <button id ="btn1"onClick={()=>handleStar(1)}><h3>1<StarRateIcon/></h3></button>
      <button id ="btn1"onClick={()=>handleStar(2)}><h3>2<StarRateIcon/></h3></button>
      <button id ="btn1"onClick={()=>handleStar(3)}><h3>3<StarRateIcon/></h3></button>
      <button id ="btn1"onClick={()=>handleStar(4)}><h3>4<StarRateIcon/></h3></button>
      <button id ="btn1"onClick={()=>handleStar(5)}><h3>5<StarRateIcon/></h3></button>
      </span>

      <h3>Your Budget</h3>
      {/* <div id="costsort">
      <input type="checkbox" placeholder="Less than $75"/> <span>Less than $75</span>      
      <br />
      <input type="checkbox" placeholder="$75 to $125"/> <span>$75 to $125</span>     
      <br />
      <input type="checkbox" placeholder="$125 to $200"/> <span>$125 to $200</span>     
      <br />
      <input type="checkbox" placeholder="$200 to $300"/> <span>$200 to $300</span>     
      <br />
      <input type="checkbox" placeholder="Greater than $300"/> <span>Greater than $300</span>
      </div> */}
  
      <h3>Guest Rating</h3>
      {/* <div id="ratingsort">
      <div>        
        <input type="radio" value="Any"/> <span>Any</span>      
      </div>
      <div>       
         <input type="radio" value="Wonderful 4.5+" /> <span>Wonderful 4.5+</span>     
      </div>
      <div>       
          <input type="radio" value="Very good 4+" /> <span>Very good 4+</span>     
      </div>
      <div>
          <input type="radio" value="Good 3.5++" /> <span>Good 3.5+</span>     
      </div>
      </div> */}
  
    </div>
    </>
    
  );
}