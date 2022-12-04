import { useState } from "react";
import "./Items.css";
import { changeStatus, deleteItem } from "../../redux/todolist";
import { useDispatch } from "react-redux";

const Items = ({ dataList, allOrActive }) => {

  const dispatch = useDispatch()

  const list =
    (
      <ul className="w-full divide-y divide-gray-300">
        <li className="p-3 pl-10">
          <p className="text-light-brown">What needs to be done?</p>
        </li>
        {allOrActive === "All" ?
          dataList.map((item, index) => (
            <li key={index} className={`${item.status === "done" && 'bg-gray-300'} p-3 pr-5 pl-10`}>
              <div className="flex justify-between items-center">
                <div className="flex items-center">
                  <input className="w-4 h-4 text-blue-600 bg-gray-100 rounded border-gray-300 cursor-pointer"
                    id="default-checkbox"
                    type="checkbox"
                    onChange={() => dispatch(changeStatus(item.id))}
                    checked={(item.status === "done")}
                  />
                  <p className={`${item.status === "done" && 'line-through'} text-slate-800 ml-3`}>
                    {item.title}
                  </p>
                </div>
                <div className="cursor-pointer" onClick={() => dispatch(deleteItem(item.id))}>
                  <svg className="w-4 h-4 cursor-pointer" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" d="M6 18L18 6M6 6l12 12" />
                  </svg>
                </div>
              </div>
            </li>
          )) : (
            dataList.filter(item => item.status === "active").map((item, index) => (
              <li key={index} className={`${item.status === "done" && 'bg-gray-300'} p-3 pr-5 pl-10`}>
                <div className="flex justify-between items-center">
                  <div className="flex items-center">
                    <input className="w-4 h-4 text-blue-600 bg-gray-100 rounded border-gray-300 cursor-pointer"
                      id="default-checkbox"
                      type="checkbox"
                      onChange={() => dispatch(changeStatus(item.id))}
                      checked={(item.status === "done")}
                    />
                    <p className={`${item.status === "done" && 'line-through'} text-slate-800 ml-3`}>
                      {item.title}
                    </p>
                  </div>
                  <div className="cursor-pointer" onClick={() => dispatch(deleteItem(item.id))}>
                    <svg className="w-4 h-4 cursor-pointer" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" d="M6 18L18 6M6 6l12 12" />
                    </svg>
                  </div>
                </div>
              </li>
            ))
          )
        }
      </ul>
    )

  return (
    <div className="h-60 overflow-auto">
      {
        dataList.length === 0 ?
          <p className="pt-5 text-center text-light-brown">There is no data for show !</p>
          :
          list
      }
    </div>
  )
}

export default Items