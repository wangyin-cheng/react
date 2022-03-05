import React, {Component} from 'react';
import { taxesWithholdStateSearchColumnsFunc } from './allTableColums';
import { Table } from 'antd';
import { getList } from '../../../services/api/todolist'

class TablePageComponents extends Component {
    constructor(props) {
        super(props);
        this.state = {
            tableData: [
                { key: 0, name: 1 }
            ],
            pageTotal: 0
        }
    }
    componentDidMount() {
        getList().then((res) => {
            if(res) {
                const list = (res.list || []).map((item, index) => {
                    return {
                        ...item,
                        key: index
                    }
                })
                this.setState({
                    pageTotal: res.total,
                    tableData: list
                })
            }
        })
    }

    tableOperationFunc(p) {
        const {from, row, type} = p;
        console.log('操作需要参数', row)
        console.log('操作类型', type)
        console.log('操作来源', from)
    }

    render() {
        const {tableData, pageTotal} = this.state
        return (
            <div>
                <Table
                    columns={taxesWithholdStateSearchColumnsFunc(this)}
                    dataSource={tableData}
                    pagination={
                        {
                            current: 1,
                            pageSize: 10,
                            total: pageTotal,
                            showSizeChanger: true,
                            showQuickJumper: true,
                            showTotal: (total) => `总 ${total} 记录`
                        }
                    }
                />
            </div>
        );
    }
}

export default TablePageComponents;