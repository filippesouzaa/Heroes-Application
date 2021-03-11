import React from "react";
import "./modal.css";

const Modal = ({ selectedMovie, hideModal }) => {
  if (selectedMovie)
    return (
      <div className="modal">
        <div className="modal-body">
          <div className="modal-header">
            <span className="modal-title">{selectedMovie.title}</span>
            <span className="modal-date">{selectedMovie.release_date}</span>
          </div>
          <div className="main-modal">
            <div className="modal-content">
              <div>
                <span className="sinopse-style">Sinopse</span>
                <hr></hr>
                <p className="modal-description">{selectedMovie.overview}</p>
              </div>
              <div className="modal-info">
                <span className="sinopse-style">Informações</span>
                <hr></hr>
                <div className="more-information">
                  <div>
                    <p className="sinopse-style">Situação</p>
                    <p className="modal-result-info">Lançado</p>
                  </div>
                  <div>
                    <p className="sinopse-style">Idioma</p>
                    <p className="modal-result-info">
                      {selectedMovie.original_language.toUpperCase()}
                    </p>
                  </div>
                  <div>
                    <p className="sinopse-style">Duração</p>
                    <p className="modal-result-info">2:10</p>
                  </div>
                  <div>
                    <p className="sinopse-style">Orçamento</p>
                    <p className="modal-result-info">$180.000</p>
                  </div>
                  <div>
                    <p className="sinopse-style">Receita</p>
                    <p className="modal-result-info">$853.977</p>
                  </div>
                  <div>
                    <p className="sinopse-style">Lucro</p>
                    <p className="modal-result-info">$673.977</p>
                  </div>
                </div>
              </div>
              <div className="modal-footer">
                <div className="tags">
                  <p className="tag-style">Ação</p>
                  <p className="tag-style">Aventura</p>
                  <p className="tag-style">Fantasia</p>
                </div>
              </div>
              <div className="match-background">
                <span className="match-title">
                  {selectedMovie.vote_average * 10}%
                </span>
              </div>
            </div>
            <div>
              <img
                className="modal-movie-billboard"
                src={`https://image.tmdb.org/t/p/w185${selectedMovie.poster_path}`}
                alt="modal-bilboard"
              />
            </div>
          </div>
          <div>
            <iframe
              title="youtube"
              className="video-modal"
              src="https://www.youtube.com/embed/v7MGUNV8MxU"
              frameborder="0"
              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
              allowfullscreen
            ></iframe>
          </div>
          <button onClick={hideModal}>Fechar Modal</button>
        </div>
      </div>
    );
  return null;
};

export default Modal;
