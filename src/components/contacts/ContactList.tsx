import { useEffect, useState } from "react";
import ContactCard from "./ContactCard";
import { useSelector } from "react-redux";
import { RootState } from "../../store/store";
import { Contact } from "../../store/contactSlice";

import { useNavigate } from "react-router-dom";
import PageHeader from "./PageHeader";
import SideNav from "../SideNav/SideNav";

const ContactList = () => {
  const navigate = useNavigate();

  const [data, setData] = useState<Contact[]>([]);
  const contactsData = useSelector(
    (state: RootState) => state.contact.contacts
  );

  useEffect(() => {
    setData(contactsData);
  }, [contactsData]);

  const handleAddContact = () => navigate("/newcontact");

  if (data.length <= 0) {
    return (
      <>
        <PageHeader title={"Contact Page"} />
        <div className="text-center">
          <button
            className="text-3xl bg-blue-500 text-white p-2 rounded"
            onClick={handleAddContact}
          >
            + Create Contact
          </button>
          <p className="text-5xl mt-20 text-gray-400 font-bold">
            No Contact Found
          </p>
          <p className="text-2xl mt-10">
            Please add Contact Form <br /> Create Contact button
          </p>
        </div>
      </>
    );
  }

  return (
    <div className="flex">
      <SideNav />
      <div className="text-center">
        <PageHeader title={"Contact Page"} />
        <button
          className="text-3xl bg-blue-500 text-white p-2 rounded"
          onClick={handleAddContact}
        >
          + Create Contact
        </button>
        <div className="grid grid-cols-3 justify-center m-auto">
          {data &&
            data.map((items, index) => (
              <ContactCard
                key={items.id}
                id={items.id}
                firstname={items.firstname}
                lastname={items.lastname}
                image={items.image_url}
              />
            ))}
        </div>
      </div>
    </div>
  );
};

export default ContactList;
