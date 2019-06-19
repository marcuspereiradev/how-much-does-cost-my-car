import React from 'react';
import Home from './home';
import Information from './information';
import '../styles/container.scss'

const AppContent = ({brands, models, years, car_information, handleChangeBrand, handleChangeModel, handleChangeYear, SearchButton}) => (
  <div className=''>
    <Home
      brands={brands}
      models={models}
      years={years}
      handleChangeBrand={handleChangeBrand}
      handleChangeModel={handleChangeModel}
      handleChangeYear={handleChangeYear}
      SearchButton={SearchButton}
    />

    {car_information && <Information
      car_information={car_information}
    />}

  </div>
)

export default AppContent;
