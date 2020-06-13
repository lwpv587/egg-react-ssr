import React, { Component, useState } from 'react'
import Layout from 'component/layout/default'
import './index.scss'
function User (props) {
  // const [msg, setMsg] = useState(props.title)
  return (
    <Layout {...props}>
      <div className="user-wrapper">
        <div className="title">用户列表</div>
        <div className="user-list">
          <table>
            <thead>
              <tr>
                <th>账号</th>
                <th>密码</th>
              </tr>
            </thead>
            <tbody>
              {props.userList.map(item => (
                <tr key={item.name}>
                  <td>{item.name}</td>
                  <td>{item.password}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
        <div className="title">操作</div>
        <div className="ope-box">
          <input type="text" placeholder="账号" />
          <input type="password" placeholder="密码" />
          <button>添加</button>
        </div>
      </div>
    </Layout>
  )
}

export default User
