import React, {Component} from 'react';
import { Tabs } from 'antd';
import './style/index.css';
import TaxesOrWithholdManager from './components/taxesOrWithholdManager';
import IncomeWithTaxesCalcManager from './components/incomeWithTaxesCalcManager';
import TaxesWithholdStateSearch from './components/taxesWithholdStateSearch';
import WithholdReviewDealer from './components/withholdReviewDealer';
import PayInManager from './components/payInManager';
import PayInManagerDealer from './components/payInManagerDealer';
import TransferMoneyManager from './components/transferMoneyManager';

const { TabPane } = Tabs;

class Index extends Component {
    constructor(props) {
        super(props);
        this.state = {
            componentsList: [
                {label: '税费代扣权限查询',name:'1',componentName: 'taxesWithholdStateSearch'},
                {label: '收入与税费计算管理',name:'2',componentName: 'incomeWithTaxesCalcManager' },
                {label: '税费与代扣管理',name:'3',componentName: 'taxesOrWithholdManager' },
                {label: '代扣复核-券商',name:'4',componentName: 'withholdReviewDealer' },
                {label: '缴款管理',name:'5',componentName: 'payInManager' },
                {label: '缴款管理-券商',name:'6',componentName: 'payInManagerDealer' },
                {label: '划款管理',name:'7',componentName: 'transferMoneyManager' }
            ]
        }
    }
    render() {
        const {componentsList} = this.state
        return (
            <div className="model-warp">
                <Tabs defaultActiveKey="1" >
                    {
                        componentsList.map((item) => {
                            switch (item.componentName) {
                                case  'taxesWithholdStateSearch' :
                                    return (
                                        <TabPane tab={item.label} key={item.name}>
                                            <TaxesWithholdStateSearch />
                                        </TabPane>
                                    );
                                case  'taxesOrWithholdManager' :
                                    return (
                                        <TabPane tab={item.label} key={item.name}>
                                            <TaxesOrWithholdManager />
                                        </TabPane>
                                    );
                                case  'incomeWithTaxesCalcManager' :
                                    return (
                                        <TabPane tab={item.label} key={item.name}>
                                            <IncomeWithTaxesCalcManager />
                                        </TabPane>
                                    )
                                case  'withholdReviewDealer' :
                                    return (
                                        <TabPane tab={item.label} key={item.name}>
                                            <WithholdReviewDealer />
                                        </TabPane>
                                    )
                                case  'payInManager' :
                                    return (
                                        <TabPane tab={item.label} key={item.name}>
                                            <PayInManager />
                                        </TabPane>
                                    )
                                case  'payInManagerDealer' :
                                    return (
                                        <TabPane tab={item.label} key={item.name}>
                                            <PayInManagerDealer />
                                        </TabPane>
                                    )
                                case  'transferMoneyManager' :
                                    return (
                                        <TabPane tab={item.label} key={item.name}>
                                            <TransferMoneyManager />
                                        </TabPane>
                                    )
                            }
                        })
                    }
                </Tabs>
            </div>
        );
    }
}

export default Index;
