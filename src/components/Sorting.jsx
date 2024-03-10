import React from 'react'

function Sorting({ onSortChange }){

    const handleSortChange = (event) => {
          const selectedSort = event.target.value;
          onSortChange(selectedSort);
        };

    return(
    <select className='bg-gray-100 w-1/6 rounded-3xl m-5 ' onChange={handleSortChange} required>
        <option value="Cheapest">Sort by : Cheapest</option>
        <option value="Fastest">Sort by : Fastest</option>
        <option value="Earliest">Sort by : Earliest</option>
    </select>
    )
}

export default Sorting;