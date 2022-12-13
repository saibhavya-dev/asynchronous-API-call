import React, { useState, useEffect } from 'react'
export default function Emp() {
  const [emp, initEmp] = useState([])
  const fetchData = async () => {
    const response = await fetch('https://jsonplaceholder.typicode.com/todos')
    if (!response.ok) {
      throw new Error('Data could not be fetched!')
    } else {
      return response.json()
    }
  }
  useEffect(() => {
    fetchData()
      .then((res) => {
        initEmp(res)
      })
      .catch((e) => {
        console.log(e.message)
      })
  }, [])
  return (
    <div className="row">
      <h2 className="mb-3">Asynchronous API call to fetch data</h2>
      {emp.map((item, idx) => {
        return (
          <div className="col-lg-3 col-md-4 col-sm-6 mb-3" key={idx}>
            <div className="card h-100">
             
            <ul className="list-group list-group-flush">
                <li className="list-group-item">
                  <strong>Designation:</strong> {item.title}
                </li>
                <li className="list-group-item">
                  <strong>Employee ID:</strong> {item.id}
                </li>
              
              </ul>
            </div>
          </div>
        )
      })}
    </div>
  )
}
