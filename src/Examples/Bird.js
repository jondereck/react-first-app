function Bird() { 
    
    const bird1 = new Audio(
            "https://upload.wikimedia.org/wikipedia/commons/9/9b/Hydroprogne_caspia_-_Caspian_Tern_XC432679.mp3" 
        ) 
        
    const bird2 = new Audio(
            "https://upload.wikimedia.org/wikipedia/commons/b/b5/Hydroprogne_caspia_-_Caspian_Tern_XC432881.mp3" 
        ) 

    const toggle1 = () =>{
        if(bird1.paused) {
            bird1.play();
        }else 
            bird1.pause();
    };
    
    const   toggle2 = () => {
        if(bird2.paused) {
            bird2.play();
        }else   
            bird2.pause();
    };



    return (
        <div>
            <h1>Bird Humming Sounds</h1>
            <button onClick={toggle1}>Caspian Tern 1</button>
            <button onClick={toggle2}>Caspian Tern 2</button>
        </div>
    );
}

export default Bird