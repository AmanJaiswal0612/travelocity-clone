import React,{useState,useEffect} from 'react';
import "../Pages/Hotelslist.css";
import Hoteldata from "../Hoteldata.json"
import StarRateIcon from '@mui/icons-material/StarRate';
// import { nanoid } from 'nanoid';


export const Right = () => {
    console.log(Hoteldata.Hoteldata)
    // const [Data,setData] = useState([])
let data1=Hoteldata.Hoteldata

// export const Left=()=> {
    const [Data,setData] = useState([])
  
    // let data=Hoteldata.Hoteldata
  
    // const HotData=async()=>{
    //   let promise =await fetch("http://localhost:3000/HotelData");
    //   let data = await promise.json();
    //   setData(data)
    // }
  
  
    // useEffect(()=>{
    //   HotData();
    // },[])
  
  const handleStar=(star)=>{
          let newData = data1.filter(el=>el.Rating>=star && el.Rating<star+1)
          setData(newData)
  }
  
    // const handleStar=async(star)=>{
    //       let promise =await fetch("http://localhost:3000/Hoteldata");
    //       let data = await promise.json();
    //       setData(newData)
    //     }
    // const HotelsData=async()=>{
    //     let promise =await fetch("http://localhost:3000/Hoteldata");
    //     let res = await promise.json();
    //     setData(res)
    //   }
    
    //   useEffect(()=>{
    //     HotelsData()
    //   },[]);

    

     return(
         <>
      <div id="Hotels">
      <h3>Star Rating</h3>
      <span id="star">
      <button id ="btn1"onClick={()=>handleStar(1)}><h3>1<StarRateIcon/></h3></button>
      <button id ="btn1"onClick={()=>handleStar(2)}><h3>2<StarRateIcon/></h3></button>
      <button id ="btn1"onClick={()=>handleStar(3)}><h3>3<StarRateIcon/></h3></button>
      <button id ="btn1"onClick={()=>handleStar(4)}><h3>4<StarRateIcon/></h3></button>
      <button id ="btn1"onClick={()=>handleStar(5)}><h3>5<StarRateIcon/></h3></button>
      </span>
      {data1.map((el)=>{
        return (
          <>

          <div>
            <div><img src={el.url} alt=""/></div>
            <div>
              <h2>{el.Name}</h2>
              <div>{el.Location}</div>
              <div>Fully refundable </div>
              <div>Before Mon,May16</div>
              <div>Reserve now,Pay later</div>
              <span><b>{el.Rating}/5.0</b></span><span> Wonderfull </span><span>({el.Review} reviews)</span>
            </div>
            <div id="cost">
              <div>${el.Cost}</div>
            </div>
          </div>
          </>
        )
      })}
      </div>
      </>  
     )
}