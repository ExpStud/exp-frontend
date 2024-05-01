import { FC, useCallback, useEffect, useState } from "react";
import { Button } from "@components";
import axios from "axios";

interface Props {
  onSubmit: any;
}

const ContactForm: FC<Props> = (props: Props) => {
  const { onSubmit } = props;
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: "",
    budgetRange: "",
    relevantDocuments: "",
  });

  const handleChange = (e: any) => {
    const { name, value } = e.target;
    setFormData((prevState) => ({
      ...prevState,
      [name]: value,
    }));
  };

  const handleFileChange = (e: any) => {
    const file = e.target.files[0];
    setFormData((prevState) => ({
      ...prevState,
      relevantDocuments: file,
    }));
  };

  const handleSubmit = async (e: any) => {
    e.preventDefault();
    // Handle form submission logic here
    console.log(formData);

    try {
      const response = await axios.get("/api/add-lead", {
        params: formData,
      });

      console.log(response.data);
    } catch (error) {
      console.error(error);
    }
  };

  const fetchLeads = useCallback(async () => {
    try {
      const response = await axios.get("/api/get-leads");
      console.log("response ", response.data);
    } catch (error) {
      console.error(error);
    }
  }, []);

  useEffect(() => {
    fetchLeads();
  }, [fetchLeads]);

  return (
    <form onSubmit={handleSubmit} className="flex flex-col gap-4">
      <div className="flex">
        <input
          type="text"
          id="name"
          name="name"
          value={formData.name}
          onChange={handleChange}
          className="w-1/2 input mr-5"
          placeholder="Name"
        />
        <input
          type="email"
          id="email"
          name="email"
          value={formData.email}
          onChange={handleChange}
          className="w-1/2 input"
          placeholder="Email address"
        />
      </div>
      <textarea
        id="message"
        name="message"
        value={formData.message}
        onChange={handleChange}
        className="input w-full"
        placeholder="Message"
        rows={4}
      ></textarea>
      <input
        type="text"
        id="budgetRange"
        name="budgetRange"
        value={formData.budgetRange}
        onChange={handleChange}
        className="input w-full"
        placeholder="Budget Range"
      />
      {/* <div className="">
        <input
          type="text"
          id="relevantDocuments"
          name="relevantDocuments"
          value={formData.relevantDocuments}
          onChange={handleChange}
          className="input w-full"
          placeholder="Relevant Documents"
        />
      </div> */}
      {/* <button
        type="submit"
        className="transition-200 inline-flex items-center justify-between text-white 
        text-xl font-medium pl-4 py-1 pr-1.5 rounded-full border border-gray-60 max-w-[215px] cursor-pointer disabled:cursor-not-allowed disabled:opacity-20"
        disabled={
          !formData.name ||
          !formData.email ||
          !formData.message ||
          !formData.budgetRange
        }
      >
        <p className="pb-0.5"> Send message</p>
        <div className="flex items-center">
          <svg
            width="36"
            height="36"
            viewBox="0 0 36 36"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <circle cx="18" cy="18" r="18" fill="#a2a2a2" />
            <path
              d="M18.7528 24L17.9148 23.169L22.858 18.233H10.5V17.0398H22.858L17.9148 12.1037L18.7528 11.2727L25.1165 17.6364L18.7528 24Z"
              fill="white"
            />
          </svg>
        </div>
      </button> */}
      <Button
        title="Send message"
        link="/projects"
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
