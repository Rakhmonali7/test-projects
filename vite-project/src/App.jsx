import {Table, Space, Button} from 'antd'
import { useEffect, useState } from 'react';
import './App.css'
function App() {
  const initialData = []
  useEffect(()=>{ 
    fetch("https://jsonplaceholder.typicode.com/users").then((res)=> res.json()).then((data)=>setData(data)) .catch((error) => console.error('Error fetching data:', error))
  }, [])

  const [data, setData] = useState([])

  const handleDelete =(record)=>{
    setData(data.filter((val)=> val.id !== record.id))
    fetch(`https://jsonplaceholder.typicode.com/users/${record.id}`, {
      method: 'DELETE',
    }).catch((error) => console.error('Error fetching data:', error))
  }

  const handleReset = ()=>{
    
  }

  const columns = [
    {

      title: 'Name',
      dataIndex: 'name',
      key: 'name',
      render: (text) => <a>{text}</a>,
    },
    {

      title: 'Username',
      dataIndex: 'username',
      key: 'username',
    },
    {

      title: 'Email',
      dataIndex: 'email',
      key: 'email',
    },
    {
      title: 'Actions',
      key: 'actions',
      dataIndex: 'actions',
      render: (_, record) => (
        <Space size="middle">
        <a onClick={()=>handleDelete(record)}>Delete</a> 
        <a>Edit</a>
      </Space>
             
      ),
    },
  ];
 
  return (
    
    <div>
        <Table columns={columns} dataSource={data} rowKey="id"/>
        <Button onClick={()=> handleReset}>Reset</Button>
    </div>
  )
}

export default App
