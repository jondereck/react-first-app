import Colar from "./Colar";
function Bowl(props) {
    return ( 
    <div>
         <span>
            {props.bowlShape}-shaped bowl, and it's currently {props.bowlStatus} 
            with a <Colar color="blue" />
        </span>
    </div>
    );
}

export default Bowl