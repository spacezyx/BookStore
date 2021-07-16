/* eslint-disable no-use-before-define */
import React from 'react';
import TextField from '@material-ui/core/TextField';
import Autocomplete, { createFilterOptions } from '@material-ui/lab/Autocomplete';

const filterOptions = createFilterOptions({
    matchFrom: 'start',
    stringify: (option) => option.name,
});

export default function Filter() {
    return (
        <Autocomplete
            id="filter-demo"
            options={books}
            getOptionLabel={(option) => option.name}
            filterOptions={filterOptions}
            style={{ width: 300 }}
            renderInput={(params) => <TextField {...params} label="Custom filter" variant="outlined" />}
        />
    );
}

const books = [
    {name:'百年孤独',author:'加夫列尔·加西亚·马尔克斯',ISBN:9787544291170,price:30},
    {name: '乌合之众',author: '勒庞' ,ISBN:9787801093660 ,price: 16},
    {name: '追风筝的人',author:'卡勒德·胡赛尼' ,ISBN:9787208061644 ,price:20 },
    {name:'万历十五年' ,author: '黄仁宇',ISBN:9787108009821 ,price:18 },
    {name:'红楼梦' ,author:'曹雪芹' ,ISBN:  9787020002207,price: 59.7},
    {name:'三体' ,author:'刘慈欣' ,ISBN: 9787900516176,price:70 },
    {name: '白夜行',author: '东野圭吾',ISBN: 9787544258609,price:39.5 },
    {name: '小王子',author:'安东尼·德·圣-埃克苏佩里' ,ISBN:9787020042494 ,price: 22},
    {name:'月亮与六便士' ,author:'威廉·萨默塞特·毛姆' ,ISBN: 9787533936020,price: 39.8 },
];
