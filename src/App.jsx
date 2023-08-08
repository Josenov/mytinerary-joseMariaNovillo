import './App.css'
import Carousel from './Components/Carousel'
import Layout from './Layouts/Layout'
import Welcome from './Pages/Welcome'



function App() {


  return (
    <>
      <Layout>
        <Welcome />
        <Carousel />      
      </Layout>
    </>
  )
}

export default App
