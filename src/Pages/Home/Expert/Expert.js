import React from 'react';

const Expert = ({expert}) => {
    const{name, img} = expert
    return (
        <div class="card col-sm-12 col-md-6 col-lg-4" style={{ width: "18rem;"}}>
  <img src={img} class="card-img-top"
   alt="..."/>
  <div class="card-body">
    <h5>{name}</h5>
  </div>
</div>
    );
};

export default Expert;
