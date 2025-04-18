import { PageLayout } from "@components";
import axios from "axios";
import { NextPage } from "next";
import { useCallback, useEffect, useState } from "react";

const Leads: NextPage = () => {
  const [leads, setLeads] = useState<any[]>([]); // State to store the leads data
  const [loading, setLoading] = useState<boolean>(true); // State to track loading status
  const [error, setError] = useState<string | null>(null); // State to track errors

  const fetchLeads = useCallback(async () => {
    try {
      const response = await axios.get("/api/get-leads");
      console.log("response ", response.data.leads.rows);
      setLeads(response.data.leads.rows); // Store the rows in state
      setLoading(false);
    } catch (error) {
      console.error(error);
      setError("Failed to fetch leads");
      setLoading(false);
    }
  }, []);

  const deleteLead = async (email: string) => {
    try {
      await axios.delete(`/api/delete-lead?email=${email}`);
      console.log("Lead deleted successfully");
      fetchLeads();
    } catch (error) {
      console.error("Failed to delete lead:", error);
    }
  };

  useEffect(() => {
    fetchLeads();
  }, [fetchLeads]);

  if (loading) {
    return <p>Loading...</p>;
  }

  if (error) {
    return <p className="text-red-500">{error}</p>;
  }
  return (
    <div className="p-4">
      <h1 className="text-2xl font-bold mb-4">Leads</h1>
      {leads.length === 0 ? (
        <p>No leads found.</p>
      ) : (
        <table className="table-auto w-full border-collapse border border-gray-300">
          <thead>
            <tr className="">
              <th className="border border-gray-300 px-4 py-2">ID</th>
              <th className="border border-gray-300 px-4 py-2">Name</th>
              <th className="border border-gray-300 px-4 py-2">Email</th>
              <th className="border border-gray-300 px-4 py-2">Budget</th>
              <th className="border border-gray-300 px-4 py-2">Message</th>
              <th className="border border-gray-300 px-4 py-2">Actions</th>
            </tr>
          </thead>
          <tbody>
            {leads.map((lead, index) => (
              <tr key={index} className="text-center">
                <td className="border border-gray-300 px-4 py-2">
                  {index + 1}
                </td>
                <td className="border border-gray-300 px-4 py-2">
                  {lead.name}
                </td>
                <td className="border border-gray-300 px-4 py-2">
                  {lead.email}
                </td>
                <td className="border border-gray-300 px-4 py-2">
                  {lead.budgetrange}
                </td>
                <td className="border border-gray-300 px-4 py-2">
                  {lead.message}
                </td>
                <td className="border border-gray-300 px-4 py-2">
                  <button
                    onClick={() => deleteLead(lead.email)}
                    className="bg-red-500 text-white px-4 py-2 rounded hover:bg-red-600"
                  >
                    Delete
                  </button>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      )}
    </div>
  );
};
export default Leads;
