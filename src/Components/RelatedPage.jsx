import React from 'react';

const RelatedPage = () => {
    return (
        <div className="text-white p-8">
            <h1 className="text-4xl font-bold mb-4">自己紹介</h1>
            <p className="text-lg">ここに自己紹介が入ります。</p>
        </div>
    );
};

export default RelatedPage;

import React, { useState, useEffect } from 'react';
import Header from './Header';

const RelatedPage = ({ title, description, link }) => {
  const [relatedData, setRelatedData] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    fetch(link)
      .then(response => {
        if (!response.ok) {
          throw new Error('Failed to fetch related page data');
        }
        return response.json();
      })
      .then(data => {
        setRelatedData(data);
        setLoading(false);
      })
      .catch(error => {
        setError(error.message);
        setLoading(false);
      });
  }, [link]);

  if (loading) {
    return <div>Loading related page...</div>;
  }

  if (error) {
    return <div>Error: {error}</div>;
  }

  return (
    <div className="related-page">
      <h2>{title}</h2>
      <p>{description}</p>
      {relatedData && (
        <div className="related-content">
          {/* Render related data here */}
          <pre>{JSON.stringify(relatedData, null, 2)}</pre>
        </div>
      )}
    </div>
  );
};

export default RelatedPage;