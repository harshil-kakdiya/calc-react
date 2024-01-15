import { useState } from "react";
import "./App.css";

function App() {
  const [value, setvalue] = useState("")
  const numStyle="hover:shadow-purple-950 transform active:bg-white transition duration-500 bg-indigo-500 w-1/4 h-full  rounded-md shadow-xl border-purple-950 text-lg  text-white "
  const spcChar="hover:shadow-purple-950 transform active:bg-white transition duration-500 bg-indigo-700 w-1/4 h-full  rounded-md shadow-xl border-purple-950 text-lg  text-white "
  const arithOpe="hover:shadow-purple-950 transform active:bg-white transition duration-500 bg-indigo-700 w-1/4 h-full  rounded-md shadow-xl border-purple-950 text-xl  text-white"
  
  

  window.onkeydown=(e)=>{
      let input=document.getElementById("textinput")
      input.addEventListener("keypress",(e)=>{
        if(e.key==="Enter"){
            e.preventDefault();
            document.getElementById("equl")
        }
      })
      var keyname=e.key
      if(e.key<=9 || e.key==='+' || e.key==='-' || e.key==='*' || e.key==='/'){
       
        setvalue(value+e.key)
        console.log(keyname)
         
      }
      else if(e.key==='Escape'){
        setvalue("")
        document.getElementById('calc').style.color=""
          document.getElementById('textinput').style.color=""
      }
      else if(e.key==='Backspace'){
        try {
          
          setvalue(value.slice(0,-1))
        } catch (error) {
          console.log(error)
        }
      }
      else if(e.key==='Enter'){
        try {
          
          setvalue(eval(value))
        } catch (error) {
          setvalue("KHOTI GA*D SARI KARMA!")
          document.getElementById('calc').style.color = "red";
          document.getElementById('textinput').style.color="red"
          
        }
      }
     
    }
    
  

  return (

    
    <div  className="bg-indigo-200 w-full h-screen items-center justify-center flex backdrop-blur-sm" >
      <div className="relative overflow-hidden xl:hover:scale-150 transform transition duration-500 scale-100 h-[529px] w-[308.328px] bg-indigo-400 opacity-50 shadow-2xl rounded-xl ">
        <div className="h-1/3 items-end justify-between flex flex-wrap">
        
          <p id='calc' className="hover:text-zinc-700 transform transition duration-500 mt-[-30px] px-2 font-medium text-2xl text-indigo-800 ">
            Calculator
          </p>
          <input
            type="text"
            value={value}
            id="textinput"
            className="hover:shadow-white text-right font-mono  w-full h-14 text-indigo-100 rounded-md bg-indigo-500 shadow-lg outline-none m-2 px-2 text-2xl transform transition duration-500"
            />
        </div>
        
        <div className=" h-70 w-full text-black px-2 mt-4">
        <div className="flex w-full h-14 justify-between text-black font-black mb-3 gap-1">
            <input
              type="button"
              onClick={(e)=>{
                setvalue(" ")
                document.getElementById('calc').style.color=""
          document.getElementById('textinput').style.color=""
              }}
              value="AC"
              className="hover:shadow-purple-950 transform active:bg-white transition duration-500 bg-indigo-800 w-2/4 h-full  rounded-md shadow-xl border-purple-950 text-lg  text-white"
              />
            <input
              type="button"
              value="DEL"
              onClick={(e)=>{
                try {
                  setvalue(value.slice(0,-1))
                } catch (error) {
                  console.log(error)
                }
                
              }}
              className="hover:shadow-purple-950 active:bg-white transform transition duration-500 bg-indigo-800 w-2/4 h-full  rounded-md shadow-xl border-purple-950 text-lg  text-white"
              /></div>
          <div className="flex w-full h-14 justify-between text-black font-black mb-2 gap-1">
            <input
              type="button"
              onClick={(e)=>{
                setvalue(value+e.target.value)
              }}
              
              value="7"
              className={numStyle}
              />
             <input
              type="button"
              value="8"
              onClick={(e)=>{
                setvalue(value+e.target.value)
              }}
              className={numStyle}
              />
            <input
              type="button"
              value="9"
              onClick={(e)=>{
                setvalue(value+e.target.value)
              }}
              className={numStyle}
              />
            <input
              type="button"
              value="/"
              onClick={(e)=>{
                setvalue(value+e.target.value)
              }}
              className={spcChar}
              />
          </div>
          <div className="flex w-full h-14 justify-between text-black font-black mb-2 gap-1">
            <input
              type="button"
              value="4"
              onClick={(e)=>{
                setvalue(value+e.target.value)
              }}
              className={numStyle}
              />
            <input
              type="button"
              value="5"
              onClick={(e)=>{
                setvalue(value+e.target.value)
              }}
              className={numStyle}
              />
            <input
              type="button"
              value="6"
              onClick={(e)=>{
                setvalue(value+e.target.value)
              }}
              className={numStyle}
              />
            <input
              type="button"
              value="*"
              onClick={(e)=>{
                setvalue(value+e.target.value)
              }}
              className={arithOpe}
              />
          </div>
          <div className="flex w-full h-14 justify-between text-black font-black mb-2 gap-1">
            <input
              type="button"
              value="1"
              onClick={(e)=>{
                setvalue(value+e.target.value)
              }}
              className={numStyle}
              />
            <input
              type="button"
              value="2"
              onClick={(e)=>{
                setvalue(value+e.target.value)
              }}
              className={numStyle}
              />
            <input
              type="button"
              value="3"
              onClick={(e)=>{
                setvalue(value+e.target.value)
              }}
              className={numStyle}
              />
            <input
              type="button"
              value="-"
              onClick={(e)=>{
                setvalue(value+e.target.value)
              }}
              className="hover:shadow-purple-950 transform active:bg-white transition duration-500 bg-indigo-700 w-1/4 h-full  rounded-md shadow-xl border-purple-950 text-2xl  text-white"
              />
          </div>
          <div className="flex w-full h-14 justify-between text-black font-black mb-2 gap-1">
            <input
              type="button"
              value="0"
              onClick={(e)=>{
                setvalue(value+e.target.value)
              }}
              className={spcChar}
              />
            <input
              type="button"
              value="."
              onClick={(e)=>{
                setvalue(value+e.target.value)
              }}
              className={spcChar}
              />
            <input
            id="equl"
              type="button"
              value="="
              onClick={(e)=>{
                try {
                  
                  setvalue(eval(value))
                  // if(e.key<=9){
                  //   setvalue(e.key)
                  // }
                } catch (error) {
                  setvalue("ERROR")
                }
              }}
              className={arithOpe}
              />
            <input
              type="button"
              value="+"
              onClick={(e)=>{
                setvalue(value+e.target.value)
              }}
              className={arithOpe}
              />
          </div>
        </div>
      </div>

    </div>
  );
}

export default App;

// import "./App.css"; -- heart animation

// function App() {
  //   return (
    //     <div className=" App bg-indigo-200 w-full h-screen items-center justify-center flex backdrop-blur-sm">
    //       <div className="hover:scale-110 animate-spin transform transition duration-500 scale-150 h-2/4 w-1/6  opacity-50 rounded-xl ">
    //       <svg class="text-red-400 w-full h-auto fill-current overflow-hidden" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512">
    // 	  <path d="M0 190.9V185.1C0 115.2 50.52 55.58 119.4 44.1C164.1 36.51 211.4 51.37 244 84.02L256 96L267.1 84.02C300.6 51.37 347 36.51 392.6 44.1C461.5 55.58 512 115.2 512 185.1V190.9C512 232.4 494.8 272.1 464.4 300.4L283.7 469.1C276.2 476.1 266.3 480 256 480C245.7 480 235.8 476.1 228.3 469.1L47.59 300.4C17.23 272.1 .0003 232.4 .0003 190.9L0 190.9z"/>
    // 	</svg>
    //         </div>
    //     </div>
    //   );
    // }
    
    // export default App;
    