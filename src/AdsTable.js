import React from 'react';
import {Table,Typography,Button} from 'antd';

const { Text } = Typography;

class AdsTable extends React.Component {

    constructor(props) {
        super(props);
        this.state = {ilan: props.ilan};
    }

    render() {
        const columns = [
            {
                title: 'id',
                dataIndex: 'id',
                key: 'id'
            },{
                title: 'title',
                dataIndex: 'title',
                key: 'title'
            },
            {
                title: 'description',
                dataIndex: 'description',
                key: 'description'

            },
            {
                title: 'price',
                dataIndex: 'price',
                key: 'price'

            },
            {
                title: 'town',
                dataIndex: 'town',
                key: 'town'

            },
            {
                title: 'city',
                dataIndex: 'city',
                key: 'city'

            }];

        const data = this.state.ilan.map(element =>{
            let id;
            let title;
            let description;
            let price;
            let town;
            let city;

            id =  <Text>{element.id}</Text>;
            title =  <Text>{element.title}</Text>;
            description =  <Text>{element.description}</Text>;
            price =  <Text >{element.price}</Text>;
            town =  <Text>{element.town}</Text>;
            city =  <Text>{element.city}</Text>;


            return { id:id, description:description, title: title, price:price, town:town, city:city  };
        });

        return (<Table columns={columns} dataSource={data} size={'small'} pagination={false}/>
        )
    }
} export default AdsTable;