import axios from "axios";
import { Form, redirect, useNavigation } from "react-router-dom";
import { toast } from "react-toastify";

const newsletterUrl = "https://www.course-api.com/cocktails-newsletter"; // not working

export const action = async ({ request }) => {
  const data = await request.formData(); // get the data - FormData(data);
  const entries = [...data.values()];
  if (entries.includes("")) {
    return toast.error("You need to provide all the info");
  }
  const formObject = Object.fromEntries(data);
  try {
    const response = await axios.post(newsletterUrl, formObject);
    toast.success(`You will receive our newsletter, ${formObject.name}`);
    return redirect("/");
  } catch (e) {
    toast.error(e?.response?.data?.msg);
    return e;
  }
};

const Newsletter = () => {
  const navigation = useNavigation();
  const isSubmitting = navigation === "submitting";
  return (
    <section>
      <Form method="POST" className="form">
        <h4 style={{ textAlign: "center", marginBottom: "2rem" }}>
          Newsletter
        </h4>
        <div className="form-row">
          <label htmlFor="name" className="form-label">
            Name
          </label>
          <input
            type="text"
            name="name"
            className="form-input"
            id="name"
            required
          />
          <label htmlFor="lastname" className="form-label">
            Last Name
          </label>
          <input
            type="text"
            name="lastname"
            className="form-input"
            id="lastname"
            required
          />
          <label htmlFor="email" className="form-label">
            Email
          </label>
          <input
            type="email"
            name="email"
            className="form-input"
            id="email"
            required
          />
        </div>
        <button
          type="submit"
          className="btn btn-block"
          style={{ marginTop: "0.5rem" }}
          disabled={isSubmitting}
        >
          {isSubmitting ? "submitting..." : "submit"}
        </button>
      </Form>
    </section>
  );
};

export default Newsletter;
