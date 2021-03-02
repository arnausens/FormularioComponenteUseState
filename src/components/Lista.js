import React, { Fragment} from 'react';

const Lista = () => {
    
    return(
        <Fragment>
            <div className="lista">
                <div className='names' id="nombres">
                    <h2>Name</h2>
                    <div className='name'></div>
                </div>
                <div className='names'>
                    <h2>LastName</h2>
                    <div className='apellido'></div>
                </div>
                <div className='names'>
                    <h2>Phone</h2>
                    <div className='telefono'></div>
                </div>
            </div>
        </Fragment>
    )  

}
export default Lista;

