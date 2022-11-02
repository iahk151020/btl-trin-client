import axios from "axios";
import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import Form from "../components/form/form";

const ViewBook = () => {
  const { id } = useParams();
  const [bookDetails, setBookDetails] = useState({});

  useEffect(() => {
    axios.get(`http://localhost:8000/v1/books/${id}`).then((res) => {
      setBookDetails(res.data);
    });
  }, []);

  return (
    <div>
      <Form data={bookDetails} />
    </div>
  );
};

export default ViewBook;
