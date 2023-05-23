import React, { useEffect, useState } from 'react'
import axios from 'axios'
import { Link } from 'react-router-dom'


//useEffect, axios, useState, navigation

const Dashboard = () => {
    const [components, setComponents] = useState([])
    const [deleted, setdeleted] = useState(false)
    useEffect(() => {
        axios.get('http://localhost:8000/api/allComponents')
            .then((res) => {
                console.log('This is our dash get request: ', res.data)
                setComponents(res.data)
            })
            .catch((err) => {
                console.log("This is the dash catch error: ", err)
            })
    }, [deleted]);

    const deleteComponent = (e, id) => {
        console.log(`This will Delete Item: ${id}`)
        axios.delete(`http://localhost:8000/api/delete/${id}`)
            .then(res => {
                console.log(`${id} was deleted`)
                setdeleted(!deleted)
            })
            .catch(err => {console.log("this is the delete person err:", err)});
    }

    return (
        <div>
            <h1>Authors</h1>
            <hr />
            <table className="table">
                <thead>
                    <tr>
                        <th scope="col">Last Name</th>
                        <th scope="col">First Name</th>
                        <th scope="col">Actions</th>
                    </tr>
                </thead>
                <tbody>{
                    components.map((component,i) => {
                        return (
                            <tr key={i}>
                        <td>{component.lastName}</td>
                        <td>{component.firstName}</td>
                        <td><Link to={`/updateComponent/${component._id}`} className='btn btn-dark' >Edit</Link> |  
                        <button onClick={(e)=>{deleteComponent(e, component._id)}}  className='btn btn-danger' >Delete</button></td>
                    </tr>
                        )
                    })
                }
                </tbody>
            </table>
            <p> 
                <Link className="btn btn-dark" to={'/create'} >Add Author</Link> 
            </p> 
        </div>
    )
}


export default Dashboard