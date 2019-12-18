import * as React from 'react';
import { SFC } from 'react';

const PageNotFound: SFC = () => {
  return (
    <div className="section-page-not-found">
      <h3>Oops!!</h3>
      <p>Sorry, there seems to be something wrong with the URL.</p>
      <a href="/" className="text-primary text-underline">
        <i className="fa fa-arrow-left" /> Go to Main Page
      </a>
    </div>
  );
};

export { PageNotFound };
