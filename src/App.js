import { useState, useEffect } from "react";
import axios from "axios"
import DisplayUsers from "./components/DisplayUsers";
import ReactPaginate from "react-paginate";
import Navbar from './components/Navbar'
import './app.css';

function App() {
  const [data, setData] = useState([])
  useEffect(() => {
    axios.get("https://jsonplaceholder.typicode.com/todos").then((req, res) => {
      setData(req.data)
    }).then((err) => {
      console.log(`we got the problem ${err}`)
    })
  }, [])


  // create useState hook to control page numbers
  const [pageNumber, setPageNumber] = useState(0)

  // set the number of items to display in one page
  const todosPerPage = 10;

  // determine the current page visited
  const currentPage = pageNumber * todosPerPage;

  // determining the number of pages
  const pageCount = Math.ceil(data.length / todosPerPage)

  // This function is called in ReactPaginate component to listed the selected page number
  const changePage = ({ selected }) => {
    setPageNumber(selected)
  }

  return (
    <div className="w-full h-[100vh] flex flex-col">
      <Navbar pageNumber={pageNumber} />
      <DisplayUsers data={data} currentPage={currentPage} todosPerPage={todosPerPage} />
      {/* start of ReactPaginate component */}
      <ReactPaginate
        previousLabel={"previous"}
        nextLabel={"next"}
        pageCount={pageCount}
        onPageChange={changePage}
        containerClassName={" bg-slate-950 h-[10%] flex flex-row text-white w-full justify-center items-center"}
        nextLinkClassName={"bg-cyan-600 ml-4 px-7 py-2 hover:bg-white hover:text-black"}
        previousLinkClassName={"bg-cyan-600 mr-4 px-7 py-2 hover:bg-white hover:text-black"}
        activeClassName={'px-[10px] bg-cyan-900 text-white mx-2 py-[5px]'}
        pageLinkClassName={"px-[10px] bg-white text-black mx-2 py-[5px]"}

      />
      {/* end of reactPage componet */}

    </div>
  );
}

export default App;
