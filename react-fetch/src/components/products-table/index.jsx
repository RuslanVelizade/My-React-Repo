import React from 'react'

const ProductsTable = ({products}) => {
  return (
    <>
      <table>
        <thead>
          <tr>
            <th>ID</th>
            <th>Company Name</th>
            <th>Country</th>
            <th>City</th>
          </tr>
        </thead>
        <tbody>
          {products?.map((item) => {
            return  (
              <tr key={item.id}>
                <td>{item.id }</td>
          </tr>
            )
          })}
        </tbody>
    </table>
    </>
  )
}

export default ProductsTable