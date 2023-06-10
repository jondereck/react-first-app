import React from "react";

export default function FruitCounter(props) {
        return (
            <div>
                <h3>Total fruits: {props.fruits.length}</h3>
            </div>
        )
}