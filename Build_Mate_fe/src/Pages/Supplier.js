import React, { useState } from 'react';
import './Supplier.css';
import { useNavigate } from 'react-router-dom';
import supimg from '../Components/Assets/SupImg.jpg';
import IconImg from '../Components/Assets/LogoCopy.jpeg';
import Search from '../Components/Assets/search.png';
import Navbar from '../Components/Navbar/Navbar';
import Footer from '../Components/Footer/footer';

const SupplierCard = ({ name, location, handleMoreDetails }) => (
  <div className='sup-scon1'>
    <img className='sup-img' src={IconImg} alt='Supplier' />
    <div className='sup-box'>
      <h2 className="sup-name" style={{ fontSize: '30px' }}>{name}</h2>
      <p className="sup-title">{location}<br /><span className="small">Colombo 01</span></p>
      <button className="pro-md" onClick={handleMoreDetails}>More Details</button>
    </div>
  </div>
);

export default function Suppliers() {
  const [activeButton, setActiveButton] = useState(1);
  const [isSearching, setIsSearching] = useState(false);
  const [searchQuery, setSearchQuery] = useState('');

  const navigate = useNavigate();

  const handleButtonClick = (buttonIndex) => {
    setActiveButton(buttonIndex);
  };

  const handleSearchClick = () => {
    setIsSearching(true);
  };

  const handleSearchChange = (e) => {
    setSearchQuery(e.target.value);
  };

  const handleSearchBlur = () => {
    if (searchQuery === '') {
      setIsSearching(false);
    }
  };

  const handleMoreDetails = () => {
    navigate('../Pages/materialProfile');
  };

  return (
    <div>
      <Navbar />
      <div className='home_sup'>
        <img className='sup-mimg' src={supimg} alt='Background' style={{ height: '100%', background: 'cover' }} />
        <div className='sup-content'>
          <h1 className='sup-topic'>Discover Top Suppliers for Your Construction Essentials!</h1>
          <p className='sup-subtopic1'>
            Choose your path to construction excellence: select the best services, materials, or both for your project with Buildmate+. Streamline your decisions, empower your vision, and build with confidence.
          </p>

        </div>
      </div>
      <div className='pro-content01'>
        <p className='pro-subtopic'>Building Tomorrow Together:<br /><span className="larger">Empower Your Supply Chain with Buildmate+</span></p>
      </div>
      <div className='sup-body03'>
        <div className='sup-Subbody02'>
          <div className='pro-st2'>Supplier Types</div>
          <button className={`pro-con1-t1 ${activeButton === 1 ? 'active' : ''}`} onClick={() => handleButtonClick(1)}>Material Supplier</button>
          <br />
          <button className={`pro-con1-t1 ${activeButton === 2 ? 'active' : ''}`} onClick={() => handleButtonClick(2)}>Service Supplier</button>
          <br />
        </div>
        <div className='sup-frame01'>
          <div className={`frame1 ${activeButton === 1 ? 'active' : ''}`}>
            <h1 className='mat1'>Material Suppliers</h1>
            <div className='sup-searchContainer'>
              <div className='sup-search' onClick={handleSearchClick}>
                {isSearching ? (
                  <input
                    type='text'
                    className='search-input'
                    value={searchQuery}
                    onChange={handleSearchChange}
                    onBlur={handleSearchBlur}
                    autoFocus
                  />
                ) : (
                  <>
                    <img className='searchImg' src={Search} alt='searchImg' style={{ width: '20px', marginLeft: '5%' }} />
                    <p style={{ margin: 'auto', fontWeight: '600' }}>Search</p>
                  </>
                )}
              </div>
            </div>
            <h1 className='mat4'>Nearest Material Suppliers</h1>
            <div className='container1'>
              <SupplierCard name="CONMAT" location="CONMAT PVT LIMIT" handleMoreDetails={handleMoreDetails} />
              <SupplierCard name="CONMAT" location="CONMAT PVT LIMIT" handleMoreDetails={handleMoreDetails} />
              <SupplierCard name="CONMAT" location="CONMAT PVT LIMIT" handleMoreDetails={handleMoreDetails} />
            </div>
          </div>
          <div className={`frame1 ${activeButton === 2 ? 'active' : ''}`}>
            <h1 className='mat1'>Service Suppliers</h1>
            <div className='sup-searchContainer'>
              <div className='sup-search' onClick={handleSearchClick}>
                {isSearching ? (
                  <input
                    type='text'
                    className='search-input'
                    value={searchQuery}
                    onChange={handleSearchChange}
                    onBlur={handleSearchBlur}
                    autoFocus
                  />
                ) : (
                  <>
                    <img className='searchImg' src={Search} alt='searchImg' style={{ width: '20px', marginLeft: '5%' }} />
                    <p style={{ margin: 'auto', fontWeight: '600' }}>Search</p>
                  </>
                )}
              </div>
            </div>
            <h1 className='mat4'>Nearest Service Suppliers</h1>
            <div className='container1'>
              <SupplierCard name="CONMAT" location="CONMAT PVT LIMIT" handleMoreDetails={handleMoreDetails} />
              <SupplierCard name="CONMAT" location="CONMAT PVT LIMIT" handleMoreDetails={handleMoreDetails} />
              <SupplierCard name="CONMAT" location="CONMAT PVT LIMIT" handleMoreDetails={handleMoreDetails} />
            </div>
          </div>
        </div>
      </div>
      <Footer />
    </div>
  );
}
