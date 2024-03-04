import React, { useState, useEffect } from "react";
import { apiUrl, filterData } from "./data"
import Navbar from './components/Navbar'
import Cards from './components/Cards'
import Spinner from './components/Spinner'
import Filter from './components/Filter'
import { toast } from "react-toastify"
import "react-toastify/dist/ReactToastify.css"

const App = () => {

  const [courses, setCourses] = useState(null);
  const [loading, setLoading] = useState(false);
  const [category, setCategory] = useState(filterData[0].title);

  useEffect(() => {
    const fetchData = async () => {
      setLoading(true)
      try {
        const res = await fetch(apiUrl);
        const output = await res.json();

        // save data into a variable
        setCourses(output.data);
      }
      catch (error) {
        toast.error("Something went wrong");
      }
      setLoading(false)
    }
    fetchData();
  }, [])

  return (
    <div className="min-h-screen flex flex-col">
      <div>
        <Navbar />
      </div>

      <div className="bg-bgDark2 min-h-[100vh]">
        <div>
          <Filter filterData={filterData} category={category}
            setCategory={setCategory} />
        </div>

        <div className="w-11/12 max-w-[1200px] mx-auto flex flex-wrap justify-center items-center min-h-[50vh]">
          {
            loading ? (<Spinner />) : (<Cards courses={courses} category={category} />)
          }
        </div>

      </div>

    </div>
  );
};

export default App;
