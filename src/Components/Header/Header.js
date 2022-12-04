import { useState } from "react";
import "./Header.css";
import { addItem } from "../../redux/todolist";
import { useDispatch } from "react-redux";

const Header = () => {

  const dispatch = useDispatch()

  const [searchValue, setSearchValue] = useState("")

  const handleChange = (event) => {
    setSearchValue(event.target.value)
  }

  const handleSubmit = (event) => {
    event.preventDefault();
    if (searchValue.trim() !== "") {
      dispatch(addItem(searchValue.trim()))
      setSearchValue("")
    } else {
      return
    }
  }

  return (
    <div className="w-full bg-light-brown rounded-t-lg pt-12 flex flex-col items-center pb-8">
      <div className="">
        <p className="font-sans text-white font-bold text-2xl">
          To Do List
        </p>
      </div>
      <div className="w-full mt-6">
        <form className="" onSubmit={handleSubmit}>
          <div className="flex flex-col justify-center items-center md:flex md:flex-row md:items-center mb-6">
            <div className="">
              <input className="w-60 sm:w-96 bg-second-white appearance-none border-2 rounded md:rounded-r-none py-2 px-4 text-gray-700 leading-tight focus:outline-none focus:bg-white focus:border-btn-background"
                type="text"
                value={searchValue}
                placeholder="Title..."
                onChange={handleChange}
              />
            </div>
            <div className="">
              <button className="shadow bg-btn-background hover:bg-slate-400 hover:text-second-white focus:shadow-outline focus:outline-none text-light-brown py-2 px-4 rounded md:rounded-l-none mt-3 md:mt-0" type="Submit">
                Submit
              </button>
            </div>
          </div>
          <div className="md:flex md:items-center">
            <div className="md:w-1/3"></div>
          </div>
        </form>
      </div>
    </div>
  )
}

export default Header