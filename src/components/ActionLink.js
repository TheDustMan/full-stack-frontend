function ActionLink()
{
    function handleClick(e) {
        e.preventDefault();
        console.log("You clicked!");
    }

    return (
        <a href="#" onClick={handleClick}>Click Me!</a>
    );
}

export default ActionLink;