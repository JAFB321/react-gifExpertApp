import React, {useState} from 'react'
import { AddCategory } from './components/AddCategory';
import { GifGrid } from './components/GifGrid';

export const GifExpertApp = () => {

    // const categories = ['One Punch', 'Naruto', 'Dragon Ball'];

    const [categories, setCategories] = useState(['One Punch Man']);
    

    return(
        <>
        <h2>GifExpertApp</h2>
        <AddCategory setCategories={setCategories}/>
        <hr/>

        <ol>
            {
             categories.map( (category) => 
                 <GifGrid key={category} category={category}/>
            )
            }
        </ol>

        </>
    );

}

export default GifExpertApp;

