import React, { useState } from 'react'
import { message, Popconfirm } from 'antd';

const Todos = () => {

  const [inputData, setinputData] = useState('')
  const [items, setItems] = useState([])
  const [toggleBtn, setToggleBtn] = useState(true)
  const [activeTask, setActiveTask] = useState('')


  //   //delete items
  let deleteItem = (id) => {
    let updateItem = items.filter((e) => {
      return e.id !== id
    })
    setItems(updateItem);



  }


  //for edit btn
  let editItem = (id) => {
    console.log(id)
    let myEditItem = items.find((e) => {
      return id === e.id

    })
    // console.log(myEditItem)
    setToggleBtn(false)
    setinputData(myEditItem.value)
    setActiveTask(id)
    // console.log(activeTask)


  }

  // const [isOpen,setIsOpen] = useState(false)
  //   const confirm = (e) => {
  //     console.log(e);object
  //     message.success('Click on Yes');
  //   };
  //   const cancel = (e) => {
  //     setIs
  //   };


  //for add && save items
  let addItem = () => {
    if (!inputData) {
      alert('Please fill the task')
    }
    else if (!toggleBtn) {
      setItems(
        items.map((el) => {
          if (el.id === activeTask) {
            return { ...el, value: inputData }
          }
          return el ;
        })
      )
      setToggleBtn(true)
      setinputData('')
      setActiveTask('')



    }
    else {
      let allInputData = { id: Math.random(), value: inputData }
      setItems([...items, allInputData])
      setinputData('')

    }



  }
  return (
    <>
      <h1 className="text-center m-5 mt-4 mx-2 text-dark"><i className="fa-solid fa-address-book" > </i> Todo List
      </h1>

      <div className="row ">
        <div className="col-1"></div>
        <div className="col-8"> <input className='text-center form-control col-8' type="text" placeholder='Write your Task Here' value={inputData} onChange={(e) => {
          setinputData(e.target.value)
        }} />
        </div>
        <div className="col-2">
          {toggleBtn ? <button className="btn btn-primary " onClick={addItem}>ADD</button> : <button className="btn btn-success" onClick={addItem} >SAVE</button>}
        </div>
      </div>
      <div className="col-1"></div>

      <table className=" container table table-striped mt-5">
        <thead>
          <tr>
            <th scope="col">#</th>
            <th scope="col">Tasks</th>
            <th scope="col"></th>
            <th scope="col"></th>
            <th scope="col">Trash</th>
          </tr>
        </thead>
        <tbody>
          {items.map((e, index) => {
            return (
              <tr key={e.id}>
                <th scope="row">{index + 1}</th>
                <td>{e.value}</td>
                <td></td>
                <td></td>
                <td> <i className="fa-solid fa-file-pen mx-2" onClick={() => editItem(e.id)}></i>
                  {/* <Popconfirm
                    title="Are you sure to delete this task?"
                    placement="leftBottom"
                    onConfirm={confirm}
                    onCancel={cancel}
                    okText="Yes"
                    cancelText="No"
                  >
                    <i className="fa-solid fa-trash" ></i>
                  </Popconfirm> */}
                  <i className="fa-solid fa-trash" onClick={() => deleteItem(e.id)}></i>
                </td>
              </tr>
            )
          })}



        </tbody>
      </table>


    </>
  )
}
export default Todos
