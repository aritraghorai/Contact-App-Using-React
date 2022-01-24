import AddContact from "./Components/AddContact";
import ContactList from "./Components/ContactList";
import Header from "./Components/Header";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import { useState, useEffect } from "react";
import { v4 as uuidv4 } from 'uuid';
import ContactCardDetail from "./Components/ContactCardDetail";
import api from "./api/contacts"
import EditContact from "./Components/EditContact";
import DeleteConfarm from "./Components/DeleteConfarm";
function App() {
  // const LOCAL_STORAGE_KEY = "Contacts";
  const [contacts, setContacts] = useState([])
  const [Search, setSearch] = useState("");
  const [searchContact, setsearchContact] = useState([]);
  //*Search Handler
  const searchHandler = (term) => {
    setSearch(term)
    if (term !== "") {
      let newContacts = contacts.filter((c) => {
        return Object.values(c).join(" ").toLowerCase().includes(term.toLowerCase())
      })
      setsearchContact(newContacts)
    }
  }
  //*Retrive Contact
  const retriveContacts = async () => {
    const response = await api.get("/contacts");
    return response.data
  }
  const addContactHandler = async (contact) => {
    // console.log(contact);
    const request = {
      id: uuidv4(),
      ...contact
    }
    const response = await api.post("/contacts", request)
    console.log(response);
    setContacts([...contacts, response.data])
  }
  const updateContactHandler = async (contact) => {
    console.log(contact);
    const response = await api.put(`/contacts/${contact.id}`, contact);
    const { id } = response.data;
    setContacts(contacts.map((c) => {
      return c.id === id ? { ...response.data } : c;
    }))
  }
  const removeContactHandler = async (id) => {
    await api.delete(`contacts/${id}`)
    const newContactList = contacts.filter((contact) => {
      return contact.id !== id;
    })
    setContacts(newContactList)
  }
  useEffect(() => {
    // const retriveContact = JSON.parse(localStorage.getItem(LOCAL_STORAGE_KEY))
    // if (retriveContact)
    //   setContacts(retriveContact)
    const getAllContacts = async () => {
      const allcontact = await retriveContacts();
      if (allcontact)
        setContacts(allcontact)
    }
    getAllContacts()
  }, [])
  // useEffect(() => {
  //   // localStorage.setItem(LOCAL_STORAGE_KEY, JSON.stringify(contacts));
  // }, [contacts])

  return (
    <Router>
      <div className="">
        <Header />
        <Routes>
          <Route exact path='/' element={<ContactList term={Search} searchHandler={searchHandler} contacts={Search.length > 0 ? searchContact : contacts} getContactId={removeContactHandler} />} />
          <Route exact path='add' element={<AddContact addContactHandler={addContactHandler} />} />
          <Route exact path="/contact/:id" element={<ContactCardDetail />} />
          <Route exact path="/delete/:id" element={<DeleteConfarm delete={removeContactHandler} />} />
          <Route exact path="/edit/:id" element={<EditContact update={updateContactHandler} />} />
        </Routes>
      </div>
    </Router>

  );
}

export default App;
