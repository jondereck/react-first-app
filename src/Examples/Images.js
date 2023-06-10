import bahamas from '../assets/images/Palm.jpg'
import Logo from '../assets/images/Logo.png'
function Images() {
    const userImg = "https://picsum.photos/400/265"
    return (
        <div>
            <div className="container">
                <div className="row">
                    <h1>Showing random picture</h1>
                <img 
                    src={userImg}
                    alt="random pics"     
                />
                </div>
                </div>
                
            <div className="container">
                <h1>Example images</h1>
               
                <img
                    height={200}
                    width={200}
                    src={bahamas}
                    alt={'Bahamas'}/>

                <img 
                height={200}
                width={200}
                src={require('../assets/images/Palm.jpg')}
                alt='Bahamas'
                />  


             
            </div>
        </div>
    );

}
export default Images