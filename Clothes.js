import React, { useState, useEffect }  from 'react'
import useDropdown from './useDropdown';
import ShopItem from './components/ShopItem';



const Clothes = () => {
  
  const { setCategory, categories, subTypes} = useDropdown("http://demo7478611.mockable.io/categories","http://demo7478611.mockable.io/");
  const [items,setItems] = useState();
  const [category1,setCategory1] = useState(); 

   const fetchData = async (subType) => {
    const data = await fetch("http://demo7478611.mockable.io/"+category1+"/"+subType);
    const jsonData = await data.json();
    setItems(jsonData);
  }  
 
  return (
    <div>
      <br></br>
      <form>
        
      <select onChange={(e) => {
        console.log(e.target.value);
        console.log(categories);
        setCategory(e.target.value);
        setCategory1(e.target.value)
      }}
      
      >
        
        {categories.map((item) => (
          <option key={item} value={item}>{item}</option>
        ))}
      </select>

      <select onChange={(e) => {
        console.log(e.target.value);
        console.log(subTypes);
        fetchData(e.target.value)
        
      }}>
        {subTypes.map((item) => (
          <option key={item} value={item}>{item}</option>
        ))}
      </select>
      </form>
      <div>

        {items ? (items.map((item) => (
        <ShopItem props={item}/>
        ))):(<div>...</div>)
        }
      </div>
      
    </div>
  );
}

export default Clothes
