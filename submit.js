// SubmitPage.js
import React from 'react';

const SubmitPage = (props) => {
    const { location } = props;
    const selectedFile = location.state && location.state.selectedFile;

    return (
        <div>
            <h1>Submitted Image</h1>
            {selectedFile && (
                <img
                    src={URL.createObjectURL(selectedFile)}
                    alt="Selected"
                    style={{ maxWidth: '100%' }}
                />
            )}
        </div>
    );
}

export default SubmitPage;
