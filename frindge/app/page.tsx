import React from 'react';

const Home: React.FC = () => {
    return (
        <div>
            <h1>Welcome to FridgeAI</h1>
            <form action="/api/upload" method="POST" encType="multipart/form-data">
                <label htmlFor="fridgeImage">Upload a picture of your fridge:</label>
                <input type="file" name="fridgeImage" id="fridgeImage" accept="image/*" required />
                <button type="submit">Submit</button>
            </form>
        </div>
    );
};

export default Home;
