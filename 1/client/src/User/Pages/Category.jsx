import React from 'react'
import UserCards from '../Components/UserCards'

export default function Category() {
    const data = [
        {
            "_id": "64b9220ffd82e7fc615b134a",
            "BrandName": "Miller",
            "BrandImage": "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSXwRFefGvxtDf3tMDsGADSN-QfJgegSNoa_9PAJo949IEPWHdvA08kVFPqB3OOLGMApTk&usqp=CAU",
            "__v": 0
        },
        {
            "_id": "64c0f917e95a2a452eace38e",
            "BrandName": "Knoll",
            "BrandImage": "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcS3cHDJI_B1rx6z4Uy3A769iNCzRGpbab5v9A&usqp=CAU",
            "__v": 0
        },
        {
            "_id": "64b9220ffd82e7fc615b134a",
            "BrandName": "Miller",
            "BrandImage": "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSXwRFefGvxtDf3tMDsGADSN-QfJgegSNoa_9PAJo949IEPWHdvA08kVFPqB3OOLGMApTk&usqp=CAU",
            "__v": 0
        },
        {
            "_id": "64c0f917e95a2a452eace38e",
            "BrandName": "Knoll",
            "BrandImage": "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTifJQa8kt7gvxotVes9NlQRxgteroUPtxj0A&usqp=CAU",
            "__v": 0
        },
    ]

    return (
        <div className="container my-5">
            <div className="text-center">
                <h2>Category</h2>
                <hr className='m-auto w-25 h-35  mb-2' style={{ color : '#01F9C6' }} />
                <small className="text-secondary">Lorem, ipsum dolor sit amet consectetur adipisicing elit. Cum delectus magnam doloribus voluptatibus possimus corrupti aliquid itaque harum debitis ipsa!</small>
            </div>

            <div className="row my-5 " >
              

               {

                    
data.map((val, key) => <UserCards   key={key} image={val.BrandImage} name={val.BrandName} />)
}

             


{/* {data.map((item) => (
        <div key={item._id}>
          <h2>{item.BrandName}</h2>
          <img
            src={item.BrandImage}
            alt={item.BrandName}
            style={{ width: '200px' }} 
          />
        </div>
      ))} */}
            </div>
        </div>
    )
}
