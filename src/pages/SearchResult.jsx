import React, { useState , useEffect } from 'react'
import Nav from '../components/Nav';
import { useLocation } from 'react-router-dom';
import FlightDetails from '../components/FlightDetails';
import Sorting from '../components/Sorting'
import axios from 'axios';

function SearchResult() {

  const [flightList, setflightList] = useState([]);
  const [selectedSort, setSelectedSort] = useState('Cheapest');
  const location = useLocation();

  console.log(location.state.total_passenger)

  useEffect(() => {
    const fetchData = async () => {
        const sort = selectedSort;
        const response = await axios.get(
          `http://localhost:8000/select_flight?sort_by=${sort}`
        );
        setflightList(response.data);
    };

    fetchData();
  }, [selectedSort]);

  const handleSortChange = (newSort) => {
    setSelectedSort(newSort);
  };

  return (
    <div>
      <Nav />
      <div className="flex justify-center">
        <Sorting onSortChange={handleSortChange} />
      </div>
      {Object.keys(flightList).map(flightKey => (
        <div className="flex justify-center" key={flightKey}>
          <FlightDetails flight_info={flightList[flightKey]} />
        </div>
      ))}
    </div>
  );
}

export default SearchResult