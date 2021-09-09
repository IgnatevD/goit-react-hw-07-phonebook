/** @format */

import React from "react";
import PropTypes from "prop-types";
import ContactForm from "./ContactForm/ContactForm";
import ContactList from "./ContactList/ContactList";

import Filter from "./Filter/Filter";
import s from "../components/App.module.css";

const App = () => {
  return (
    <>
      <section className={s.section}>
        <div className={s.divConteiner}>
          <h1>Телефонная книга</h1>
          <ContactForm />
        </div>
      </section>
      <section className={s.section}>
        <div className={s.divContactList}>
          <h2>Контакты</h2>
          <Filter />
          <ContactList />
        </div>
      </section>
    </>
  );
};

App.propTypes = {
  contacts: PropTypes.array,
  name: PropTypes.string,
  number: PropTypes.string,
};

export default App;
