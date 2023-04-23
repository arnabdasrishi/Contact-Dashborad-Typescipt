import React from "react";
import { useDispatch } from "react-redux";
import { deleteContact } from "../../store/contactSlice";

import { useNavigate } from "react-router-dom";

interface ContactCardProps {
  id: string;
  firstname: string;
  lastname: string;
  image: string;
}

const ContactCard: React.FC<ContactCardProps> = ({
  id,
  firstname,
  lastname,
  image,
}) => {
  const dispatch = useDispatch();
  const navigate = useNavigate();

  const handleEdit = () => navigate(`/editcontact/${id}`);

  return (
    <div className="border-2 w-2/3 mt-20 p-2 m-auto">
      {!image ? (
        <img
          src="https://cdn.pixabay.com/photo/2015/10/05/22/37/blank-profile-picture-973460__340.png"
          alt="prof_img"
        />
      ) : (
        <img src={image} alt="prof_img" />
      )}
      <p className="text-2xl font-semibold m-2">
        Name: {firstname} {lastname}
      </p>
      <button
        className=" text-white text-2xl bg-green-500 p-1 pl-4 pr-4 rounded m-2"
        onClick={handleEdit}
      >
        EDIT
      </button>{" "}
      <br />
      <button
        className=" text-white text-2xl bg-red-500 p-1 rounded m-2"
        onClick={() => {
          dispatch(deleteContact(id));
        }}
      >
        DELETE
      </button>
    </div>
  );
};

export default ContactCard;
