import React from 'react';
import FeedContainer from '../components/FeedContainer';

const Home: React.FC = () => {
  return (
    <div className="flex min-h-screen">
      {/* Première partie - Liens */}
      <div className="w-1/3 bg-gray-100 p-4"></div>

      {/* Deuxième partie - Feed */}
      <div className="w-1/3 bg-white p-4">
        <FeedContainer />
      </div>

      {/* Troisième partie - Messages privés et liste d'amis */}
      <div className="w-1/3 bg-gray-100 p-4">
        {/* Contenu des messages privés et liste d'amis ici */}
      </div>
    </div>
  );
};

export default Home;
