import './NotFound.sass';

import React from 'react';

const NotFound: React.FC = () => {
  return (
    <div className="notfound">
      <h2 className="notfound__header">404</h2>
      <p className="notfound__describe">Page not found</p>
    </div>
  );
};

export default NotFound;
