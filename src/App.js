import { useState } from "react";
import "./App.css";
import Layout from "./Components/Layout";
import header from "./Assets/header.png";
import axios from "axios";
import { sustainable } from "./store";
import { unsustainable } from "./store";
import { GiFootprint } from "react-icons/gi";
import { FaTrain } from "react-icons/fa";
import { MdFlight } from "react-icons/md";
import { AiFillCar } from "react-icons/ai";

function App() {
  const [source, setSource] = useState(null);
  const [dest, setDest] = useState(null);
  // const [dest, setDest] = useState(null)

  const [prompt, setPrompt] = useState(null);

  console.log(sustainable, unsustainable);
  const sendReq = async () => {
    console.log(source, dest);

    const tempPrompt =
      "You are green trip planner. Your task to plan a trip based on the source and destination I give you. The trip must optimize energy consumption, reduce carbon footprint on all aspects from travel via flights, trains, ships, cars, to details of hotels and resorts which are sustainable, to sustainable places which can be visited, to sustainable activities which can be done. Also mention the approximate carbon footprint which is being saved in the entire trip. Give me details for the trip from" +
      source +
      " to " +
      dest +
      " in correct JSON format. No other text should be there.";

    // setPrompt(tempPrompt);
    // axios
    //   .post(process.env.REACT_APP_BACKEND_SERVER + "", {
    //     prompt: tempPrompt,
    //   })
    //   .then((res) => {
    //     console.log(res.data.bot);
    //     const jsonObject = JSON.parse(res.data.bot);
    //     console.log(jsonObject);
    //   })
    //   .catch((error) => {
    //     console.log(error.message);
    //   });

    setTimeout(setPrompt("ecocinwcnin"), 5000);
  };

  return (
    <div className="bg-[#fdfff0] min-h-screen">
      <Layout>
        <div className="flex flex-col p-8 gap-4">
          <div className="flex w-full items-center justify-center gap-4 mb-4">
            <div className="text-lg sm:text-5xl font-semibold text-t-100 flex-wrap w-1/2 leading-relaxed">
              Travel Responsibly, Explore Sustainably.
            </div>
            <img src={header} className="w-40 sm:w-1/4" />
          </div>

          <div className="bg-lime-400 rounded-md shadow-md px-4 py-12 flex flex-col w-full gap-4 justify-around items-center">
            <div className="flex items-center justify-around w-full">
              <div className="flex flex-col items-center gap-8">
                <input
                  className="bg-gray-50 rounded-md shadow-md p-4 w-40 md:w-64"
                  placeholder="To Place"
                  onChange={(e) => setSource(e.target.value)}
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
                  onChange={(e) => setDest(e.target.value)}
                />
                {/* <input
                className="bg-gray-50 rounded-md shadow-md p-4 w-40 md:w-64"
                placeholder="Date"
                type="date"
              /> */}
              </div>
            </div>
            <button
              className="text-center p-4 rounded-md bg-lime-300 font-bold uppercase text-white"
              onClick={sendReq}
            >
              Green My Trip 🍀
            </button>
          </div>
          {prompt && (
            <div className="flex flex-col gap-4 sm:flex-row items-start justify-around text-t-100 text-2xl font-medium">
              <div className="bg-lime-100 border-2 border-gray-800 rounded-md shadow-md p-8 w-full sm:w-1/2 text-center">
                <div className="font-extrabold text-4xl my-4">
                  Sustainable Itinerary
                </div>
                <div className="text-left font-semibold my-4">Most Sustainable Travel Plan</div>
                <div className="gap-4 flex flex-col">
                  {sustainable.itinerary.map((i) => {
                    return (
                      <div className="bg-white p-4 rounded-md flex items-center justify-center flex-wrap gap-4">
                        <div>{i.from}</div>
                        <div>
                          {i.mode == "train" ? (
                            <FaTrain />
                          ) : i.mode == "flight" ? (
                            <MdFlight />
                          ) : (
                            <AiFillCar />
                          )}
                        </div>
                        <div>{i.to}</div>
                        <div className="flex items-center justify-center gap-4">
                          <GiFootprint />{" "}
                          <span className="text-t-100 font-bold">
                            Carbon Footprint :
                          </span>{" "}
                          {i.carbon_footprint}
                        </div>
                      </div>
                    );
                  })}
                </div>
                <div className="text-left font-semibold my-4">Sustainable Stay Option</div>
                <div className="gap-4 flex flex-col my-4">
                  {sustainable.accommodation.map((i) => {
                    return (
                      <div className="bg-orange-300 p-4 rounded-md flex items-center justify-center flex-wrap gap-4">
                        <div>{i.name}</div>

                        <div>{i.address}</div>
                        <div>
                          <img src={i.image_url} className="w-96" />
                        </div>
                        <div className="flex items-center justify-center gap-4">
                          <GiFootprint />{" "}
                          <span className="text-t-100 font-bold">
                            Carbon Footprint :
                          </span>{" "}
                          {i.carbon_footprint}
                        </div>
                      </div>
                    );
                  })}
                </div>
                <div className="gap-4 flex flex-col mt-4">
                <div className="text-left font-semibold">Sustainable tourist places</div>
                  {sustainable.places_to_visit.map((i) => {
                    return (
                      <div className="bg-purple-300 p-4 rounded-md flex flex-col items-center justify-center gap-4">
                        <div>{i.name}</div>

                        <div>{i.address}</div>
                        <div>
                          <img src={i.image_url} className="max-h-64" />
                        </div>
                        <div className="flex items-center justify-center gap-4">
                          <GiFootprint />{" "}
                          <span className="text-t-100 font-bold">
                            Carbon Footprint :
                          </span>{" "}
                          {i.carbon_footprint}
                        </div>
                      </div>
                    );
                  })}
                </div>
                <div className="bg-green-300 rounded-md shadow-md my-4 p-4 font-medium">
                  Carbon Footprint Saved{" "}
                  {sustainable.total_carbon_footprint_saved} tons
                </div>
              </div>
              <div className="bg-gray-50 border-2 border-gray-800 rounded-md shadow-md p-8 w-full sm:w-1/2 text-center">
                <div className="font-extrabold text-4xl my-4">
                  Unsustainable Itinerary
                </div>
                <div className="gap-4 flex flex-col">
                  {unsustainable.itinerary.map((i) => {
                    return (
                      <div className="bg-white p-4 rounded-md flex items-center justify-center flex-wrap gap-4">
                        <div>{i.from}</div>
                        <div>
                          {i.mode == "train" ? (
                            <FaTrain />
                          ) : i.mode == "flight" ? (
                            <MdFlight />
                          ) : (
                            <AiFillCar />
                          )}
                        </div>
                        <div>{i.to}</div>
                        <div className="flex items-center justify-center gap-4">
                          <GiFootprint />{" "}
                          <span className="text-t-100 font-bold">
                            Carbon Footprint :
                          </span>{" "}
                          {i.carbon_footprint}
                        </div>
                      </div>
                    );
                  })}
                </div>
                <div className="gap-4 flex flex-col mt-4">
                  {unsustainable.accommodation.map((i) => {
                    return (
                      <div className="bg-orange-300 p-4 rounded-md flex items-center justify-center flex-wrap gap-4">
                        <div>{i.name}</div>

                        <div>{i.address}</div>
                        <div>
                          <img src={i.image_url} className="" />
                        </div>
                        <div className="flex items-center justify-center gap-4">
                          <GiFootprint />{" "}
                          <span className="text-t-100 font-bold">
                            Carbon Footprint :
                          </span>{" "}
                          {i.carbon_footprint}
                        </div>
                      </div>
                    );
                  })}
                </div>
                <div className="gap-4 flex flex-col mt-4">
                  {unsustainable.places_to_visit.map((i) => {
                    return (
                      <div className="bg-purple-300 p-4 rounded-md flex items-center justify-center flex-wrap gap-4">
                        <div>{i.name}</div>

                        <div>{i.address}</div>
                        <div>
                          <img src={i.image_url} className="max-h-64" />
                        </div>
                        <div className="flex items-center justify-center gap-4">
                          <GiFootprint />{" "}
                          <span className="text-t-100 font-bold">
                            Carbon Footprint :
                          </span>{" "}
                          {i.carbon_footprint}
                        </div>
                      </div>
                    );
                  })}
                </div>
                <div className="bg-red-300 rounded-md shadow-md my-4 p-4 font-medium">
                  Carbon Footprint Saved{" "}
                  {unsustainable.total_carbon_footprint_saved} tons
                </div>
              </div>
            </div>
          )}
        </div>
      </Layout>
    </div>
  );
}

export default App;
