const BlogItem = (props) => {
    return (
        <div className="blogElement">
            <h1 className="header">{props.title}</h1>
            <p>{props.body}</p>
        </div>
    )
}

const BlogPosts = (props) => {
    return (<div className="div">
        {props.arr.map((item, i) => <BlogItem title={item.title} body={item.body} key={i}/>)}
    </div>
    )
}

function App(props) {
    return (<div>
        <h1 className="h1">Blog</h1>
        <BlogPosts arr={postsData} />
 </div>   )
}
const root = document.getElementById("root");
ReactDOM.render(<App />, root)