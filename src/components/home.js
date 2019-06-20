import React from 'react';
import Header from './header';
import Lightbox from './lightbox';
import CarFilter from './carFilter';
import Footer from './footer';
import '../styles/container.scss'
import '../styles/home.scss';

const Home = ({
  brands, 
  models,
  years,
  car_information,
  className,
  handleChangeBrand,
  handleChangeModel,
  handleChangeYear,
  searchButton}) => {
  return (
    <div>
      <Header />
      <div className='container'>
        <Lightbox
          car_information={car_information}
          className={className}
        />
        <p className='information'>
          Para realizar o cálculo do valor do seu carro, preencha
          os dados abaixo e clique em "Consultar".
        </p>
        <CarFilter
          brands={brands}
          models={models}
          years={years}
          handleChangeBrand={handleChangeBrand}
          handleChangeModel={handleChangeModel}
          handleChangeYear={handleChangeYear}
          searchButton={searchButton}
        />
      </div>
      <Footer />
    </div>
  )

}

export default Home;
