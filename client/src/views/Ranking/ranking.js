import React from 'react'
import "antd/dist/antd.css";
import "./ranking.css";
import { Table, Input, Button, Space,Tag } from 'antd';
// import Highlighter from 'react-highlight-words';
import { SearchOutlined } from '@ant-design/icons';

// import Highlighter from 'react-highlight-words';
// import { SearchOutlined } from '@ant-design/icons';

// const {
//     authState: {
//         user: {
//             username
//         }
//     }
// } = useContext(AuthContext);
const ranking = () => {
  const data = [
    {
      key: '1',
      name: 'Tô Huy Thế Anh',
      age: 1785,
      address: 'Nguyễn Đức Toàn',
      class:'12A2',
      tags: ['Tin hoc'],
    },
    {
      key: '2',
      name: 'Trần Mạnh Khải',
      age: 1730,
      address: 'Nguyễn Đức Toàn',
      class:'12A2',
      tags: ['Tin học', 'Bóng rổ'],
    },
    {
      key: '3',
      name: 'Nguyễn Khắc Tùng Lâm',
      age: 1549,
      address: 'Sidney No. 1 Lake Park',
      class:'11A3',
      tags: ['Steme'],
    },
    {
      key: '4',
      name: 'Nguyễn Thế Vinh',
      age: 1200,
      address: 'London No. 1 Lake Park',
      class:'12A4',
      tags: ['hóa ','coder'],
    },
    {
      key: '5',
      name: 'Bùi Tùng Lâm',
      age: 1030,
      address: 'Sidney No. 1 Lake Park',
      class:'12A2',
      tags: ['coder', 'steme'],
    },
    {
      key: '6',
      name: 'Đoàn Bình An',
      age: 939,
      class:'12A2',
      address: 'London No. 1 Lake Park',
      tags: ['Tin học'],
    },
    {
      key: '7',
      name: 'Nguyễn Hữu Trường',
      age: 897,
      class:'11A5',
      address: 'Sidney No. 1 Lake Park',
      tags: [ 'chess', 'BYP'],
    },
    {
      key: '8',
      name: 'Đậu Quỳnh Như',
      age: 701,
      class:'11A7',
      address: 'London No. 1 Lake Park',
      tags: ['Tiếng anh'],
    },
    {
      key: '9',
      name: 'Nguyễn Đặng Thành Vinh',
      age: 584,
      class:'12A2',
      address: 'Sidney No. 1 Lake Park',
      tags: [ 'tin học'],
    },
        {
      key: '10',
      name: 'Nguyễn Thanh Hải',
      age: 567,
      class:'12A2',
      address: 'London No. 1 Lake Park',
      tags: ['The Sound','tin học'],
    },
    {
      key: '5',
      name: 'Bùi Tùng Lâm',
      age: 1030,
      address: 'Sidney No. 1 Lake Park',
      class:'12A2',
      tags: ['coder', 'steme'],
    },
    {
      key: '6',
      name: 'Đoàn Bình An',
      age: 939,
      class:'12A2',
      address: 'London No. 1 Lake Park',
      tags: ['Tin học'],
    },
    {
      key: '7',
      name: 'Nguyễn Hữu Trường',
      age: 897,
      class:'11A5',
      address: 'Sidney No. 1 Lake Park',
      tags: [ 'chess', 'BYP'],
    },
    {
      key: '8',
      name: 'Đậu Quỳnh Như',
      age: 701,
      class:'11A7',
      address: 'London No. 1 Lake Park',
      tags: ['Tiếng anh'],
    },
    {
      key: '9',
      name: 'Nguyễn Đặng Thành Vinh',
      age: 584,
      class:'12A2',
      address: 'Sidney No. 1 Lake Park',
      tags: [ 'tin học'],
    },
        {
      key: '10',
      name: 'Nguyễn Thanh Hải',
      age: 567,
      class:'12A2',
      address: 'London No. 1 Lake Park',
      tags: ['The Sound','tin học'],
    },
    {
      key: '5',
      name: 'Bùi Tùng Lâm',
      age: 1030,
      address: 'Sidney No. 1 Lake Park',
      class:'12A2',
      tags: ['coder', 'steme'],
    },
    {
      key: '6',
      name: 'Đoàn Bình An',
      age: 939,
      class:'12A2',
      address: 'London No. 1 Lake Park',
      tags: ['Tin học'],
    },
    {
      key: '7',
      name: 'Nguyễn Hữu Trường',
      age: 897,
      class:'11A5',
      address: 'Sidney No. 1 Lake Park',
      tags: [ 'chess', 'BYP'],
    },
    {
      key: '8',
      name: 'Đậu Quỳnh Như',
      age: 701,
      class:'11A7',
      address: 'London No. 1 Lake Park',
      tags: ['Tiếng anh'],
    },
    {
      key: '9',
      name: 'Nguyễn Đặng Thành Vinh',
      age: 584,
      class:'12A2',
      address: 'Sidney No. 1 Lake Park',
      tags: [ 'tin học'],
    },
        {
      key: '10',
      name: 'Nguyễn Thanh Hải',
      age: 567,
      class:'12A2',
      address: 'London No. 1 Lake Park',
      tags: ['The Sound','tin học'],
    }
  ];

const columns = [

  {
    title: '#',
    dataIndex: 'key',
  },
  {
    title: 'Class',
    dataIndex: 'class',
        filterDropdown: ({ setSelectedKeys, selectedKeys, confirm, clearFilters,dataIndex }) => (
      <div style={{ padding: 8 }}>
        <Input
          ref={node => {
            this.searchInput = node;
          }}
          placeholder={`Search ${dataIndex}`}
          value={selectedKeys[0]}
          onChange={e => setSelectedKeys(e.target.value ? [e.target.value] : [])}
          onPressEnter={() => this.handleSearch(selectedKeys, confirm, dataIndex)}
          style={{ marginBottom: 8, display: 'block' }}
        />
        <Space>
          <Button
            type="primary"
            onClick={() => this.handleSearch(selectedKeys, confirm, dataIndex)}
            icon={<SearchOutlined />}
            size="small"
            style={{ width: 90 }}
          >
            Search
          </Button>
          <Button onClick={() => this.handleReset(clearFilters)} size="small" style={{ width: 90 }}>
            Reset
          </Button>
          <Button
            type="link"
            size="small"
            onClick={() => {
              confirm({ closeDropdown: false });
              this.setState({
                searchText: selectedKeys[0],
                searchedColumn: dataIndex,
              });
            }}
          >
            Filter
          </Button>
        </Space>
      </div>
    ),
    filterIcon: filtered => <SearchOutlined onclick={<Input/>} style={{ color: filtered ? '#1890ff' : undefined }} />
  },
  {
    title: 'Name',
    dataIndex: 'name',
    key: 'name',
    render: text => <a href='./profile'>{text}</a>,
        filterDropdown: ({ setSelectedKeys, selectedKeys, confirm, clearFilters,dataIndex }) => (
      <div style={{ padding: 8 }}>
        <Input
          ref={node => {
            this.searchInput = node;
          }}
          placeholder={`Search ${dataIndex}`}
          value={selectedKeys[0]}
          onChange={e => setSelectedKeys(e.target.value ? [e.target.value] : [])}
          onPressEnter={() => this.handleSearch(selectedKeys, confirm, dataIndex)}
          style={{ marginBottom: 8, display: 'block' }}
        />
        <Space>
          <Button
            type="primary"
            onClick={() => this.handleSearch(selectedKeys, confirm, dataIndex)}
            icon={<SearchOutlined />}
            size="small"
            style={{ width: 90 }}
          >
            Search
          </Button>
          <Button onClick={() => this.handleReset(clearFilters)} size="small" style={{ width: 90 }}>
            Reset
          </Button>
          <Button
            type="link"
            size="small"
            onClick={() => {
              confirm({ closeDropdown: false });
              this.setState({
                searchText: selectedKeys[0],
                searchedColumn: dataIndex,
              });
            }}
          >
            Filter
          </Button>
        </Space>
      </div>
    ),
    filterIcon: filtered => <SearchOutlined onclick={<Input/>} style={{ color: filtered ? '#1890ff' : undefined }} />
  },
  {
    title: 'Club',
    key: 'tags',
    dataIndex: 'tags',
    render: tags => (
      <>
        {tags.map(tag => {
          let color = tag.length > 5 ? 'geekblue' : 'green';
          if (tag === 'coder' || tag === 'chess') {
            color = 'volcano';
          }
          return (
            <Tag color={color} key={tag}>
              {tag.toUpperCase()}
            </Tag>
          );
        })}
      </>
    ),
    filters: [
      {
        text: 'Tin Học',
        value: 'Tin Học',
      },
      {
        text: 'Tiếng Anh',
        value: 'Tiếng Anh',
      },
      {
        text: 'Steme',
        value: 'Steme',
      },
      {
        text: 'Bóng đá',
        value: 'Bóng đá',
      },
      {
        text: 'Hóa học',
        value: 'Hóa học',
      },
      {
        text: 'The Sound',
        value: 'The Sound',
      },
      {
        text: 'The Chess',
        value: 'The Chess',
      },
      {
        text: 'Coder',
        value: 'Coder',
      }
    ],
    onFilter: (value, record) => record.name.indexOf(value) === 0,
  },

  {
    title: 'Score',
    dataIndex: 'age',
    key: 'age',
  }
];
function onChange(pagination, filters, sorter, extra) {
  console.log('params', pagination, filters, sorter, extra);
}
    return (
      
    <>
        <div class="container">
          <div class="row">
            <div class="col">
              
            </div>
            <div class="col-10 mt-5">
                <Table dataSource={data} columns={columns} onChange={onChange}/>
            </div>
            <div class="col">
              
            </div>
          </div>
        </div>
    </>
  )
}

export default ranking