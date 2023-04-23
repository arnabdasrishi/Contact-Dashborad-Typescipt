import { useEffect, useState } from "react";
import ContactCard from "./ContactCard";
import { useSelector } from "react-redux";
import { RootState } from "../../store/store";
import { Contact } from "../../store/contactSlice";

import { useNavigate } from "react-router-dom";
import PageHeader from "./PageHeader";

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

  return (
    <>
      <PageHeader />
      <div className="text-center">
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
    </>
  );
};

export default ContactList;
