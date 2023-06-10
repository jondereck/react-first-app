import Bowl from "./Bowl";
function Puppy(props) {
    return (
        <div>
            {props.name} has {props.bowlShape} and <Bowl bowlShape="square" bowlStatus="empty " />
        </div>
     );
}

export default Puppy