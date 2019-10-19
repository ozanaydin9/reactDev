import React from 'react';
import {Table, Typography, Button} from 'antd';

const {Text} = Typography;

class AdsTable extends React.Component {

    constructor(props) {
        super(props);
        this.state = {ilan: props.ilan};
    }

    render() {
        //Ant Design gösterilen verileri belirten kolonlarım
        const columns = [
            {
                title: 'TITLE',
                dataIndex: 'title',
                key: 'title'
            },
            {
                title: 'PRICE',
                dataIndex: 'price',
                key: 'price'

            },
            {
                title: 'TOWN',
                dataIndex: 'town',
                key: 'town'

            },
            {
                title: 'CITY',
                dataIndex: 'city',
                key: 'city'

            },
            {
                title: 'ACTION',
                dataIndex: 'action',
                key: 'action',
                fixed: 'right',
                width: 100,

            }];

        //gelen datayı kolonlara setleme işlemim
        const data = this.state.ilan.map(element => {


            let id = <Text>{element.id}</Text>;
            let title = <Text>{element.title}</Text>;
            let description = <Text>{element.description}</Text>;
            let price = <Text>{element.price}</Text>;
            let town = <Text>{element.town}</Text>;
            let city = <Text>{element.city}</Text>;
            const action = <Button type="primary" href={"/ShowAd/" + element.id}>Show</Button>;
            return {
                id: id,
                description: description,
                title: title,
                price: price,
                town: town,
                city: city,
                action: action
            };
        });

        //Ads.js Content'imde render edilmek üzere return edilen Table componentim
        return (<Table columns={columns} dataSource={data} size={'small'} pagination={false}/>
        )
    }
}

export default AdsTable;