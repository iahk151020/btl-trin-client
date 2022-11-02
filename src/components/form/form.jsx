import axios from "axios";
import { React, useState } from "react";
// import ReactDOM from "react-dom/client";

function Form({ data, isAdd }) {
  const [title, setTitle] = useState("");
  const [author, setAuthor] = useState("");
  const [description, setDescription] = useState("");
  const [publishDate, setPublishDate] = useState("");
  const [pages, setPages] = useState(0);
  const [genre, setGenre] = useState("");
  const [selectedFile, setSelectedFile] = useState({});
  // const [isFilePicked, setIsFilePicked] = useState(false);

  const [button, setButton] = useState("Save");
  const [image, setImage] = useState(null);
  const fileChangeHandler = (event) => {
    setImage(URL.createObjectURL(event.target.files[0]));
    setSelectedFile(event.target.files[0]);
    console.log(image);
  };

  const updateBookHandler = () => {
    let formData = new FormData();
    formData.append("title", title);
    formData.append("author", author);
    formData.append("description", description);
    formData.append("publishDate", publishDate);
    formData.append("genre", genre);
    formData.append("pages", pages);
    formData.append("image", selectedFile);

    axios
      .post(`http://localhost:8000/v1/books/`, formData, {
        headers: { "content-type": "multipart/form-data" },
      })
      .then((res) => console.log(`POST successfully`));
  };

  const addBookHandler = () => {
    let formData = new FormData();
    formData.append("title", title);
    formData.append("author", author);
    formData.append("description", description);
    formData.append("publishDate", publishDate);
    formData.append("genre", genre);
    formData.append("pages", pages);
    formData.append("image", selectedFile);

    axios
      .post(`http://localhost:8000/v1/books/`, formData, {
        headers: { "content-type": "multipart/form-data" },
      })
      .then((res) => console.log(`add book successfully`));
  };

  return (
    <div>
      <form>
        <h3>Tiêu đề: </h3>
        <input type="text" defaultValue={!data ? title : data.title} />
        <h3>Tác giả: </h3>
        <input type="text" defaultValue={!data ? author : data.author} />
        <h3>Mô tả về sách</h3>
        <textarea
          defaultValue={!data ? description : data.description}
        ></textarea>
        <h3>Ngày phát hành: </h3>
        <input
          type="text"
          defaultValue={!data ? publishDate : data.publishDate}
        />
        <h3>Số trang</h3>
        <input type="text" defaultValue={!data ? pages : data.pages} />
        <h3>Thể loại</h3>
        <input type="text" defaultValue={!data ? genre : data.genre} />
        <h3>Ảnh bìa</h3>
        <input type="file" onChange={fileChangeHandler} name="image" />
        <div>
          <img src={!data ? image : data.image} alt="ảnh bìa sách" />
        </div>
        {isAdd ? (
          <button onClick={addBookHandler}>Thêm</button>
        ) : (
          <button onClick={updateBookHandler}>Cập nhật</button>
        )}
      </form>
    </div>
  );
}

export default Form;
