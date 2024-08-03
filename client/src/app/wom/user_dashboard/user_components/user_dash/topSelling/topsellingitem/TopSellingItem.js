import React from 'react'
import { Link } from 'react-router-dom'
function TopSellingItem({ item }) {
  return (
    <tr>
    <th scope='row'>
        <Link to=" " className='a'>
            {item.productName}
        </Link>
    </th>
    <td>
        <Link to=" " className='text-primary fw-bold'>
            {item.company}
        </Link>
    </td>
    <td className='fw-bold'>{item.engineCode}</td>
</tr>
  )
}

export default TopSellingItem