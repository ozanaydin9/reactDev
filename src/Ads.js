import React from 'react';
import {Layout, Pagination} from 'antd';
import AdsTable from "./AdsTable";
import Loading from "./Loading";
import logo from './assets/sahibinden.png';


const {Header, Content, Footer} = Layout;

class Ads extends React.Component {

    constructor(props) {
        super(props);
        this.state = {ilan: [], offset: '0', page: '1', isLoading: true};
        this.loadTodosFromServer = this.loadTodosFromServer.bind(this);
    }

    componentDidMount() {
        this.loadTodosFromServer();
    }

    handlePageClick = selected => {
        this.setState({page: selected});
        this.setState({offset: (selected - 1) * 10}, () => {
            this.loadTodosFromServer()
        })
    };


    loadTodosFromServer() {
        this.setState({isLoading: true});
        fetch(`https://devakademi.sahibinden.com/api/auctions?offset=${this.state.offset}&size=10`)
            .then(response => response.json())
            .then(ilan => this.setState({ilan: ilan, total: ilan.totalPages * 10, isLoading: false}));
    }

    render() {
        if (this.state.isLoading) {
            return <Loading/>;
        }

        return (
            <Layout className="layout">
                <Header style={{
                    textAlign: 'center',
                    position: 'fixed',
                    left: '0',
                    height: '70px',
                    width: '100%',
                    backgroundColor: '#96d9e7'
                }}>

                    <div id="logo">
                        <img src={logo} alt="Logo"/>
                    </div>


                </Header>
                <Content style={{position: 'absolute', top: '70px', bottom: '70px', width: '100%', overflow: 'auto'}}>
                    <br/>
                    <p style={{position: 'relative', width: '30%', left: '35%', textAlign: 'center'}}>
                        {/*<Input size={'large'} type="text" name="newTodo" value={this.state.newTodo} onKeyPress={this.handleKeyPress} onChange={this.handleChange} placeholder="Write Todo" />
                        <Button type="default" size={'large'} style={{backgroundColor:'#FFD00F'}} onClick={this.addTodo}>Add Todo</Button>*/}
                    </p>

                    <div style={{background: '#fff', padding: 24, minHeight: 280}}>
                        <AdsTable ilan={this.state.ilan}/>
                        <Pagination onChange={this.handlePageClick}
                                    defaultCurrent={this.state.page}
                                    total={this.state.total}/>

                    </div>
                </Content>
                <Footer style={{
                    backgroundColor: '#96d9e7',
                    position: 'fixed',
                    left: '0',
                    height: '70px',
                    width: '100%',
                    bottom: '0',
                    top: 'auto',
                    textAlign: 'center',
                    fontSize: '20px'
                }}>
                    <text style={{color: 'white'}}>Ozan Aydın</text>
                </Footer>
            </Layout>
        );
    }
}

export default Ads;
