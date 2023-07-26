const simmer = () => {
    return <div className="simmer">
        <div className="res-container">
            {
               Array(10).fill().map((e,index) => (
                    <div className="box" key={index}>
                        
                    </div>
               ))
            }
        </div>
    </div>
}

export default simmer;