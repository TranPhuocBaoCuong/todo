import { Col, Row, Input, Button, Select, Tag } from 'antd'
import Todo from '../Todo'
import { useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { v4 as uuidv4 } from 'uuid'
import { todoListRemainingSelector } from '../../redux/selector'
import { addNewTodo } from './todoListSlice'

export default function TodoList() {
    const dispatch = useDispatch()
    const todoList = useSelector(todoListRemainingSelector)

    const [todoName, setTodoName] = useState('')
    const [todoPriority, setTodoPriority] = useState('Medium')

    const handleTodoInputChange = (e) => {
        setTodoName(e.target.value)
    }

    const handleTodoPriorityChange = (value) => {
        setTodoPriority(value)
    }

    const handleAddTodoButtonClick = () => {
        dispatch(
            addNewTodo({
                id: uuidv4(),
                name: todoName,
                completed: false,
                priority: todoPriority,
            })
        )

        setTodoName('')
        setTodoPriority('Medium')
    }

    return (
        <Row style={{ height: 'calc(100% - 40px)' }}>
            <Col
                span={24}
                style={{ height: 'calc(100% - 40px)', overflowY: 'auto' }}
            >
                {todoList.map((todo) => {
                    return (
                        <Todo
                            key={todo.id}
                            id={todo.id}
                            name={todo.name}
                            completed={todo.completed}
                            priority={todo.priority}
                        />
                    )
                })}
            </Col>
            <Col span={24}>
                <Input.Group style={{ display: 'flex' }} compact>
                    <Input value={todoName} onChange={handleTodoInputChange} />
                    <Select
                        defaultValue="Medium"
                        value={todoPriority}
                        onChange={handleTodoPriorityChange}
                    >
                        <Select.Option value="High" label="High">
                            <Tag color="red">High</Tag>
                        </Select.Option>
                        <Select.Option value="Medium" label="Medium">
                            <Tag color="blue">Medium</Tag>
                        </Select.Option>
                        <Select.Option value="Low" label="Low">
                            <Tag color="gray">Low</Tag>
                        </Select.Option>
                    </Select>
                    <Button type="primary" onClick={handleAddTodoButtonClick}>
                        Add
                    </Button>
                </Input.Group>
            </Col>
        </Row>
    )
}
