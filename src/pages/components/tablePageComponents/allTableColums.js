export function taxesWithholdStateSearchColumnsFunc(_this) {
    console.log(_this)
    return [
        {
            title: '名字',
            width: 100,
            dataIndex: 'name',
            key: 'name',
            fixed: 'left',
        },
        {
            title: '年龄',
            width: 100,
            dataIndex: 'age',
            key: 'age',
            fixed: 'left',
        },
        { title: 'Column 1', dataIndex: 'address', key: '1' },
        { title: 'Column 2', dataIndex: 'address', key: '2' },
        {
            title: '操作',
            key: 'operation',
            fixed: 'right',
            width: 100,
            render: (p) =>{
                return (
                    <div>
                        <a onClick={() => {
                            _this.tableOperationFunc({ row: p, type: 'update', from: 'taxesWithholdStateSearchColumnsFunc'}) }
                        }>修改</a>
                        <a> | </a>
                        <a onClick={() => {
                            _this.tableOperationFunc({ row: p, type: 'deleted', from: 'taxesWithholdStateSearchColumnsFunc'}) }
                        }>删除</a>
                    </div>
                )
            }
        },
    ]
}