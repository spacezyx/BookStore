import React from 'react';
import {AutoComplete, Button, Icon, Input, List} from 'antd'
import {Book} from './Book'
import {getBooks} from "../services/bookService";
import {getBookByName} from "../services/bookService";
import {BookCarousel} from "../components/BookCarousel";
const { Option } = AutoComplete;


function onSelect(value) {
    console.log('onSelect', value);
}

export class BookList extends React.Component{

    constructor(props) {
        super(props);
        this.state = {books:[],dataSource: []};
    }

    componentDidMount() {
        const callback =  (data) => {
           this.setState({books:data});
        };

        getBooks({"search":null}, callback);
        console.log('this.state.books');
    }

    handleSearch = value => {
        const callback =  (data) => {
            this.setState({books:data});
        };
        getBookByName(value, callback);
        console.log('this.state.books');
    };

    render() {
        const { dataSource } = this.state;
        return (
            <div>
            <div className="global-search-wrapper" style={{ width: 300 }}>
                <AutoComplete
                    className="global-search"
                    size="large"
                    style={{ width: '100%' }}
                    // dataSource={books.map(renderOption)}
                    dataSource={dataSource}
                    onSelect={onSelect}
                    onSearch={this.handleSearch}
                    placeholder="input here"
                    optionLabelProp="text"
                >
                    <Input
                        suffix={
                            <Button
                                className="search-btn"
                                style={{ marginRight: -12 }}
                                size="large"
                                type="primary"
                            >
                                <Icon type="search" />
                            </Button>
                        }
                    />
                </AutoComplete>
            </div>

                <BookCarousel/>

            <List
                grid={{gutter: 10, column: 4}}
                dataSource={this.state.books}
                pagination={{
                    onChange: page => {
                        console.log(page);
                    },
                    pageSize: 16,
                }}

                renderItem={item => (
                    <List.Item>
                        <Book info={item} />
                    </List.Item>
                )}
            />
            </div>
        );
    }

}