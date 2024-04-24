import { FC, useState } from "react";
import { Button } from "@components";

interface Props {
    onSubmit: any;
}

const ContactForm: FC<Props> = (props: Props) => {
  const { onSubmit } = props;
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: '',
    budgetRange: '',
    relevantDocuments: ''
  });

  const handleChange = (e: any) => {
    const { name, value } = e.target;
    setFormData(prevState => ({
      ...prevState,
      [name]: value
    }));
  };

  const handleFileChange = (e: any) => {
    const file = e.target.files[0];
    setFormData(prevState => ({
      ...prevState,
      relevantDocuments: file
    }));
  };

  const handleSubmit = (e: any) => {
    e.preventDefault();
    // Handle form submission logic here
    console.log(formData);
  };


  return (
    <form onSubmit={handleSubmit} className="mt-10 mr-20">
      <div className="mb-4 flex">
        <input type="text" id="name" name="name" value={formData.name} onChange={handleChange} className="w-1/2 border bg-black border-gray-600 rounded px-3 py-2 mr-5" placeholder="Name" />
        <input type="email" id="email" name="email" value={formData.email} onChange={handleChange} className="w-1/2 border bg-black border-gray-600 rounded px-3 py-2" placeholder="Email address" />
      </div>
      <div className="mb-4">
        <textarea id="message" name="message" value={formData.message} onChange={handleChange} className="border bg-black border-gray-600 rounded px-3 py-2 w-full" placeholder="Message"></textarea>
      </div>
      <div className="mb-4">
        <input type="text" id="budgetRange" name="budgetRange" value={formData.budgetRange} onChange={handleChange} className="border bg-black border-gray-600 rounded px-3 py-2 w-full" placeholder="Budget Range" />
      </div>
      <div className="mb-4">
      <input type="text" id="relevantDocuments" name="relevantDocuments" value={formData.relevantDocuments} onChange={handleChange} className="border bg-black border-gray-600 rounded px-3 py-2 w-full" placeholder="Relevant Documents" />
      </div>
      {/* <button type="submit" className="bg-blue-500 hover:bg-blue-600 text-white font-bold py-2 px-4 rounded">Submit</button> */}
      <Button title="Send message" link="/projects" />
    </form>
  );
};

export default ContactForm;