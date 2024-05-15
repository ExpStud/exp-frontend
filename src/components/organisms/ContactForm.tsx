import { FC, useCallback, useEffect, useState } from "react";
import { Button, Dropdown } from "@components";
import axios from "axios";
import toast from "react-hot-toast";
import { AnimatePresence, motion } from "framer-motion";
import { midExitAnimation } from "src/constants";

interface Props {}

type FormData = {
  name: string;
  email: string;
  message: string;
  budgetRange: string;
  relevantDocuments: string;
};

const emptyForm: FormData = {
  name: "",
  email: "",
  message: "",
  budgetRange: "",
  relevantDocuments: "",
};

const ContactForm: FC<Props> = (props: Props) => {
  const {} = props;

  const [formData, setFormData] = useState<FormData>(emptyForm);
  const [isEmailValid, setIsEmailValid] = useState<boolean>(false);
  const [submissionStatus, setSubmissionStatus] = useState<
    null | "sending" | "success" | "failed"
  >(null);

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

  const handleSubmit = async () => {
    if (
      !formData.name ||
      !formData.email ||
      !formData.message ||
      !formData.budgetRange
    ) {
      return;
    }
    if (!isEmailValid) {
      toast.error("Please enter a valid email");
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

    // Handle form submission logic
    setSubmissionStatus("sending");
    try {
      toast.promise(axios.get("/api/add-lead", { params: formData }), {
        loading: "Submitting...",
        success: (res) => {
          console.log(res.data);
          // setFormData(emptyForm);
          setSubmissionStatus("success");
          return "Submitted successfully";
        },
        error: (err) => {
          console.error(err);
          setSubmissionStatus("failed");
          return "Submission failed";
        },
      });
    } catch (error) {
      setSubmissionStatus("failed");
      console.error(error);
    }
  };

  // const fetchLeads = useCallback(async () => {
  //   // try {
  //   //   const response = await axios.get("/api/get-leads");
  //   //   console.log("response ", response.data.leads.rows);
  //   // } catch (error) {
  //   //   console.error(error);
  //   // }
  // }, []);

  // useEffect(() => {
  //   // toast.loading("Submitting...");
  //   fetchLeads();
  // }, [fetchLeads]);

  return (
    <AnimatePresence mode="wait">
      {submissionStatus === "success" ? (
        <motion.div className="text-white w-full lg:w-[815px] h-[398px] md:h-[340px] flex flex-col py-10">
          <p className="text-xl md:text-2xl">Thank you for your message 🎉</p>
          <p className="text-xl md:text-2xl opacity-60">
            We will get back to you shortly
          </p>
        </motion.div>
      ) : (
        <motion.form
          onSubmit={handleSubmit}
          className="flex flex-col gap-4"
          {...midExitAnimation}
          key="form"
        >
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
          {/* <input
            type="text"
            id="budgetRange"
            name="budgetRange"
            value={formData.budgetRange}
            onChange={handleChange}
            className="input w-full"
            placeholder="Budget Range"
            maxLength={250}
          /> */}
          <Dropdown
            options={["$2,500 - $5,000", "$5,000 - $10,000", "$10,000+"]}
            onSelectionChange={(selectedOption) =>
              setFormData({
                ...formData,
                budgetRange: selectedOption,
              })
            }
          />{" "}
          <Button
            title="Send message"
            callback={() => handleSubmit()}
            disabled={
              submissionStatus === "sending" ||
              !formData.name ||
              !formData.email ||
              !formData.message ||
              !formData.budgetRange
            }
          />
        </motion.form>
      )}
    </AnimatePresence>
  );
};

export default ContactForm;
