import React from 'react'
import '../userHistory.css'
import { Link } from 'react-router-dom'
function UserHistoryItem({item}) {
  return (
    <tr>
    {/* <th scope='row'>
        <Link to=" " className='a'>
            <img src={item.preview} alt="" />
        </Link>
    </th> */}
    <td>
        <Link to=" " className='text-primary fw-bold'>
            {item.productName}
        </Link>
    </td>
    <td>
        <Link to=" " className='text-primary fw-bold'>
            {item.company}
        </Link>
    </td>
    <td>{item.engineCode}</td>
    <td>{item.createDate}</td>
    <td>{item.deliveryDate}</td>
   
</tr>
  )
}

export default UserHistoryItem