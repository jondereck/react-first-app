const style = {
    border: '1px solid #ccc',
    borderRadius: '20px',
    boxShadow: '0 2px 4px rgba(0, 0, 0, 0.1)',
    padding: '16px',
    backgroundColor: '#fff'
  }

const Card = (props) => {
    return (
        <div style={style}>
            <h2>{props.h2}</h2>
            <h3>{props.h3}</h3>
        </div>
    )
}

export default Card