import React from 'react';
import {Table} from 'antd';
import '../../mock/home';
import * as Apis from '../../api/home';

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
        console.log('componentDidMount!!');
        this.getList();
    }

    // getDerivedStateFromProps是一个静态方法，this为undefined，不指向实例，所以也拿不到实例的属性和方法。
    // 官方文档解释：以后的组件将进行异步渲染，防止实例属性的被不安全访问，编写出异步兼容的代码
    static getDerivedStateFromProps(props,state){
        console.log('this',this);
        console.log('getDerivedStateFromProps!',props,state);
        return null
    }
    
    getSnapshotBeforeUpdate(prevProps, preState){
        console.log('getSnapshotBeforeUpdate!',prevProps,preState);
        return null
    }
    shouldComponentUpdate(){
       console.log('shouldComponentUpdate!');
       return true;
    }
    componentDidUpdate(){
        console.log('componentDidUpdate!');
    }
    componentDidCatch(err){
       console.log('err:',err);
    }
    getList() {
        this.setState({
            loading:true
        });
        Apis.getList().then(res => {
            let list = res.data.content;
            console.log('list:',list);
            this.setState({
                list,
                loading:false
            })
        }).catch(err=>{
            console.log(err);
            this.setState({
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
        console.log('render!!!');
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