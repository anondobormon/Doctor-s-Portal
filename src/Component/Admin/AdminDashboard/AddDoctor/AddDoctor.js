import axios from 'axios';
import React, { useState } from 'react';

const AddDoctor = () => {

    const [imageURL, setImageUrl] = useState({})
    const [doctor, setDoctor] = useState({})


    const handleUpload = (e) => {
        console.log(e.target.files[0]);
        const imageData = new FormData();
        imageData.set('key', '54f8ad2746e4238bf47c906854d1de16');
        imageData.append('image', e.target.files[0])

        axios.post('https://api.imgbb.com/1/upload', imageData)
            .then(function (res) {
                setImageUrl(res.data.data.display_url)
                console.log(res.data.data.display_url)
            })
    }

    const handleBlur = (e) => {
        const newInfo = { ...doctor }
        newInfo[e.target.name] = e.target.value;
        setDoctor(newInfo)
    }

    const handleSubmit = () => {
        const eventData = { ...doctor }
        eventData.img = imageURL
        console.log(eventData);
        fetch('http://localhost:5000/addDoctor', {
            method: 'POST',
            headers: { 'content-type': 'application/json' },
            body: JSON.stringify(eventData)
        })
            .then(res => res.json())
            .then(res => {
                alert('Doctor Added')
            })

    }



    return (
        <div>
            <div className="addDoctor col-4 m-5">
                <div class="mb-3">
                    <label for="exampleInputEmail1" class="form-label">Doctor's Name</label>
                    <input onBlur={handleBlur} name='name' type="text" class="form-control" id="exampleInputEmail1" />
                </div>
                <div class="mb-3">
                    <label for="exampleInputEmail1" class="form-label">Specialty</label>
                    <select onBlur={handleBlur} name='specialty' class="form-select" aria-label="Default select example" id='exampleInputEmail1'>
                        <option selected>Open this select menu</option>
                        <option value="Cardiology">Cardiology</option>
                        <option value="Neurology">Neurology</option>
                        <option value="Orthopedics">Orthopedics</option>
                        <option value="Radiology">Radiology</option>
                        <option value="Surgery">Surgery</option>
                        <option value="Urology">Urology</option>
                        <option value="Psychological">Psychological</option>
                        <option value="Dental">Dental</option>
                    </select>
                </div>
                <div class="mb-3">
                    <label for="exampleInputPassword1" class="form-label">Email</label>
                    <input onBlur={handleBlur} name='email' type="email" class="form-control" id="exampleInputPassword1" />
                </div>
                <div class="mb-3">
                    <label for="exampleInputPassword1" class="form-label">Phone Number</label>
                    <input onBlur={handleBlur} name='phone' type="number" class="form-control" id="exampleInputPassword1" />
                </div>
                <div class="mb-3">
                    <label for="exampleInputPassword1" class="form-label">Upload Image</label>
                    <input onChange={handleUpload} type="file" class="form-control" id="exampleInputPassword1" />
                </div>

                <button onClick={handleSubmit} class="btn btn-primary">Submit</button>
            </div>

        </div>
    );
};

export default AddDoctor;