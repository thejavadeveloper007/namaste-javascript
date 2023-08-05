import { useState } from "react"

const Section =  (props) =>{
    const { title, description, isVisible, setIsVisible } = props;
    return(
        <div className="boder border-black m-3 p-3">
            <h1 className="text-xl font-bold">{title}</h1>
            {
                isVisible ? (<button onClick={() =>setIsVisible()} className="cursor-pointer underline">Hide</button>)  
                : (<button onClick={() =>setIsVisible()} className="cursor-pointer underline">Show</button>)
            } 
            { isVisible && <p className="italic">{description}</p> }
        </div>
    )
}

const instamart = () =>{
    const [visibleSection, setVisibleSection] = useState("advice");

    // const [sectionConfig, setSectionConfig] = useState({
    //     showAdvice: false,
    //     showGuideline: false,
    //     showFeatures: false
    // })
    return (
        <div>
        <h1>Instamart</h1>
        <h2>It is an instant delivery service.</h2>
        <Section 
        title={"Advice"} 
        description={"hey there I don't want this silly mistake once again. take care of the same in your future task and be a good one to me and the company as well"}
        isVisible={visibleSection === "advice"}
        setIsVisible={()=>
            visibleSection === "advice" ? setVisibleSection("") : setVisibleSection("advice")
        }
        ></Section>
        <Section 
        title={"Guideline"} 
        description={"A guideline is provide the essentail things to take care of and help us to understand the enviornment of the job."}
        isVisible={visibleSection === "guideline"}
        setIsVisible={()=>
           visibleSection === "guideline" ? setVisibleSection("") : setVisibleSection("guideline")
        }
        ></Section>
        <Section 
        title={"Features"} 
        description={"A guideline is provide the essentail things to take care of and help us to understand the enviornment of the job."}
        isVisible={visibleSection === "features"}
        setIsVisible={()=>
         visibleSection === "features" ? setVisibleSection("") : setVisibleSection("features")
        }
        ></Section>
    </div>
    )  
}

export default instamart;