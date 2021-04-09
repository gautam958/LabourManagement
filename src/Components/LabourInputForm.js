import React, { useState, useEffect, useRef } from 'react';

const LabourInputForm = () => {
    const [LabourData, SetLabourData] = useState({
        Dc_Code: '10',
        User_Id: '',
        User_Name: '',
        Task_Type: '',
        Task_Desc: '',
        TaskList: '',
    });
    // const refUser_Id = useRef();
    // const [Dc_Code, setDc_Code] = useState('10');
    // const [User_ID, setUser_ID] = useState('');
    // const [User_Name, setUser_Name] = useState('');
    // const [Task_Type, setTask_Type] = useState('');
    // const [Task_Desc, setTask_Desc] = useState('');
    useEffect(() => {
        // refUser_Id.current.focus();
        // console.warn('use effect', props.LabourReducer.list);
    }, []);
    const handleChange = (event) => {
        SetLabourData(event.target.name = event.target.value
        );

        // Call API
    };
    const handleSubmit = (event) => {
        event.preventDefault();
        alert('Form Data ' + JSON.stringify(LabourData));
    };

    return (
        <div>
            <form className="ui form" onSubmit={handleSubmit}>
                <div className="field">
                    <label>DC Code</label>
                    <input
                        name="Dc_Code"
                        value={LabourData.Dc_Code}
                        onChange={handleChange}
                        placeholder="Dc Code"
                    />
                </div>
                <div className="field">
                    <label>User ID</label>
                    <input
                        name="User_Id"
                        placeholder="User Id"
                        onChange={handleChange}
                        action="go"
                    />
                </div>
                <div className="field">
                    <label>User Name</label>
                    <input
                        name="User_Name"
                        value={LabourData.User_Name}
                        onChange={handleChange}
                        placeholder="User Name"
                        readOnly
                    />
                </div>
                <div className="field">
                    <label>Task Type</label>
                    <input
                        name="Task_Type"
                        value={LabourData.Task_Type}
                        onChange={handleChange}
                        placeholder="Task Type"
                    />
                </div>
                <div className="field">
                    <label>Task Desc</label>
                    <input
                        name="Task_Desc"
                        value={LabourData.Task_Desc}
                        onChange={handleChange}
                        placeholder="Task Desc"
                        readOnly
                    />
                </div>
                <button className="ui button" type="submit">
                    Submit
        </button>
            </form>
        </div>
    );
};

export default LabourInputForm;
