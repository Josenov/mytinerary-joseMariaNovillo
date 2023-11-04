import React from 'react'
import { useState, useEffect } from 'react'
import '../styles/carousel.css'


const Carousel = () => {

  const imgCities = [{
    title: "Destination1",
    city: "Bangkok",
    country: "Thailand",
    url: "https://a.cdn-hotels.com/gdcs/production172/d459/3af9262b-3d8b-40c6-b61d-e37ae1aa90aa.jpg?impolicy=fcrop&w=800&h=533&q=medium"
  },

  {
    title: "Destination2",
    city: "Paris",
    country: "France",
    url: "https://www.travelandleisure.com/thmb/SPUPzO88ZXq6P4Sm4mC5Xuinoik=/1500x0/filters:no_upscale():max_bytes(150000):strip_icc()/eiffel-tower-paris-france-EIFFEL0217-6ccc3553e98946f18c893018d5b42bde.jpg"
  },

  {
    title: "Destination3",
    city: "Dubai",
    country: "Emirates",
    url: "https://content.presspage.com/uploads/2431/1920_dubaiconnect.jpg?10000"
  },

  {
    title: "Destination4",
    city: "Amsterdam",
    country: "Netherlands",
    url: "https://www.eurodicas.com.br/wp-content/uploads/2019/06/capital-da-holanda.jpg"
  },

  {
    title: "Destination5",
    city: "Madrid",
    country: "Spain",
    url: "https://media.nomadicmatt.com/2023/madriditinerary.jpeg"
  },

  {
    title: "Destination6",
    city: "Rome",
    country: "Italy",
    url: "https://a.cdn-hotels.com/gdcs/production151/d623/a8b25d0d-64d5-402f-99f5-a58f483c38c6.jpg?impolicy=fcrop&w=800&h=533&q=medium"
  },

  {
    title: "Destination7",
    city: "London",
    country: "England",
    url: "https://cdn.britannica.com/01/94501-050-7C939333/Big-Ben-London.jpg"
  },

  {
    title: "Destination8",
    city: "Berlin",
    country: "Germany",
    url: "https://media.nomadicmatt.com/2022/wheretostayberlin.jpeg"
  },

  {
    title: "Destination9",
    city: "Cordoba",
    country: "Argentina",
    url: "https://www.serargentino.com/public/images/2020/11/16049512330-Crdoba-773x458.jpg"
  },

  {
    title: "Destination10",
    city: "New York",
    country: "USA",
    url: "https://1.bp.blogspot.com/-klHXHFbBkcg/Vh_oH8aFeyI/AAAAAAAADkI/WvdVpR4LWTc/s1600/CORT-NYC-StudyUSA07.jpg"
  },

  {
    title: "Destination11",
    city: "Rio de Janeiro",
    country: "Brazil",
    url: "https://travel2next.com/wp-content/uploads/brazil-cities-rio.jpg"
  },

  {
    title: "Destination12",
    city: "Khatmandu",
    country: "Nepal",
    url: "https://www.exoticca.com/es/blog/wp-content/uploads/2019/04/No-sabes-qu%C3%A9-ver-en-Katmand%C3%BA-Conoce-el-Nepal.jpg"
  }

  ]

  let [index, setIndex] = useState(0);

    const prevClick = () => {
      index > 0 ? setIndex(index - 4) : setIndex(8);
    }
  
    const nextClick = () => {
      index < 8 ? setIndex(index + 4) : setIndex(0);
    }

    const cardsPerPage = [0,1,2,3]


    useEffect(()=>{
      const timeCards = setInterval(()=>{
        if(index < 8){
          setIndex(index + 4)
        } else {
          setIndex(0)
        }
      }, 4000)
      return()=>{
        clearInterval(timeCards)
      }
    }, [index])
  

    return (
      <>
        <div className='card-container text-center flex justify-center '>
        <h2 className='title text-center text-bold  mb-2 w-3/4 md:w-full text-blue-900'>Popular MyTineraries</h2>
        </div>
        
        <div className='flex justify-center h-1/2 w-full gap-4' >
          <button className="btn bg-gray-300 hover:bg-gray-400 text-gray-800 font-bold py-2 px-4  mt-[50vh] rounded-l h-20 lg:mt-[50vh] m-1" onClick={prevClick}>❮</button>
          <div className='  w-5/6 grid  sm:grid-rows-2 grid-cols-1 sm:grid-cols-2 md:gap-4 mb-3 mt-2 sm:gap-1 gap-4'>
            {cardsPerPage.map((i) => (
              <a key={i} className='relative rounded-xl  border-2 border-double  '>
                <img
                  className='absolute rounded-xl object-cover object-center h-full w-full'
                  src={imgCities[index + i].url}
                />
                <div className='city relative p-10 sm:p-6 lg:p-8  rounded-xl text-xl lg:text-3xl'>
                  <p>
                    {imgCities[index + i].city}
                  </p>
                  <p className=" country sm:text-2xl">
                    {imgCities[index + i].country}
                  </p>
                </div>
              </a>
            ))}
          </div>
          <button className="btn bg-gray-300 hover:bg-gray-400 text-gray-800 font-bold py-2 px-4 mt-[50vh]  rounded-l h-20 lg:mt-[50vh] m-1" onClick={nextClick}>❯</button>
        </div>
      </>
    )
  }
  

export default Carousel