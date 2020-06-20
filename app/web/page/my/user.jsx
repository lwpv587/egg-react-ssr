import React, { Component, useState } from 'react'
import Layout from 'component/layout/default'
import io from 'framework/request'
import './index.scss'
function User (props) {
  const [name, setName] = useState('')
  const [pwd, setPwd] = useState('')
  function addUser () {
    if (name === '' || pwd === '') return
    io.get(`/api/user/add?name=${name}&password=${pwd}`, window.__INITIAL_STATE__).then(res => {
      window.location.reload()
    })
  }
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
          <input type="text" placeholder="账号" value={name} onChange={e => setName(e.target.value)} />
          <input type="password" placeholder="密码" value={pwd} onChange={e => setPwd(e.target.value)} />
          <button onClick={addUser}>添加</button>
        </div>
      </div>
    </Layout>
  )
}

export default User
