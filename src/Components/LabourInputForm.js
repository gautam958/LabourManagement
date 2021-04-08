import React, { useState, useEffect, useRef } from 'react';
import ReactDom from 'react-dom';
import KeyboardEventHandler from 'react-keyboard-event-handler';
import provideState from 'react-provide-state';
import CustomInput from './Common/Input';

const ComponentECode = `&lt;KeyboardEventHandler handleKeys={['all']} onKeyEvent={(key, e) =&gt; props.setEventKey(key)} &gt;
      &lt;p&gt;
        &lt;input type="text" placeholder="Key events will be handled"/&gt;
      &lt;/p&gt;
      &lt;p&gt;
        &lt;a href="#" &gt;Example focusable element. Key event will be handled&lt;/a&gt;
      &lt;/p&gt;
    &lt;/KeyboardEventHandler&gt;`;
const ComponentE = (props) => (<div className="card card-with-margin">
    <div className="card-header">I handle <strong>all</strong> key events from my wrapped children</div>
    <div className="card-body ">
        <small dangerouslySetInnerHTML={{ __html: ComponentECode }}></small>
    </div>
    <div className="card-footer text-success">key detected: <strong>
        <mark>{props.eventKey}</mark>
        <KeyboardEventHandler handleKeys={['all']} onKeyEvent={(key, e) => props.setEventKey(key)} >
            <p>
                <input type="text" placeholder="Key events will be handled" />
            </p>
            <p>
                <a href="#" >Example focusable element. Key event will be handled</a>
            </p>
        </KeyboardEventHandler>
    </strong></div>

</div>);
const ComponentECodeWithKeyState = provideState({ namespace: Symbol(), name: 'eventKey' })(ComponentE);


const LabourInputForm = (props) => {
    const refDc_Code = useRef();
    const refUser_ID = useRef();
    const [Dc_Code, setDc_Code] = useState('10');
    const [User_ID, setUser_ID] = useState('');
    const [User_Name, setUser_Name] = useState('');
    const [Task_Type, setTask_Type] = useState('');
    const [Task_Desc, setTask_Desc] = useState('');
    useEffect(() => {
        refUser_ID.current.focus();
        // console.warn('use effect', props.LabourReducer.list);
    }, []);
    const handleChange = (event) => {
        console.log(event.key + "  event.key ");
        console.log(event.code + "  event.code ");
        console.log(event.which + "  event.which ");

        setUser_ID(event.target.value);

        if (event.key === 13) {
            User_Name('Gautam');
            handleSubmit(event);
        }
    }
    const handleBlur = (event) => {
        User_Name('Gautam');
        handleSubmit(event);
    }
    const handleSubmit = (event) => {
        alert('A name was submitted: ' + User_Name);
        event.preventDefault();
    };
    return (

        <div>

            <ComponentECodeWithKeyState />

            <form className="ui form" onSubmit={handleSubmit}>
                <div className="field">
                    <label>DC Code</label>
                    <input name="Dc_Code" value={Dc_Code} placeholder="Dc Code"
                        ref={refDc_Code}
                    />
                </div>
                <div className="field">
                    <label>User ID</label>
                    <input name="User_ID" placeholder="User ID" onKeyEvent={handleChange}
                        ref={refUser_ID}
                    />
                    {/* <CustomInput /> */}
                    {/* <KeyboardEventHandler handleKeys={['all']}
                        onKeyEvent={(key, e) => props.setEventKey(key)} >
                        <p> <input type="text" placeholder="Key events will be handled" /> </p>
                        <p>
                            <a href="#" >Example focusable element. Key event will be handled</a> </p> </KeyboardEventHandler> */}
                    <div className="card-footer text-success">key detected: <strong>
                        <mark>{props.eventKey}</mark>
                    </strong></div>
                    <KeyboardEventHandler handleKeys={['all']} onKeyEvent={(key, e) => props.setEventKey(key)} />
                </div>
                <div className="field">
                    <label>User Name</label>
                    <input name="User_Name" value={User_Name} placeholder="User Name" readOnly />
                </div>
                <div className="field">
                    <label>Task Type</label>
                    <input name="Task_Type" value={Task_Type} placeholder="Task Type" />
                </div>
                <div className="field">
                    <label>Task Desc</label>
                    <input name="Task_Desc" value={Task_Desc} placeholder="Task Desc" />
                </div>
                <button className="ui button" type="submit">Submit</button>
            </form>
        </div>
    )
}

export default LabourInputForm
