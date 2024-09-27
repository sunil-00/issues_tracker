import React, { useState, useEffect } from 'react';
import axios from 'axios';

const App = () => {
    const [issues, setIssues] = useState([]);
    const [issue, setIssue] = useState({ id: '', title: '', description: '' });
    const [error, setError] = useState('');

    const fetchIssues = async () => {
        try {
            const response = await axios.get('http://localhost:8000/issues/');
            setIssues(response.data);
        } catch (error) {
            setError('Error fetching issues.');
            console.error('Error fetching issues:', error);
        }
    };
    const createIssue = async () => {
        try {
            const response = await axios.post('http://localhost:8000/issues/', issue);
            setIssues([...issues, response.data]);
            setIssue({ id: '', title: '', description: '' });
            setError('');
        } catch (error) {
            setError(error.response?.data?.detail || 'Error creating issue.');
            console.error('Error creating issue:', error);
        }
    };

    const updateIssue = async () => {
        try {
            await axios.put(`http://localhost:8000/issues/${issue.id}`, issue);
            fetchIssues();
            setError('');
        } catch (error) {
            setError(error.response?.data?.detail || 'Error updating issue.');
            console.error('Error updating issue:', error);
        }
    };

    const deleteIssue = async (id) => {
        try {
            await axios.delete(`http://localhost:8000/issues/${id}`);
            setIssues(issues.filter(issue => issue.id !== id));
            setError('');
        } catch (error) {
            setError(error.response?.data?.detail || 'Error deleting issue.');
            console.error('Error deleting issue:', error);
        }
    };

    useEffect(() => {
        fetchIssues();
    }, []);

    return (
        <div className="container mx-auto p-4">
            <h1 className="text-3xl font-bold mb-4">Issues</h1>
            {error && <div className="text-red-500 mb-4">{error}</div>}
            <div className="grid grid-cols-1 gap-4 mb-4">
                <input
                    className="border border-gray-300 rounded p-2"
                    placeholder="ID"
                    value={issue.id}
                    onChange={e => setIssue({ ...issue, id: e.target.value })}
                />
                <input
                    className="border border-gray-300 rounded p-2"
                    placeholder="Title"
                    value={issue.title}
                    onChange={e => setIssue({ ...issue, title: e.target.value })}
                />
                <input
                    className="border border-gray-300 rounded p-2"
                    placeholder="Description"
                    value={issue.description}
                    onChange={e => setIssue({ ...issue, description: e.target.value })}
                />
                <div className="flex space-x-2">
                    <button
                        className="bg-blue-500 text-white rounded p-2 hover:bg-blue-600"
                        onClick={createIssue}
                    >
                        Create Issue
                    </button>
                    <button
                        className="bg-green-500 text-white rounded p-2 hover:bg-green-600"
                        onClick={updateIssue}
                    >
                        Update Issue
                    </button>
                </div>
            </div>
            <h2 className="text-2xl font-semibold mb-2">Issue List</h2>
            <div>
                {issues.map(issue => (
                    <div key={issue.id} className="border border-gray-200 rounded p-4 mb-2">
                        <span className="bg-gray-200 text-gray-800 text-sm font-semibold rounded-full px-2 py-1 mr-2">
                          ID: {issue.id}
                        </span>
                        <h3 className="text-xl font-bold">{issue.title}</h3>
                        <p>{issue.description}</p>
                        <button
                            className="bg-red-500 text-white rounded p-2 hover:bg-red-600"
                            onClick={() => deleteIssue(issue.id)}
                        >
                            Delete
                        </button>
                    </div>
                ))}
            </div>
        </div>
    );
};

export default App;
