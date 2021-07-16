import React from 'react';
import { Card } from 'antd';

import {Link} from 'react-router-dom'

const { Meta } = Card;

export class BookRoot extends React.Component{


    render() {

        const {info} = this.props;
        return (
            <Link to={{
                pathname: '/RootBookView',
                search: '?id=' + info.bookId}}
                  target="_blank"
            >
                <Card
                    hoverable
                    style={{width: 181}}
                    cover={<img alt="image" src={info.image1} className={"bookImg"}/>}
                    //onClick={this.showBookDetails.bind(this, info.bookId)}
                >
                    <Meta title={info.title} description={info.type}/>
                </Card>
            </Link>
        );
    }

}

