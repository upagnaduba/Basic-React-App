import React from 'react';

const InnovativeThoughts = () => {
  const handleSubmit = (event) => {
    event.preventDefault();
    const formData = new FormData(event.target);
    const thought = formData.get('thought');
    console.log('Submitted thought:', thought);
    // You can add further logic here to handle the submission of the thought
  };

  const handleClick = () => {
    document.getElementById('thoughtForm').submit();
  };

  return (
    <div className="innovative-thoughts-container">
      <h2>Share Your Innovative Thought</h2>
      <form onSubmit={handleSubmit} id="thoughtForm" className="thought-form">
        <label htmlFor="thought">Your Thought:</label>
        <input type="text" id="thought" name="thought" required />
        <button type="button" onClick={handleClick}>Submit</button>
      </form>
    </div>
  );
};

export default InnovativeThoughts;
