import axios from "axios";
import React from "react";
import { Form, useNavigation } from "react-router-dom";

export default function SearchForm({ searchTerm }) {
  const navigation = useNavigation();
  const isSubmitting = navigation.state === "submitting";
  return (
    <div className="search">
      <Form className="form">
        <input
          type="search"
          name="search"
          className="form-input"
          defaultValue={searchTerm}
        />
        <button type="submit" className="btn" disabled={isSubmitting}>
          Search
        </button>
      </Form>
    </div>
  );
}
