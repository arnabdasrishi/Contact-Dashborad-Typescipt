import { useState } from "react";
import { useDispatch } from "react-redux";
import { updateContact } from "../../store/contactSlice";

import { useParams } from "react-router-dom";
import { useNavigate } from "react-router-dom";
import PageHeader from "./PageHeader";

const EditContactForm = () => {
  const dispatch = useDispatch();
  const { id } = useParams();
  const navigate = useNavigate();

  const [firstname, setFirstName] = useState("");
  const [lastname, setLastName] = useState("");
  const [image_url, setImage] = useState("");
  const [status, setStatus] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();

    const newContact = {
      id: String(id),
      firstname,
      lastname,
      image_url,
      status,
    };

    dispatch(updateContact(newContact));

    setFirstName("");
    setLastName("");
    setImage("");

    navigate("/");
  };

  return (
    <>
      <PageHeader title={"Contact Page"}/>
      <div className="border border-red-800 bg-gray-100 mt-20 w-1/3 m-auto p-2">
        <p className="text-center text-2xl font-semibold p-5 pb-10 text-red-800">
          -:: Edit Contact Screen ::-
        </p>
        <form className="text-lg text-center" onSubmit={handleSubmit}>
          <label>First Name : </label>
          <input
            className="mb-2 border w-3/4 p-1"
            onChange={(e) => setFirstName(e.target.value)}
            value={firstname}
            type="text"
            placeholder="firstname"
          />
          <br />
          <label>Last Name Name : </label>
          <input
            className="mb-2 border w-2/3 p-1"
            onChange={(e) => setLastName(e.target.value)}
            value={lastname}
            type="text"
            placeholder="lastname"
          />{" "}
          <br />
          <label>Image URL (optional) : </label>
          <input
            className="mb-2 border w-3/5 p-1"
            onChange={(e) => setImage(e.target.value)}
            value={image_url}
            type="text"
            placeholder="image_url (may leave it blank)"
          />{" "}
          <br />
          <div className="text-left pl-2">
            <label>Status: </label>
            <div className="text-center">
              <input
                type="radio"
                name="status"
                value="active"
                checked={status === true}
                onChange={(e) => setStatus(true)}
              />
              <label>Active</label>
              <br />
              <input
                type="radio"
                name="status"
                value="inactive"
                checked={status === false}
                onChange={(e) => setStatus(false)}
              />
              <label>Inactive</label>
            </div>
            <br />
          </div>
          <button className="bg-pink-400 text-white p-2 rounded mt-5 mb-5">
            Save Editted Contact
          </button>
        </form>
      </div>
    </>
  );
};

export default EditContactForm;
