import React from 'react';

const Items = ({catalogue})  => {
    console.log(catalogue);
    return (
        <div>
            catalogue
            {
                catalogue.map(item => {

                    return (
                        <div key={item.id}>
                            <div>{item.id}</div>
                            <div>{item.createdAt}</div>
                            <div>{item.name}</div>
                        </div>
                    )
                })
            }
        </div>
    )
}

export default Items;