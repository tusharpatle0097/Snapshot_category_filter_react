import React, { useState } from 'react';
import Data from '../Data'

const Card = () => {

    const [fetchData, setFetchData] = useState(Data);
    const [filterAllData, setfilterAllData] = useState('');

    const FilterData = (cat) => {
        const updateData = Data.filter((curEle) => {
            return curEle.category === cat
        })
        setFetchData(updateData)
    }
    const filtermydata = fetchData.filter((items) =>
        items.title.toLowerCase().includes(filterAllData.toLowerCase())
    )

    return (
        <>
            <div className="container">
                <center>
                    <input onChange={(e) => setfilterAllData(e.target.value)} type="text" className='form-control mt-3' placeholder='Search...' />
                </center>
                <div className="row">
                    <div className='text-center my-4'>
                        <button className='m-3 btn btn-primary' onClick={() => FilterData("mens-clothing")} >men's clothing</button>
                        <button className='m-3 btn btn-primary' onClick={() => FilterData("jewelery")} >jewelery</button>
                        <button className='m-3 btn btn-primary' onClick={() => FilterData("electronics")} >electronics</button>
                        <button className='m-3 btn btn-primary' onClick={() => FilterData("women-clothing")} >women's clothing</button>
                        <button className='m-3 btn btn-primary' onClick={() => setFetchData(Data)}>All</button>

                    </div>
                    {
                        filtermydata.map((items, index) => {
                            return (
                                <div className="col-lg-3 my-3" key={index}>
                                    <div>
                                        <div className="card" style={{ width: "18rem" }}>
                                            <img src={items.image} className="card-img-top" alt="..." />
                                            <div className="card-body">
                                                <h5 className="card-title">{items.title}</h5>
                                                <p className="card-text">{items.description}</p>
                                                <a href="#" className="btn btn-primary">${items.price}</a>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            )
                        })

                    }
                </div>
            </div>

        </>
    )
}

export default Card





// import React, { useState } from 'react';
// import Data from '../Data';

// const Card = () => {
//   const [fetchData, setFetchData] = useState(Data);
//   const [filterAllData, setFilterAllData] = useState('');
//   const [selectedCategories, setSelectedCategories] = useState([]);

//   const FilterData = () => {
//     const updateData = Data.filter((curEle) => {
//       return selectedCategories.includes(curEle.category);
//     });
//     setFetchData(updateData);
//   };

//   const handleCategoryChange = (category) => {
//     if (selectedCategories.includes(category)) {
//       setSelectedCategories(selectedCategories.filter((cat) => cat !== category));
//     } else {
//       setSelectedCategories([...selectedCategories, category]);
//     }
//   };

//   const filterMyData = fetchData.filter((item) =>
//     item.title.toLowerCase().includes(filterAllData.toLowerCase())
//   );

//   return (
//     <>
//       <div className="container">
//         <center>
//           <input
//             onChange={(e) => setFilterAllData(e.target.value)}
//             type="text"
//             className="form-control mt-3"
//             placeholder="Search..."
//           />
//         </center>
//         <div className="row">
//           <div className="text-center my-4">
//             <label>
//               <input
//                 type="checkbox"
//                 value="mens-clothing"
//                 checked={selectedCategories.includes('mens-clothing')}
//                 onChange={() => handleCategoryChange('mens-clothing')}
//               />{' '}
//               Men's Clothing
//             </label>
//             <label>
//               <input
//                 type="checkbox"
//                 value="jewelery"
//                 checked={selectedCategories.includes('jewelery')}
//                 onChange={() => handleCategoryChange('jewelery')}
//               />{' '}
//               Jewelry
//             </label>
//             <label>
//               <input
//                 type="checkbox"
//                 value="electronics"
//                 checked={selectedCategories.includes('electronics')}
//                 onChange={() => handleCategoryChange('electronics')}
//               />{' '}
//               Electronics
//             </label>
//             <label>
//               <input
//                 type="checkbox"
//                 value="women-clothing"
//                 checked={selectedCategories.includes('women-clothing')}
//                 onChange={() => handleCategoryChange('women-clothing')}
//               />{' '}
//               Women's Clothing
//             </label>
//             <label>
//               <input
//                 type="checkbox"
//                 checked={selectedCategories.length === 0}
//                 onChange={() => {
//                   setSelectedCategories([]);
//                   setFetchData(Data);
//                 }}
//               />{' '}
//               All
//             </label>
//             <button className="m-3 btn btn-primary" onClick={FilterData}>
//               Apply Filters
//             </button>
//           </div>
//           {filterMyData.map((item, index) => {
//             return (
//               <div className="col-lg-3 my-3" key={index}>
//                 <div>
//                   <div className="card" style={{ width: '18rem' }}>
//                     <img src={item.image} className="card-img-top" alt="..." />
//                     <div className="card-body">
//                       <h5 className="card-title">{item.title}</h5>
//                       <p className="card-text">{item.description}</p>
//                       <a href="#" className="btn btn-primary">
//                         ${item.price}
//                       </a>
//                     </div>
//                   </div>
//                 </div>
//               </div>
//             );
//           })}
//         </div>
//       </div>
//     </>
//   );
// };

// export default Card;
