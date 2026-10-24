import Image from 'next/image';
import React from 'react';

const DestinationsDetailsPage = async({params}) => {
    const {id} = await params;

const res = await fetch(`http://localhost:8000/destination/${id}`)
const destination = await res.json()
// console.log(data);

    // console.log(id);
    return (
        <div>
           <Image src ={destination.imageUrl}
            alt="image"
             height= {400}
             width={600} />
        </div>
    );
};

export default DestinationsDetailsPage;