import { useState } from "react";
import "./App.css";
import Layout from "./Components/Layout";

function App() {
  const [source, setSource] = useState(null)
  const [dest, setDest] = useState(null)
  // const [dest, setDest] = useState(null)

  return (
    <div className="bg-[#fdfff0] w-screen min-h-screen">
      <Layout>
        <div className="p-8 gap-4">
          <div className="flex w-full items-center justify-between mb-4">
            <div className="text-4xl font-semibold text-t-100">
              Travel Responsibly, Explore Sustainably.
            </div>  
            <img src=""/>
          </div>

          <div className="bg-lime-100 rounded-md shadow-md px-4 py-12 flex flex-col w-full gap-4 justify-around items-center">
            <div className="flex items-center justify-around w-full">
            <div className="flex flex-col items-center gap-8">
              <input
                className="bg-gray-50 rounded-md shadow-md p-4 w-40 md:w-64"
                placeholder="To Place"
              />
              {/* <input
                className="bg-gray-50 rounded-md shadow-md p-4 w-40 md:w-64"
                placeholder="Date"
                type="date"
              /> */}
            </div>
            <div className="flex flex-col items-center  gap-8">
              <input
                className="bg-gray-50 rounded-md shadow-md p-4 w-40 md:w-64"
                placeholder="From Place"
              />
              {/* <input
                className="bg-gray-50 rounded-md shadow-md p-4 w-40 md:w-64"
                placeholder="Date"
                type="date"
              /> */}
            </div>
            </div>
            <div className="w-3/4 text-center p-4 rounded-md bg-sec-100 font-bold uppercase text-white">Green My Trip 💚</div>
          </div>
        </div>
      </Layout>
    </div>
  );
}

export default App;
