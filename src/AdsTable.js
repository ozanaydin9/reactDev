import React from 'react';
import {Table, Typography, Button} from 'antd';

const {Text} = Typography;

class AdsTable extends React.Component {

    constructor(props) {
        super(props);
        this.state = {ilan: props.ilan};
    }

    render() {
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

        return (<Table columns={columns} dataSource={data} size={'small'} pagination={false}/>
        )
    }
}

export default AdsTable;