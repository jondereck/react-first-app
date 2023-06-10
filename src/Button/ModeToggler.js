function ModeToggler() {
    let darkModeOn = true;
    const darkMode = <h1>Dark mode enabled</h1>
    const lightMode = <h1>Light mode enabled</h1>

    function handleClick() {
        darkModeOn = !darkModeOn
        {darkModeOn ? console.log('Dark mode on') : console.log('Light mode on')}
    }
    return (
        <div>
            {darkModeOn ? darkMode : lightMode}
            <button onClick={handleClick}>
                Dark mode
            </button>
        </div>
    )

}

export default ModeToggler