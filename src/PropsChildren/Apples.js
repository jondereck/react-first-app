function Apples(props) {
    const styles = {
        color: "tomato",
        fontSize: "40px"
    }
      return (
        <div className="promo-section">
            <div>
                <h2 style = {styles}>These apples are: {props.color}</h2>
                </div>
                <div>
                <h3>There are {props.number} apples.</h3>
            </div>
        </div>
      )
    }
    export default Apples