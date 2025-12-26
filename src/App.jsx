import "./App.css"
// import Title from "./Title.jsx" // import
import ProductTab from "./ProductTab.jsx"

// componenet's 

function Description() {
  return <p>This is my First React Project 😭</p>
}

function Button() {
  return <button>Click Me ✅</button>
}

function App() {
  return (
    // to use multiple component the better way is to use a div ... 

    // <div className="mainbox" id="mainbox">
    //   <Title/>
    //   <Description/>
    //   <Button/>
    //   <img src="" alt="image-1" />
    // </div>

    // <>
    //   <Title />
    //   <Description />
    //   <Button />
    //   {/* <img src="" alt="image-1" /> */}
    // </>

    <>
      <ProductTab/>
    </>
  )
}

export default App
