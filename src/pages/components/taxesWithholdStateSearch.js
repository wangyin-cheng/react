import React, {Component, Fragment } from 'react';
import TablePageComponents from "./tablePageComponents";
import { Button  } from 'antd';

class TaxesWithholdStateSearch extends Component {
    addTableFunc() {
        this.refs.TablePageComponentsRef.tableOperationFunc({
            from: 'TablePageComponentsRef',
            type: 'add',
            row: {}
        })
    }
    render() {
        return (
            <Fragment>
                <div className='search-form'>
                    <Button type="primary" onClick={() => { this.addTableFunc()}}>添加</Button>
                </div>
                <div className="table-warp">
                    <TablePageComponents ref={'TablePageComponentsRef'} />
                </div>
            </Fragment>
        );
    }
}

export default TaxesWithholdStateSearch;