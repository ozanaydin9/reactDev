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
        this.loadAdsFromServer = this.loadAdsFromServer.bind(this);
    }

    //Component mount edildiğinde direk çağrılan method verileri serverdan yükleme işlemini yapan loadAdsFromServer'i çağırır
    componentDidMount() {

        
        this.loadAdsFromServer();
    }

    //Pagination'dan aldığım selected verisine göre offset değerini set'leyip kullanıcının 10'arlı şekilde düzgün verileri görmesini sağladığım metod
    handlePageClick = selected => {
        this.setState({page: selected});
        this.setState({offset: (selected - 1) * 10}, () => {
            this.loadAdsFromServer()
        })
    };

    //Servisten offset değerine göre verileri 10'arlı şekilde getiren fonksiyonum
    loadAdsFromServer() {
        this.setState({isLoading: true});
        fetch(`https://devakademi.sahibinden.com/api/auctions?offset=${this.state.offset}&size=10`)
            .then(response => response.json())
            .then(ilan => this.setState({ilan: ilan, total: 2000, isLoading: false}));
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
                    backgroundColor: '#3F475F'
                }}>

                    <div id="logo">
                        <a href="/">
                            <img src={logo} alt="Logo"/>
                        </a>
                    </div>


                </Header>
                //AdsTable componentinden verilerimi Contentimde göstermemi sağlayan call
                <Content style={{position: 'absolute', top: '70px', bottom: '70px', width: '100%', overflow: 'auto'}}>
                    <div style={{background: '#fff', padding: 24, minHeight: 280}}>

                        <AdsTable ilan={this.state.ilan}/>
                        <Pagination style={{
                            position: 'absolute', left:'37%'
                        }} onChange={this.handlePageClick}
                                    defaultCurrent={this.state.page}
                                    total={this.state.total}/>

                    </div>
                </Content>
                <Footer style={{
                    backgroundColor: '#3F475F',
                    position: 'fixed',
                    left: '0',
                    height: '70px',
                    width: '100%',
                    bottom: '0',
                    top: 'auto',
                    textAlign: 'center',
                    fontSize: '20px'
                }}>
                    <text style={{color: 'white'}}>Ozan Aydın-DevAkademi2019</text>
                </Footer>
            </Layout>
        );
    }
}

export default Ads;
