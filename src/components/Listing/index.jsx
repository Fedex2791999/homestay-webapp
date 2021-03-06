import React, { useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { useLocation } from 'react-router-dom';
import Narbar from '../Home/Narbar';
import TopHotel from '../Home/TopHotel';
import Footer from '../Home/Footer';
import LoadingIndicator from '../LoadingIndicator';
import { getHotel } from '../../store/actions/authAction';
import './styles.scss';

const Listing = () => {
  const { listHotel } = useSelector(state => state.auth);
  const location = useLocation();
  const dispatch = useDispatch();

  useEffect(() => {
    if (location.pathname === '/listing' && listHotel === null) {
      dispatch(getHotel());
    }
  }, [listHotel, location.pathname, dispatch]);

  return listHotel ? (
    <div>
      <Narbar />
      <div style={{ height: 64 }} />
      <TopHotel listHotel={listHotel} title="List Hotel: " loading={false} />
      <Footer />
    </div>
  ) : (
    <LoadingIndicator />
  );
};
export default Listing;
