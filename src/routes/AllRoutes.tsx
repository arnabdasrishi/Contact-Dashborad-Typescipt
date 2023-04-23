import { Routes, Route } from "react-router-dom";
import ContactList from "../components/contacts/ContactList";
import AddContactForm from "../components/contacts/AddContactForm";
import EditContactForm from "../components/contacts/EditContactForm";
import ChartComponent from "../components/mapsCharts/ChartComponent";

const AllRoutes = () => {
  return (
    <Routes>
      <Route path="/" element={<ContactList />} />
      <Route path="/newcontact" element={<AddContactForm />} />
      <Route path="/editcontact/:id" element={<EditContactForm />} />

      <Route path="/dashboard" element={<ChartComponent />} />
    </Routes>
  );
};

export default AllRoutes;
