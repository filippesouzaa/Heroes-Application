import React from "react";
import Modal from "../modal/Modal";
import Pagination from "../pagination/Pagination";
import "./movies.css";

const API =
  "https://api.themoviedb.org/4/list/1?api_key=437b7483b6be815caab820e07b004e22";

const Movies = ({ search }) => {
  const [data, setData] = React.useState("");
  const [selectedMovie, setSelectedMovie] = React.useState(null);
  const [currentPage, setCurrentPage] = React.useState(1);
  const [dataPerPage] = React.useState(5);

  React.useEffect(() => {
    const fetchData = async () => {
      await fetch(API).then((response) =>
        response
          .json()
          .then((json) => setData(json))
          .catch((error) => console.log(error))
      );
    };
    fetchData();
  }, []);

  console.log(data);
  // Get data per page
  const indexLastData = currentPage * dataPerPage;
  const indexFirstData = indexLastData - dataPerPage;
  const currentData = data && data.results.slice(indexFirstData, indexLastData);
  const paginate = (pageNumber) => setCurrentPage(pageNumber);

  //Search function
  const filteredData =
    data &&
    currentData.filter((results) => {
      return results.title.toLowerCase().includes(search.toLocaleLowerCase());
    });

  return (
    <>
      {data &&
        filteredData.map((object) => (
          <div className="main">
            <div
              className="movies-container"
              key={object.id}
              onClick={() => setSelectedMovie(object)}
            >
              <div>
                <img
                  className="movie-billboard"
                  src={`https://image.tmdb.org/t/p/w185${object.poster_path}`}
                  alt="bilboard title"
                />
              </div>
              <div className="rightSideMovie">
                <div className="header-movie-title">
                  <span className="movie-title">{object.title}</span>
                </div>
                <div className="match">
                  <span className="match-percentual">
                    {object.vote_average * 10}%
                  </span>
                </div>
                <span className="release-date">{object.release_date}</span>
                <div className="movie-description">
                  <span>{object.overview}</span>
                </div>
                <div className="tags">
                  <p className="tag-style">Ação</p>
                  <p className="tag-style">Aventura</p>
                  <p className="tag-style">Fantasia</p>
                </div>
              </div>
            </div>
          </div>
        ))}
      <Modal
        selectedMovie={selectedMovie}
        hideModal={() => setSelectedMovie(null)}
      />
      <Pagination
        dataPerPage={dataPerPage}
        totalData={data && data.results.length}
        paginate={paginate}
      />
    </>
  );
};
export default Movies;
