/**Button handler clicked */

// function Btn() {
// const clickHandler = () => console.log('clicked')
//     return (
//         <button onClick={clickHandler}>
//             Click me
//         </button>
//     )
// }

// export default Btn 

/**Button handler mouse inline*/


// function Btn() {
//     return (
//         <button onMouseOver={() => console.log('second example')}>
//         An inline anonymous ES6 function event handler
// </button>
//     )
// }
//     export default Btn 

/**Event handler with ES6 */
    // function Btn() {
    //     const eventHandler = () => console.log('test')
    //     return (
    //         <button onClick={eventHandler}>
    //             Click me
    //         </button>
    //     )
    // }
    //     export default Btn 

  /** Guess 1 to 3  */
    function Btn() {
       function eventHandler() {
            let randomNum = Math.floor(Math.random() * 3) + 1;
            console.log(randomNum);
            let userInput = prompt('type a number'); 
            alert(`Computer number: ${randomNum}, Your guess: ${userInput}`);
    }
      return (
        <div>
            <h1>Guess 1 to 3</h1>
        <button onClick={eventHandler}>
            Guess the number between 1 and 3. 
        </button>
        </div>
      ) 
       
    }
        export default Btn 
    