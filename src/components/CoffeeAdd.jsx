import React from 'react';
import Swal from 'sweetalert2'

const CoffeeAdd = () => {
    const handleAddCoffee = (event) => {
        event.preventDefault();
        const form = event.target;
        const name = form.name.value;
        const quantity = form.quantity.value;
        const supplier = form.supplier.value;
        const taste = form.taste.value;
        const category = form.category.value;
        const details = form.details.value;
        const photo = form.photo.value;
        const newCoffee = { name, quantity, supplier, taste, category, details, photo }
        console.log(newCoffee);
        // send data to server

        fetch('http://localhost:5000/coffee', {
            method: 'POST',
            headers: { 'content-type': 'application/json' },
            body: JSON.stringify(newCoffee)
        })
            .then(res => res.json())
            .then(data => {

                console.log(data);
                if (data.insertedId) {
                    Swal.fire({
                        title: 'Succss!',
                        text: 'User added successfully',
                        icon: 'error',
                        confirmButtonText: 'Cool'
                    })
                }
            });
    }
    return (
        <div>
            <h1 className='text-3xl font-semibold'>Add New Coffee</h1>
            <p className='my-7'>It is a long established fact that a reader will be distraceted by the readable content of a page when looking at its layout. The point of using Lorem Ipsum is that it has a more-or-less normal distribution of letters, as opposed to using Content here.</p>

            <form onSubmit={handleAddCoffee}>
                {/* form row */}
                <div className='md:flex mb-4'>
                    <div className="form-control md:w-1/2">
                        <label className="label">
                            <span className="label-text">Coffee name</span>
                        </label>
                        <label className="input-group ">

                            <input type="text" name="name" placeholder="Enter coffee name" className="input input-bordered w-full" />
                        </label>
                    </div>
                    <div className="form-control md:w-1/2 ml-4">
                        <label className="label">
                            <span className="label-text">Available Quantity</span>
                        </label>
                        <label className="input-group">

                            <input type="text" name="quantity" placeholder="Enter coffee chef" className="input input-bordered w-full" />
                        </label>
                    </div>
                </div>
                <div className='md:flex '>
                    <div className="form-control md:w-1/2">
                        <label className="label">
                            <span className="label-text">Supplier</span>
                        </label>
                        <label className="input-group">

                            <input type="text" name="supplier" placeholder="Enter coffee supplier" className="input input-bordered w-full" />
                        </label>
                    </div>
                    <div className="form-control md:w-1/2 ml-4">
                        <label className="label">
                            <span className="label-text">Taste</span>
                        </label>
                        <label className="input-group">
                            <input type="text" name="taste" placeholder="Enter coffee taste" className="input input-bordered w-full" />
                        </label>
                    </div>
                </div>

                <div className='md:flex '>
                    <div className="form-control md:w-1/2">
                        <label className="label">
                            <span className="label-text">Category</span>
                        </label>
                        <label className="input-group">

                            <input type="text" name="category" placeholder="Enter coffee category" className="input input-bordered w-full" />
                        </label>
                    </div>
                    <div className="form-control md:w-1/2 ml-4">
                        <label className="label">
                            <span className="label-text">Details</span>
                        </label>
                        <label className="input-group">
                            <input type="text" name="details" placeholder="Enter coffee details" className="input input-bordered w-full" />
                        </label>
                    </div>
                </div>
                <div className='w-full '>
                    <div className="form-control w-full">
                        <label className="label">
                            <span className="label-text">Photo</span>
                        </label>
                        <label className="input-group">
                            <input type="text" name="photo" placeholder="Enter photo link" className="input input-bordered w-full" />
                        </label>
                    </div>

                </div>

                <div className=" w-full">


                    <input type="submit" value="submit" className="btn btn-primary w-full rounded-lg mt-8" />

                </div>



            </form>
        </div>
    );
};

export default CoffeeAdd;