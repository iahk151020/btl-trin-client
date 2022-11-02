import { useState, useEffect } from "react";
import { setGlobalState, useGlobalState } from "../states/global-states";
import axios from "axios";
import "./home.css";
import { Link } from "react-router-dom";

function Home() {
  const [isLoggedIn] = useGlobalState("login");
  const [allBooks, setAllBooks] = useState([]);

  useEffect(() => {
    axios.get("http://localhost:8000/v1/books").then((res) => {
      setAllBooks(res.data);
    });
  }, []);

  const setViewingImage = (image) => {
    setGlobalState("viewingImage", image);
  };

  const deleteItemHandler = async (key, id) => {
    axios.delete(`http://localhost:8000/v1/books/${id}`).then((res) => {
      let newAllBooks = allBooks.filter((item) => item._id !== id);
      setAllBooks(newAllBooks);
    });
  };

  return (
    <div className="home">
      {isLoggedIn ? (
        <div className="add-btn-section">
          <Link to="/add-book">
            <button>Thêm sách</button>
          </Link>
        </div>
      ) : null}

      <table>
        <tr>
          <th>Tiêu đề</th>
          <th>Tác giả</th>
          <th>Thể loại</th>
          <th>Ngày phát hành</th>
          <th>Số trang</th>
          <th>Actions</th>
        </tr>
        {allBooks.map((val, key) => {
          return (
            <tr key={key}>
              <td>{val.title}</td>
              <td>{val.author}</td>
              <td>{val.genre}</td>
              <td>{val.publishDate}</td>
              <td>{val.pages}</td>
              <td>
                {isLoggedIn ? (
                  <div>
                    <Link to={`/view/${val._id}`}>
                      <button
                        onClick={() => {
                          setViewingImage(val.image);
                        }}
                      >
                        view
                      </button>
                    </Link>
                    <button onClick={(key) => deleteItemHandler(key, val._id)}>
                      delete
                    </button>
                  </div>
                ) : (
                  <div></div>
                )}
              </td>
            </tr>
          );
        })}
      </table>
    </div>
  );
}

export default Home;
