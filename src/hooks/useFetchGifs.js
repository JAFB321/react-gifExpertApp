import { useState, useEffect } from "react"
import { getGifs } from '../helpers/getGifs'

export const useFetchGifs = (category) => {

    const [state, setState] = useState({
        data: [],
        loading: true
    });

    //OJO la funcion parametro del useEffect NO puede ser async
    useEffect(() => {

        getGifs(category).then((imgs) => {
            setState({
                data: imgs,
                loading: false
            });
        });


    }, [category]);



    return state;
}