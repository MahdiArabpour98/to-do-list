import { clearCompleted } from "../../redux/todolist";
import { useDispatch } from "react-redux";

const Footer = ({ itemsLeft, allOrActive, handleActiveOrAll }) => {

  const dispatch = useDispatch()
  return (
    <div className="flex justify-between items-center h-16 sm:h-10 px-5 bg-footer-background">
      <div className="text-light-brown">
        {`${itemsLeft} items left`}
      </div>
      <div className="flex flex-col sm:flex-row justify-between text-light-brown mr-2">
        <p className={`${allOrActive === "All" && 'font-bold'} mr-3 cursor-pointer`} onClick={() => handleActiveOrAll("All")}>All</p>
        <p className={`${allOrActive === "Active" && 'font-bold'} cursor-pointer`} onClick={() => handleActiveOrAll("Active")}>Active</p>
      </div>
      <div className="">
        <button className="shadow bg-btn-background hover:bg-slate-400 hover:text-second-white text-light-brown py-1 px-3 rounded border border-light-brown text-xs transition ease-in-out hover:-translate-1 hover:scale-110 duration-200"
          type="button"
          onClick={() => dispatch(clearCompleted())}
        >
          Clear completed
        </button>
      </div>
    </div>
  )
}

export default Footer