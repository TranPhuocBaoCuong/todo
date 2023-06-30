import { Row, Col, Typography, Input, Radio, Select, Tag } from 'antd'
import { useState } from 'react'
import { useDispatch } from 'react-redux'
import filtersSlice from './filtersSlice'

export default function Filters() {
    const dispatch = useDispatch()

    const [searchText, setSearchText] = useState('')
    const [statusFilter, setStatusFilter] = useState('All')
    const [prioritiesFilter, setPrioritiesFilter] = useState([])

    const handleSearchTextChange = (e) => {
        setSearchText(e.target.value)
        dispatch(filtersSlice.actions.changeSearchFilter(e.target.value))
    }

    const handleStatusFilterChange = (e) => {
        setStatusFilter(e.target.value)
        dispatch(filtersSlice.actions.changeStatusFilter(e.target.value))
    }

    const handlePrioritiesChange = (value) => {
        setPrioritiesFilter(value)
        dispatch(filtersSlice.actions.changePrioritiesFilter(value))
    }

    return (
        <Row justify="center">
            <Col span={24}>
                <Typography.Paragraph
                    style={{
                        fontWeight: 'bold',
                        marginBottom: 3,
                        marginTop: 10,
                    }}
                >
                    Search
                </Typography.Paragraph>
                <Input.Search
                    placeholder="input search text"
                    value={searchText}
                    onChange={handleSearchTextChange}
                />
            </Col>
            <Col sm={24}>
                <Typography.Paragraph
                    style={{
                        fontWeight: 'bold',
                        marginBottom: 3,
                        marginTop: 10,
                    }}
                >
                    Filter By Status
                </Typography.Paragraph>
                <Radio.Group
                    value={statusFilter}
                    onChange={handleStatusFilterChange}
                >
                    <Radio value="All">All</Radio>
                    <Radio value="Completed">Completed</Radio>
                    <Radio value="Todo">To do</Radio>
                </Radio.Group>
            </Col>
            <Col sm={24}>
                <Typography.Paragraph
                    style={{
                        fontWeight: 'bold',
                        marginBottom: 3,
                        marginTop: 10,
                    }}
                >
                    Filter By Priorities
                </Typography.Paragraph>
                <Select
                    mode="multiple"
                    allowClear
                    placeholder="Please select"
                    style={{ width: '100%' }}
                    value={prioritiesFilter}
                    onChange={handlePrioritiesChange}
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
            </Col>
        </Row>
    )
}
