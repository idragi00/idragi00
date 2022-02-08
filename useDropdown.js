import { useState,useEffect } from "react";

const useDropdown = (url1, url2) => {
    const [category, setCategory] = useState("");
    const [categories, setCategories] = useState([]);
    const [subTypes, setSubtypes] = useState([]);


    async function getClothesCategory() {
    const clothesCategory = await fetch(url1);
    const jsonCategory = await clothesCategory.json();
    const result = await jsonCategory.categories;
    console.log(jsonCategory);
    console.log(result);
    setCategories(result);
  }

  function getClothesByCategory() {
    const response = fetch(url2+category).then((value) => value.json().then((v) => setSubtypes(v[category])));
  } 
  

  useEffect(() => {
    getClothesCategory();
    getClothesByCategory();
  }, [category]);

return {setCategory,categories,subTypes}

}

export default useDropdown;