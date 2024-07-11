import React from 'react';
import { Checkbox } from 'antd';
import { DeleteOutlined } from '@ant-design/icons';
import moment from 'moment';

const TaskItem = ({
    task,
    index,
    checked,
    isTaskDatePassed,
    handleCheckboxChange,
    handleDeleteTask
}) => {
    return (
        <p key={index} className={`task-info task-item ${isTaskDatePassed(task.date) ? 'red-text' : ''}`}>
            <span className={checked ? 'strikethrough' : ''}>
                {task.name}
                <br />
                截止时间：{moment(task.date).format('YYYY-MM-DD')}
            </span>
            <span className="delete-checkbox">
                <Checkbox checked={checked} onChange={() => handleCheckboxChange(index)}></Checkbox>
            </span>
            <span className="deleteOutlined" style={{ margin: '0 50px' }}>
                <DeleteOutlined onClick={() => handleDeleteTask(index)} />
            </span>
        </p>
    );
};

export default TaskItem;