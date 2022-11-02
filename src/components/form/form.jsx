import axios from "axios";
import { React, useState } from "react";
import { useNavigate } from "react-router-dom";
import { setGlobalState, useGlobalState } from "../../states/global-states";

function Form({ data, isAdd }) {
  const [title, setTitle] = useState("");
  const [author, setAuthor] = useState("");
  const [description, setDescription] = useState("");
  const [publishDate, setPublishDate] = useState("");
  const [pages, setPages] = useState(0);
  const [genre, setGenre] = useState("");
  const [selectedFile, setSelectedFile] = useState({});
  const [viewingImage] = useGlobalState("viewingImage");
  const [image, setImage] = useState(null);
  const navigate = useNavigate();

  const fileChangeHandler = (event) => {
    setImage(URL.createObjectURL(event.target.files[0]));
    setSelectedFile(event.target.files[0]);
    setGlobalState("viewingImage", URL.createObjectURL(event.target.files[0]));
  };

  const updateBookHandler = (event) => {
    event.preventDefault();

    let formData = new FormData();
    formData.append("title", title ? title : data.title);
    formData.append("author", author ? author : data.author);
    formData.append(
      "description",
      description ? description : data.description
    );
    formData.append(
      "publishDate",
      publishDate ? publishDate : data.publishDate
    );
    formData.append("genre", genre ? genre : data.genre);
    formData.append("pages", pages ? pages : data.pages);
    formData.append("image", selectedFile ? selectedFile : undefined);

    axios
      .put(`http://localhost:8000/v1/books/${data._id}`, formData, {
        headers: { "Content-Type": "multipart/form-data" },
      })
      .then((res) => {
        console.log(`Cập nhật sách thành công`);
        navigate("/");
      });
  };

  const addBookHandler = (event) => {
    event.preventDefault();

    let formData = new FormData();
    formData.append("title", title);
    formData.append("author", author);
    formData.append("description", description);
    formData.append("publishDate", publishDate);
    formData.append("genre", genre);
    formData.append("pages", pages);
    formData.append("image", selectedFile);

    axios
      .post(`http://localhost:8000/v1/books`, formData, {
        headers: {
          "Content-Type": "multipart/form-data",
        },
      })
      .then((res) => {
        console.log(`Thêm sách thành công`);
        navigate("/");
      });
  };

  return (
    <div>
      <form>
        <h3>Tiêu đề: </h3>
        <input
          type="text"
          onChange={(e) => setTitle(e.target.value)}
          defaultValue={!data ? title : data.title}
        />
        <h3>Tác giả: </h3>
        <input
          type="text"
          onChange={(e) => setAuthor(e.target.value)}
          defaultValue={!data ? author : data.author}
        />
        <h3>Mô tả về sách</h3>
        <textarea
          onChange={(e) => setDescription(e.target.value)}
          defaultValue={!data ? description : data.description}
        ></textarea>
        <h3>Ngày phát hành: </h3>
        <input
          type="text"
          onChange={(e) => setPublishDate(e.target.value)}
          defaultValue={!data ? publishDate : data.publishDate}
        />
        <h3>Số trang</h3>
        <input
          type="text"
          onChange={(e) => setPages(e.target.value)}
          defaultValue={!data ? pages : data.pages}
        />
        <h3>Thể loại</h3>
        <input
          type="text"
          onChange={(e) => setGenre(e.target.value)}
          defaultValue={!data ? genre : data.genre}
        />
        <h3>Ảnh bìa</h3>
        <input type="file" onChange={fileChangeHandler} name="image" />

        {isAdd ? (
          <div>
            <img src={image} onLoad alt="ảnh bìa sách" />
            <button onClick={addBookHandler}>Thêm</button>
          </div>
        ) : (
          <div>
            <img src={viewingImage} alt="ảnh bìa sách" />
            <button onClick={updateBookHandler}>Cập nhật</button>
          </div>
        )}
      </form>
    </div>
  );
}

export default Form;
