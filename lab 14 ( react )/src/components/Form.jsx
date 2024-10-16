import React, { useState } from 'react';

function FormComponent({ onSubmit }) {
    const [form, setForm] = useState({ name: '', age: '', email: '' });

    const handleChange = (e) => {
        const { name, value } = e.target;
        setForm({ ...form, [name]: value });
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        onSubmit(form);
        setForm({ name: '', age: '', email: '' }); // Clear the form after submit
    };

    return (
        <form onSubmit={handleSubmit}>
            <label>
                Name:
                <input
                    type="text"
                    name="name"
                    value={form.name}
                    onChange={handleChange}
                />
            </label>
            <br />
            <label>
                Age:
                <input
                    type="number"
                    name="age"
                    value={form.age}
                    onChange={handleChange}
                />
            </label>
            <br />
            <label>
                Email:
                <input
                    type="email"
                    name="email"
                    value={form.email}
                    onChange={handleChange}
                />
            </label>
            <br />
            <button type="submit">Submit</button>
        </form>
    );
}

export default FormComponent;
