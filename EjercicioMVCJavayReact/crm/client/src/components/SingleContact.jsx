

import React from 'react';

// Todos los estilos vienen de Materialize
//hacemos un componente con arrow funtion para evitarnos el return

const SingleContact = ({item}) =>{
    return(
        <div className="row">
    <div className="col s12 m6">
      <div className="card blue-grey darken-1">
        <div className="card-content white-text">
          <span className="card-title">{item.firstName} {item.lastName}</span>
        </div>
        <div className="card-action">
            <p>{item.email}</p>
        </div>
      </div>
    </div>
  </div>
    )
}

export default SingleContact;