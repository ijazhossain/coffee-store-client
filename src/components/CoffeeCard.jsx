import React from 'react';
import { Link } from 'react-router-dom';
import Swal from 'sweetalert2';

const CoffeeCard = ({ coffee }) => {
    const { _id, name, quantity, supplier, taste, category, details, photo } = coffee;
    const handleDelete = (_id) => {
        console.log(_id)
        Swal.fire({
            title: 'Are you sure?',
            text: "You won't be able to revert this!",
            icon: 'warning',
            showCancelButton: true,
            confirmButtonColor: '#3085d6',
            cancelButtonColor: '#d33',
            confirmButtonText: 'Yes, delete it!'
        }).then((result) => {
            if (result.isConfirmed) {
                fetch(`http://localhost:5000/coffee/${_id}`, {
                    method: 'DELETE'
                })
                    .then(res => res.json())
                    .then(data => {
                        if (data.deletedCount > 0) {
                            Swal.fire(
                                'Deleted!',
                                'Your Coffee has been deleted.',
                                'success'
                            )
                        }
                    })

            }
        })


    }
    return (
        <div className="card card-side bg-base-100 shadow-xl flex items-center justify-between border border-l-yellow-300 my-5">
            <figure><img src={photo} alt="Movie" /></figure>
            <div className="card-body ">
                <h2 className="text-xl text-center">Name: {name}</h2>
                <p>Quantity: {quantity}</p>
                <p>Supplier: {supplier}</p>
                <p>Taste: {taste}</p>
                <p>Category: {category}</p>
                <p>Details: {details}</p>


            </div>
            <div className="btn-group btn-group-vertical space-y-4">
                <button className="btn btn-active">Details</button>
                <Link to={`/updateCoffee/${_id}`}>
                    <button className="btn">Edit</button>
                </Link>
                <button onClick={() => handleDelete(_id)} className="btn">x</button>
            </div>
        </div>
    );
};

export default CoffeeCard;