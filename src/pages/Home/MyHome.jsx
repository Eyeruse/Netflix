import React from 'react'
import MyHeader from '../../components/MyHeader/MyHeader'
import Footer from '../../components/Footer/Footer'
import Banner from '../../components/Banner/banner'
import RowList from '../../components/Rows/RowList/RowList';


function Home() {
  return (
    <div>
      <MyHeader />
      <Banner />
      <RowList />
      <Footer />
    </div>
  );
}

export default Home 
