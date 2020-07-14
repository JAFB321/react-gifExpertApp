import React from 'react'

export const GifGridItem = ({ id, url, title }) => {

    // console.log(id, url, title);


    return (
        <div className="card animate__animated animate__flipInX">
            <img src={url} alt="No cargoxd" />
            <p>{title ? title : 'Sin Titulo'}</p>
        </div>
    )
}
