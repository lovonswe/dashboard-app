import React, { useState } from 'react';
import DatePicker from 'react-datepicker';
import 'react-datepicker/dist/react-datepicker.css';
import TimePicker from 'react-time-picker';
import 'react-time-picker/dist/TimePicker.css';
import './FormStyle.css'; // Import your CSS file for styling
import { useTaskStore } from '../appStore';
import { ToastContainer, toast } from 'react-toastify';


function Form({ page }) {
    const {addEntry} = useTaskStore();
    
    const [formData, setFormData] = useState({
        taskName: '',
        priority: 'high',
        type: 'personal',
        gender: 'male',
        description: '',
        subscription: false,
        file: null,
        date: new Date(),
        time: '12:00'
    });

    const handleChange = (e) => {
        const { name, value, type, checked, files } = e.target;
        setFormData(prevState => ({
            ...prevState,
            [name]: type === 'checkbox' ? checked : type === 'file' ? files[0] : value
        }));
    };

    const handleDateChange = (date) => {
        setFormData(prevState => ({
            ...prevState,
            date
        }));
    };

    const handleTimeChange = (time) => {
        setFormData(prevState => ({
            ...prevState,
            time
        }));
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        console.log(formData); // You can handle form submission logic here
        addEntry(formData);
    };

    return (
        <form onSubmit={handleSubmit} className="form-container">
            <label>
                TaskName:
                <input type="text" name="taskName" value={formData.taskName} onChange={handleChange} />
            </label>
            <br />
            {/* <label>
        Email:
        <input type="email" name="email" value={formData.email} onChange={handleChange} />
      </label>
      <br /> */}
            <label>
                Description:
                <textarea name="description" value={formData.description} onChange={handleChange} />
            </label>
            <br />
            <label>
                Type:
                <select name="gender" value={formData.type} onChange={handleChange}>
                    <option value="male">Personal</option>
                    <option value="female">Team</option>
                    <option value="other">Family</option>
                    <option value="other">Social</option>
                    <option value="other">Daily</option>
                    <option value="other">Ocasional</option>
                </select>
            </label>
            <br />
            <label>
                Priority:
                <select name="gender" value={formData.priority} onChange={handleChange}>
                    <option value="male">Very high</option>
                    <option value="female">high</option>
                    <option value="other">mdeium</option>
                    <option value="other">low</option>
                </select>
            </label>
            <br />

            {/* <label>
        Subscription:
        <input type="checkbox" name="subscription" checked={formData.subscription} onChange={handleChange} />
      </label>
      <br /> */}
            {/* <label>
        Upload File:
        <input type="file" name="file" onChange={handleChange} />
      </label>
      <br /> */}
            {
                page !== 'Myday' && <>
                    <label>
                        Date:
                        <DatePicker selected={formData.date} onChange={handleDateChange} />
                    </label>
                    <br />
                </>
            }
            <label>
                Time:
                <TimePicker value={formData.time} onChange={handleTimeChange} />
            </label>
            <br />
            <button type="submit">Submit</button>
        </form>
    );
}

export default Form;
