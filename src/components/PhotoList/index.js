import React, { useState } from 'react';
import Modal from '../Modal';

const PhotoList = ({ category }) => {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [currentPhoto, setCurrentPhoto] = useState();

  const [photos] = useState([
    {
      name: 'Horiseon Site Refactor',
      category: 'portfolio',
      deployed: 'https://rookoyole.github.io/mod1seo/',
      repo: 'https://github.com/rookoyole/mod1seo'
    },
    {
      name: 'Kyle Ryans Portfolio',
      category: 'portfolio',
      deployed: 'https://rookoyole.github.io/portfolio/',
      repo: 'https://github.com/rookoyole/portfolio'
    },
    {
      name: 'Password Generator',
      category: 'portfolio',
      deployed: 'https://rookoyole.github.io/passgen/',
      repo: 'https://github.com/rookoyole/passgen'
    },
    {
      name: 'Javascript Code Quiz',
      category: 'portfolio',
      deployed: 'ttps://rookoyole.github.io/codequiz/',
      repo: 'https://github.com/rookoyole/codequiz'
    },
    {
      name: 'Daily Planner',
      category: 'portfolio',
      deployed: 'https://rookoyole.github.io/planner/',
      repo: 'https://github.com/rookoyole/planner'
    },
    {
      name: 'Lets Celebrate - Date Night Idea Generator',
      category: 'portfolio',
      deployed: 'https://aminaf1995.github.io/Lets-Celebrate/',
      repo: 'https://github.com/aminaf1995/Lets-Celebrate'
    },
    {
      name: 'Readme Generator',
      category: 'portfolio',
      deployed: 'https://drive.google.com/file/d/1hCtCJSkfsTzrBTzTyjJ4mqb3K9A3dyrh/view',
      repo: 'https://github.com/rookoyole/readme-gen'
    },
    {
      name: 'Team Roster Generator',
      category: 'portfolio',
      deployed: 'https://drive.google.com/file/d/1gTIoc3Ha0rXYsuYLW9qufrn-VNvZNnPb/view',
      repo: 'https://github.com/rookoyole/teamprofile'
    },
    {
      name: 'Note Taker Application',
      category: 'portfolio',
      deployed: 'https://note-takey.herokuapp.com/',
      repo: 'https://github.com/rookoyole/notetaker'
    },
    {
      name: 'Employee Tracker Database',
      category: 'portfolio',
      deployed: 'https://drive.google.com/file/d/1ejhiVmS1qDTaig-aI60YD22wUw1pOEnb/view/',
      repo: 'https://github.com/rookoyole/employeetracker'
    },
    {
      name: 'E-Commerce Back End',
      category: 'portfolio',
      deployed: 'https://drive.google.com/file/d/1iiKo1JnaprVdBitZSKo3ptK5A2kXPftM/view',
      repo: 'https://github.com/rookoyole/ecommerce'
    },
    {
      name: 'Tech Blog Full-Stack',
      category: 'portfolio',
      deployed: 'https://cryptic-river-67719.herokuapp.com/',
      repo: 'https://github.com/rookoyole/techblog'
    },
    {
      name: 'SnakChat - Rare Snacks Blog',
      category: 'portfolio',
      deployed: 'https://lit-anchorage-48237.herokuapp.com/',
      repo: 'https://github.com/rookoyole/snakchat'
    },
    {
      name: 'NoSQL Social Network API',
      category: 'portfolio',
      deployed: 'https://drive.google.com/file/d/1v5RggR_w5z3xWRdPfKpx6ERJlCLwpAwu/view',
      repo: 'https://github.com/rookoyole/social-api'
    },
    {
      name: 'Budget Tracker PWA',
      category: 'portfolio',
      deployed: 'https://mysterious-anchorage-68969.herokuapp.com/',
      repo: 'https://github.com/rookoyole/budgettracker'
    }
  ]);

  const currentPhotos = photos.filter((photo) => photo.category === category);

  const toggleModal = (image, i) => {
    setCurrentPhoto({ ...image, index: i });
    setIsModalOpen(!isModalOpen);
  };

  return (
    <div>
      {isModalOpen && <Modal onClose={toggleModal} currentPhoto={currentPhoto} />}
      <div className="flex-row">
        {currentPhotos.map((image, i) => (
          <img
            src={require(`../../assets/small/${category}/${i}.jpg`)}
            alt={image.name}
            className="img-thumbnail mx-1"
            onClick={() => toggleModal(image, i)}
            key={image.name}
          />
        ))}
      </div>
    </div>
  );
};

export default PhotoList;
