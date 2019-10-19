import React from 'react';
import {Button, Layout} from 'antd';
import Loading from "./Loading";
import logo from './assets/sahibinden.png';
import { Card } from 'antd';

const {Header, Content, Footer} = Layout;

//Ads componentinde kullanıcının Show'a basmasıyla detaylı bilgileri gösteren class
//tıklanılan Id bilgisini aktararak ilgili ilanın detaylı bir şekilde ant design CARD componentinde gösterilmesini sağlar
class ShowAd extends React.Component {

    constructor(props) {
        super(props);
        this.state = {ilan: [], id: '',};
    }

    componentDidMount() {
        fetch('https://devakademi.sahibinden.com/api/auction?id=' + this.props.match.params.id)
            .then(response => {
                return response.json();
            }).then(result => {
            console.log(result);
            this.setState({ilan: result});
        });
    };


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
                        <img  src={logo} alt="Logo"/>
                        </a>
                    </div>


                </Header>
                <Content style={{position: 'absolute', top: '70px', bottom: '70px', width: '100%', overflow: 'auto'}}>
                    <br/>
                    <div style={{position: 'absolute', left:'37%', padding: 24, minHeight: 280, textAlign:"center"}}>

                        <Card style={{ width: 300, textAlign:"center"}}>
                            <p> <h1>{this.state.ilan.title}</h1></p>
                            <p>{this.state.ilan.description}</p>
                            <p> {this.state.ilan.city}/{this.state.ilan.town}</p>
                            <p> <b><h1>{this.state.ilan.price}</h1></b></p>
                            <p><Button type="danger" size={"large"} href={"https://ozanaydin.herokuapp.com/"}>Buy</Button></p>
                        </Card>

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

export default ShowAd;
