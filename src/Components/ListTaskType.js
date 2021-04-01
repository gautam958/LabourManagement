import React, { useEffect } from 'react';

const ListTaskType = (props) => {

    useEffect(() => {
        props.LoadList();
        // console.warn('use effect', props.LabourReducer.list);
    }, []);
    // console.warn('List Data', props);


    const renderTableData = () => {
        return props.LabourReducer.list.map((TaskData, index) => {
            const { Code, Code_Desc } = TaskData //destructuring
            return (
                <tr key={Code}>
                    <td  >{Code}</td>
                    <td >{Code_Desc}</td>
                </tr>
            )
        })
    };

    return (
        <div>
            <table className="ui celled table">
                <thead>
                    <tr style={{ fontsize: "14px" }}>
                        <th>Task Type Code</th>
                        <th>Task Type Desc.</th>
                    </tr>
                </thead>
                <tbody>

                    {renderTableData()}


                </tbody>
            </table>
        </div>
    );

}

export default ListTaskType