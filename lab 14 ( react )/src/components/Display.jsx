import React from 'react';
//import '../index.css'

function DisplayComponent({ submissions }) {
    return (
        <div>
            <h2>Submitted Data</h2>
            <table border="1">
                <thead>
                    <tr>
                        <th>Name</th>
                        <th>Age</th>
                        <th>Email</th>
                    </tr>
                </thead>
                <tbody>
                    {submissions.map((submission, index) => (
                        <tr key={index}>
                            <td>{submission.name}</td>
                            <td>{submission.age}</td>
                            <td>{submission.email}</td>
                        </tr>
                    ))}
                </tbody>
            </table>
        </div>
    );
}

export default DisplayComponent;
