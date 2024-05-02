import React, { useState, useEffect } from 'react';
import axios from 'axios';
import {Box} from '@mui/material'

const Complaints = () => {
  const [complaints, setComplaints] = useState([]);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);

  useEffect(() => {
    fetchComplaints();
  }, []);

  const fetchComplaints = () => {
    setLoading(true);
    axios.get('http://localhost:3001/complaints')
      .then(response => {
        setComplaints(response.data);
        setLoading(false);
      })
      .catch(error => {
        setError('Error fetching complaints');
        setLoading(false);
      });
  };

  const handleStatusChange = (complaintId, newStatus) => {
    axios.post(`http://localhost:3001/complaints/${complaintId}/status`, { status: newStatus })
      .then(() => {
        // Update the local state to reflect the change
        const updatedComplaints = complaints.map(complaint => {
          if (complaint.id === complaintId) {
            return { ...complaint, status: newStatus };
          }
          return complaint;
        });
        setComplaints(updatedComplaints);
      })
      .catch(() => {
        alert('Failed to update status');
      });
  };

  return (
    <>
      <Box p={5}>
        <h2>Complaints</h2>
        {loading ? <p>Loading...</p> : error ? <p>{error}</p> : (
          <table>
            <thead>
              <tr>
                <th>ID</th>
                <th>Description</th>
                <th>Status</th>
                <th>Update Status</th>
              </tr>
            </thead>
            <tbody>
              {complaints.map(complaint => (
                <tr key={complaint.id}>
                  <td>{complaint.id}</td>
                  <td>{complaint.details}</td>
                  <td>{complaint.status}</td>
                  <td>
                    <button onClick={() => handleStatusChange(complaint.id, 'Solved')}>Mark as Solved</button>
                    <button onClick={() => handleStatusChange(complaint.id, 'Pending')}>Mark as Pending</button>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        )}
      </Box>
    </>
  );
};

export default Complaints;
