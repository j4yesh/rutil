import React,{useState} from 'react'

export default function About(props) {
    const[mystyle,setstyle]=useState({
        
    })
    const[mode,setmode]=useState("DARK MODE");
    const changeTheme=()=>{
        console.log("chaning theme");
        if(mode==="DARK MODE"){
            let s={
            color: 'white',
            backgroundColor : 'black'
            }
            setstyle(s);
            setmode("LIGHT MODE");
        }else{
                let s={
                
                }
                setstyle(s);
                setmode("DARK MODE");
        }
    }
    const modifive=()=>{
        return "DarkMode";
    }

  return (
    <div classNameName="container">

    <h1 classNameName='my-3' style={mystyle}>About us </h1>
    <div className="accordion" id="accordionExample" style={mystyle}>
    <div className={`accordion-item" style={mystyle} text-${(props.mode=='light')?'dark':'light'}`}>
        <h2 className="accordion-header" id="headingOne">
        <button className="accordion-button" style={mystyle} type="button" data-bs-toggle="collapse" data-bs-target="#collapseOne" aria-expanded="true" aria-controls="collapseOne">
            Accordion Item #1
        </button>
        </h2>
        <div id="collapseOne" className="accordion-collapse collapse show" aria-labelledby="headingOne" data-bs-parent="#accordionExample">
        <div className="accordion-body" style={mystyle}>
            <strong>This is the first item's accordion body.</strong> It is shown by default, until the collapse plugin adds the appropriate classNamees that we use to style each element. These classNamees control the overall appearance, as well as the showing and hiding via CSS transitions. You can modify any of this with custom CSS or overriding our default variables. It's also worth noting that just about any HTML can go within the <code>.accordion-body</code>, though the transition does limit overflow.
        </div>
        </div>
    </div>
    <div className="accordion-item" style={mystyle}>
        
    </div>
    <div className="accordion-item" style={mystyle}>
    </div>
    </div >
    </div>

    
  )
}
