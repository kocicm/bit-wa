const ShoppingItem = (props) => {
    return (
        <li>{props.title}</li>
    )
}

const ShoppingList = (props) => {
    return (
        <ul>
            {props.items.map((item, i) => <ShoppingItem title={item} key={i} />)}
        </ul>
    )
}

const App = function (props) {
    return (
        <div>
            <h1>naslov</h1>
            <ShoppingList items={["fdg", "ada", "hjkl"]} />
        </div>
    )
}

const root = document.getElementById("root");


ReactDOM.render(<App />, root)