import React from 'react';

const Header = ({ currentPage, onChangePage, onSave, onReset }) => {
  const handlePageChange = (page) => {
    onChangePage(page);
  };

  const handleSave = () => {
    onSave();
  };

  const handleReset = () => {
    onReset();
  };

  return (
    <header className="bg-primary py-3">
      <div className="container text-center text-white">
        <h1 className="mb-0">Employee Profile</h1>
        <p className="mb-0 sub-text">Some info may be visible to other people</p>
      </div>
      <div className="container d-flex justify-content-center mt-3">
        <button onClick={() => handlePageChange('Personal')} className="btn btn-outline-light mr-2">Personal</button>
        <button onClick={() => handlePageChange('Documents')} className="btn btn-outline-light">Documents</button>
      </div>
      <div className="container d-flex justify-content-end mt-3">
        <button onClick={handleSave} className="btn btn-success mr-2">Save</button>
        <button onClick={handleReset} className="btn btn-danger">Reset</button>
      </div>
    </header>
  );
};

export default Header;