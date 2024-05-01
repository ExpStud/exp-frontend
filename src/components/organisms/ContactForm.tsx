import { FC, useCallback, useEffect, useState } from "react";
import { Button } from "@components";
import axios from "axios";
import toast from "react-hot-toast";

interface Props {}

const ContactForm: FC<Props> = (props: Props) => {
  const {} = props;

  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: "",
    budgetRange: "",
    relevantDocuments: "",
  });

  const [isEmailValid, setIsEmailValid] = useState(false);

  const validateEmail = (email: string) => {
    const regex = /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/;
    return regex.test(email);
  };

  const handleChange = (e: any) => {
    const { name, value } = e.target;
    setFormData((prevState) => ({
      ...prevState,
      [name]: value,
    }));

    if (name === "email") {
      setIsEmailValid(validateEmail(value));
    }
  };

  const handleFileChange = (e: any) => {
    const file = e.target.files[0];
    setFormData((prevState) => ({
      ...prevState,
      relevantDocuments: file,
    }));
  };

  const handleSubmit = async () => {
    if (
      !formData.name ||
      !formData.email ||
      !formData.message ||
      !formData.budgetRange
    ) {
      return;
    }
    if (formData.message.length < 20) {
      toast.error("Message must be more than 20 characters");
      return;
    }
    if (formData.budgetRange.length < 4) {
      toast.error("Budget must be greater than 3 characters");
      return;
    }
    if (!isEmailValid) {
      toast.error("Please enter a valid email address");
      return;
    }
    // Handle form submission logic here
    console.log(formData);

    try {
      // const response = await axios.get("/api/add-lead", {
      //   params: formData,
      // });

      // console.log(response.data);

      // toast.loading("Submitting...");
      toast.promise(axios.get("/api/add-lead", { params: formData }), {
        loading: "Submitting...",
        success: (res) => {
          console.log(res.data);
          return "Submitted successfully";
        },
        error: (err) => {
          console.error(err);
          return "Submission failed";
        },
      });
    } catch (error) {
      console.error(error);
    }
  };

  const fetchLeads = useCallback(async () => {
    try {
      const response = await axios.get("/api/get-leads");
      console.log("response ", response.data.leads.rows);
    } catch (error) {
      console.error(error);
    }
  }, []);

  useEffect(() => {
    fetchLeads();
  }, [fetchLeads]);

  return (
    <form onSubmit={handleSubmit} className="flex flex-col gap-4">
      <div className="flex flex-col md:flex-row gap-4">
        <input
          type="text"
          id="name"
          name="name"
          value={formData.name}
          onChange={handleChange}
          className="w-full lg:w-1/2 input"
          placeholder="Name"
          maxLength={250}
        />
        <input
          type="email"
          id="email"
          name="email"
          value={formData.email}
          onChange={handleChange}
          className="w-full lg:w-1/2 input"
          placeholder="Email address"
          maxLength={250}
        />
      </div>
      <textarea
        id="message"
        name="message"
        value={formData.message}
        onChange={handleChange}
        className="input w-full"
        placeholder="Message"
        rows={6}
      ></textarea>
      <input
        type="text"
        id="budgetRange"
        name="budgetRange"
        value={formData.budgetRange}
        onChange={handleChange}
        className="input w-full"
        placeholder="Budget Range"
        maxLength={250}
      />
      <Button
        title="Send message"
        callback={() => handleSubmit()}
        disabled={
          !formData.name ||
          !formData.email ||
          !formData.message ||
          !formData.budgetRange
        }
      />
    </form>
  );
};

export default ContactForm;
