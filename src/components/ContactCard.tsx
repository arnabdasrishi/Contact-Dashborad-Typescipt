import React from "react";
import { useDispatch } from "react-redux";
import { deleteContact } from "../store/contactSlice";

import { useNavigate } from 'react-router-dom';

interface ContactCardProps {
  id:string,
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

  const handleEdit = () => navigate(`/editcontact/${id}`)

  return (
    <div className="border-2 w-2/3 mt-20 p-2 m-auto">
      <img src={image} alt="prof_img" />
      <p>
        Name: {firstname} {lastname}
      </p>
      <button className=" text-white text-2xl bg-green-500 p-1 pl-4 pr-4 rounded m-2" onClick={handleEdit}>EDIT</button> <br/>
      <button className=" text-white text-2xl bg-red-500 p-1 rounded m-2" onClick={() => {dispatch(deleteContact(id))}}>DELETE</button>
    </div>
  );
};

export default ContactCard;
