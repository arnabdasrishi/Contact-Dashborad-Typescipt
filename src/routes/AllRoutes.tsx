import { Routes, Route } from "react-router-dom";
import ContactList from "../components/ContactList";
import AddContactForm from "../components/AddContactForm";
import EditContactForm from "../components/EditContactForm";

const AllRoutes = () => {
  return (
    <Routes>
      <Route path="/" element={<ContactList />} />
      <Route path="/newcontact" element={<AddContactForm />} />
      <Route path="/editcontact/:id" element={<EditContactForm />} />
    </Routes>
  );
};

export default AllRoutes;
