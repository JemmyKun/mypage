import React from 'react';
import axios from 'axios';
import {Table} from 'antd';
import '../../mock/home';

class Home extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            list: [],
            pageSize: 10, // 每页几条数据
            pageNum: 1, // 第几页
            loading:true
        }
    }
    componentDidMount() {
        this.getList();
    }

    getList() {
        this.setState({
            loading:true
        });
        axios.get('/api/getList').then(res => {
            let list = res.data.content;
            console.log('list:',list);
            this.setState({
                list,
                loading:false
            })
        })
    }

    handleTableChange(pagination, filters) {
		let { current, pageSize } = pagination;
		this.setState(
			{
				pageNum: current,
				pageSize,
			},
			() => {
				this.getList();
			}
		);
	}
    render() {
        const {list,loading,pageNum,pageSize} = this.state;
        const columns = [{
            title: '编号',
            dataIndex: 'num',
            key: 'num',
            width: '10%',
            render: (num, item, index) => {
                return <span className={'table-list-name'}>{index+1}</span>;
            }
        },{
            title: '标题',
            dataIndex: 'title',
            width: '20%',
            key: 'title',
          }, {
            title: '内容',
            dataIndex: 'content',
            width: '20%',
            key: 'content',
          }, {
            title: '操作',
            width: '20%',
            dataIndex: 'action',
            key: 'action',
        }];
          
        return (
            <div className="content-container">
              <Table
					className="list-table"
					rowKey={(item) => item.key}
					dataSource={list.data}
					columns={columns}
					loading={loading}
					pagination={{
						current: pageNum,
						pageSize: pageSize,
						showSizeChanger: true,
						pageSizeOptions: [ '10', '20', '50' ],
						total: list.totalCount
					}}
					onChange={this.handleTableChange.bind(this)}
				/>
            </div>
        )
    }
}

export default Home;