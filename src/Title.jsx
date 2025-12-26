function Title() {
    let name = "ALEX"
    return (
        <div>
            <h1>Hello Every 1 ...</h1>
            <h2>Hello Every 2...</h2>
            <h3>Hello Every 2...</h3>
            <h4>Hello Every 2...</h4>
            <p> 2 * 2 = {2*2} </p>
            <p>Hii ... {name}</p>
        </div>
    )
}

// function sum(x , y) {
//     return x + y 
// }

// export method 1 : this component to App.jsx 
export default Title

// export method 2 : this component to App.jsx 
// export {Title , sum}
// export {Title}