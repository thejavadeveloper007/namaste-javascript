    // const heading = React.createElement("h1", {id:"heading"}, "hi from react!!"); //not an  html element anymore, its react object now
    const parent = React.createElement("div", 
                                        {id:"parent"}, 
                                        React.createElement("div",
                                                            {id:"child"},
                                                            ["ek din milogi tum...",React.createElement("h1",{},"it is h1 tag"),
                                                            React.createElement("h2",{},"it is h2 tag"),"tere bina jina saza ho gaya ni sanu..."] 
                                                            ))
                                                            
    const root = ReactDOM.createRoot(document.getElementById("root"));
    root.render(parent)