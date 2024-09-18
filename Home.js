import React, { useState } from 'react';
import { Link } from 'react-router-dom';

const Home = () => {
    const [selectedFile, setSelectedFile] = useState(null);
    const [previewImage, setPreviewImage] = useState(null);

    const handleFileChange = (event) => {
        const file = event.target.files[0];

        // Update the state with the selected file
        setSelectedFile(file);

        // Create a preview URL for the selected file
        const previewURL = URL.createObjectURL(file);
        setPreviewImage(previewURL);
    };

    return (
        <div className='align1'>
            <h1 style={{ color: 'blue' }}><em>Select the image</em></h1>
            <div>
                <input type="file" onChange={handleFileChange} />
                {previewImage && (
                    <div>
                        <h2>Preview:</h2>
                        <li>Tomato early blind</li>
                        <h2>Treatment :</h2>
                        <li>Tomatoes that have early blight require immediate attention before the disease takes over the plants. Thoroughly spray the plant (bottoms of leaves also) with Bonide Liquid Copper Fungicide concentrate or Bonide Tomato & Vegetable. Both of these treatments are organic..
</li>
                        <img src={previewImage} alt="Selected Preview" style={{ maxWidth: '100%' }} />
                    </div>
                )}
                <Link to={{ pathname: '/submit', state: { selectedFile } }}>
                    <button className='a'>Submit</button>
                </Link>
            </div>
        </div>
    );
}

export default Home;
