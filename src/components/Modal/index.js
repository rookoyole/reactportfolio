import React from 'react';

const Modal = ({ onClose, currentPhoto }) => {
  const { name, deployed, category, repo, index  } = currentPhoto;

  return (
    <div className="modalBackdrop">
      <div className="modalContainer">
        <h3 className="modalTitle">{name} </h3>
        <img src={require(`../../assets/large/${category}/${index}.jpg`)} alt="current category" />
        <p>
          <a href={deployed}>Deployed: {deployed}</a>
        </p>
        <p>
          <a href={repo}>GitHub Repo: {repo}</a>
        </p>
        <button type="button" onClick={onClose}>
          Close this modal
        </button>
      </div>
    </div>
  );
};

export default Modal;
