import { useState, useEffect } from 'react';
import { Header, Items, Footer } from "./Components/index";
import { useSelector } from 'react-redux';

function App() {

  const { dataList } = useSelector((state) => (state.dataList))

  const [itemsLeft, setItemsLeft] = useState(0)
  const [allOrActive, setAllOrActive] = useState("All")

  useEffect(() => {
    setItemsLeft(0)
    for (var i in dataList) {
      if (dataList[i].status === "active") {
        setItemsLeft((current) => current + 1)
      }
    }
  }, [dataList])

  const handleActiveOrAll = (e) => {
    setAllOrActive(e)
  }

  return (
    <div className='w-screen h-screen bg-slate-200 pt-16 px-4 md:px-0'>
      <div className='w-full md:w-3/4 lg:w-2/3 2xl:w-1/2 mx-auto rounded-lg shadow-custom-shadow bg-slate-50'>
        <Header />
        <Items allOrActive={allOrActive} dataList={dataList} />
        <Footer itemsLeft={itemsLeft} allOrActive={allOrActive} handleActiveOrAll={handleActiveOrAll} />
      </div>
    </div>
  );
}

export default App;