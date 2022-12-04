import "./Footer.css";

const Footer = () => {
  return (
    <div className="flex justify-between items-center h-16 sm:h-10 px-5 bg-footer-background">
      <div className="text-light-brown">
        {`${'0'} items left`}
      </div>
      <div className="flex flex-col sm:flex-row justify-between text-light-brown mr-2">
        <p className={`${true && 'font-bold'} mr-3 cursor-pointer`}>All</p>
        <p className={`${false && 'font-bold'} cursor-pointer`}>Active</p>
      </div>
      <div className="">
        <button className="shadow bg-btn-background hover:bg-slate-400 hover:text-second-white text-light-brown py-1 px-3 rounded border border-light-brown text-xs" type="button">
          Clear completed
        </button>
      </div>
    </div>
  )
}

export default Footer