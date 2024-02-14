import React, { useState } from 'react';
import Header from './components/Header';
import PersonalPage from './components/PersonalPage';
import DocumentsPage from './components/DocumentsPage';

const App = () => {
  const [currentPage, setCurrentPage] = useState('Personal');

  return (
    <div>
      <Header currentPage={currentPage} onChangePage={setCurrentPage} />
      {currentPage === 'Personal' && <PersonalPage />}
      {currentPage === 'Documents' && <DocumentsPage />}
    </div>
  );
};

export default App;
