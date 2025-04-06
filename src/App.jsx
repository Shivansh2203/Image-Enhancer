import Home from "./Components/Home"
function App() {

  return (
    <div className='flex flex-col items-center justify-center min-h-screen bg-cyan-200 py-8 px-4'>
      <div className="text-center mb-8">
        <h1 className="text-5xl mb-4 text-gray-500 font-bold">AI <span className="hover:text-orange-500">Image</span> Enhancer {" "}</h1>
        <p className="text-lg text-gray-500">Upload Your Image</p>
      </div>
      <Home/>
      <div className="text-sm text-gray-400 mt-8">
      Powred by @<span className="hover:text-orange-500">Shivansh</span> 
      </div>
    </div>
  )
}

export default App
