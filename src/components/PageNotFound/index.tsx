import * as React from 'react';
import { SFC } from 'react';
import { Link } from 'react-router-dom';

const PageNotFound: SFC = () => {
  return (
    <div className="section-page-not-found">
      <h3>Oops!!</h3>
      <p>Sorry, there seems to be something wrong with the URL.</p>
      <Link to="/" className="text-primary text-underline">
        <i className="fa fa-arrow-left" /> Go to Main Page
      </Link>
    </div>
  );
};

export { PageNotFound };
