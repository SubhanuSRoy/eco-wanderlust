import React from "react";
import {
  GiAirplaneDeparture,
  GiAirplaneArrival,
  GiDuration,
} from "react-icons/gi";
import { RiMapPinTimeLine } from "react-icons/ri";
import { motion } from "framer-motion";

function FlightDetails({ segment, ret, cost }) {
  if (ret) {
    return (
      <div
        className="bg-gray-400 rounded-md bg-clip-padding backdrop-filter backdrop-blur-sm bg-opacity-10
      w-full p-2 border  border-sky-300 flex items-center justify-between flex-col"
      >
        {segment.map((trip) => {
          return (
            <div className="bg-transparent shadow-md rounded-md flex p-2 w-full">
              <motion.div
                whileHover={{
                  scale: 1.2,
                  transition: { duration: 0.2, boxShadow: "0px 0px 8px #000" },
                }}
                className="w-1/3 flex flex-col  gap-2  items-center bg-sky-200 hover:bg-sky-300 text-gray-800 rounded-md justify-center p-4"
              >
                <GiAirplaneDeparture className="h-6 w-6" />

                <span className="font-medium text-gray-800 text-lg">
                  {trip.departure.iataCode}
                </span>
                <span className="font-bold text-2xl">
                  {trip.departure.at.split("T")[1]}
                </span>
              </motion.div>
              <div className="w-1/3 flex text-2xl gap-2 items-center bg-transparent justify-center p-4">
                <RiMapPinTimeLine className="h-8 w-8" />
                <span>{trip.duration.slice(2).split("H")[0]} Hrs</span>
                <span>
                  {trip.duration.slice(2).split("H")[1].split("M")[0]} Mins
                </span>
              </div>
              <motion.div
                whileHover={{
                  scale: 1.2,
                  transition: { duration: 0.2, boxShadow: "0px 0px 8px #000" },
                }}
                className="w-1/3 flex flex-col rounded-md  gap-2 items-center bg-transparent bg-sky-200 hover:bg-sky-300 text-gray-800 justify-center p-4"
              >
                <GiAirplaneArrival className="h-6 w-6" />
                <span className="font-medium text-gray-800 text-xl">
                  {trip.arrival.iataCode}
                </span>
                <span className="font-bold text-2xl">
                  {trip.arrival.at.split("T")[1]}
                </span>
              </motion.div>
            </div>
          );
        })}

        <div className="flex items-center justify-around w-3/4 text-3xl mt-4">
          <span className="font-medium">Grand Total</span>
          <span className="text-sky-500 font-semibold">{cost} EUR</span>
        </div>
      </div>
    );
  } else {
    return (
      <div
        className="bg-gray-400 rounded-md bg-clip-padding backdrop-filter backdrop-blur-sm bg-opacity-10
      w-full p-2 border  border-orange-300 flex items-center justify-between flex-col"
      >
        {segment.map((trip) => {
          return (
            <div className="bg-transparent shadow-md rounded-md flex p-2 w-full">
              <motion.div
                whileHover={{
                  scale: 1.2,
                  transition: { duration: 0.2, boxShadow: "0px 0px 8px #000" },
                }}
                className="w-1/3 flex flex-col  gap-2  items-center bg-orange-200 hover:bg-orange-300 text-gray-800 rounded-md justify-center p-4"
              >
                <GiAirplaneDeparture className="h-6 w-6" />

                <span className="font-medium text-gray-800 text-lg">
                  {trip.departure.iataCode}
                </span>
                <span className="font-bold text-2xl">
                  {trip.departure.at.split("T")[1]}
                </span>
              </motion.div>
              <div className="w-1/3 flex text-2xl gap-2 items-center bg-transparent justify-center p-4">
                <RiMapPinTimeLine className="h-8 w-8" />
                <span>{trip.duration.slice(2).split("H")[0]} Hrs</span>
                <span>
                  {trip.duration.slice(2).split("H")[1].split("M")[0]} Mins
                </span>
              </div>
              <motion.div
                whileHover={{
                  scale: 1.2,
                  transition: { duration: 0.2, boxShadow: "0px 0px 8px #000" },
                }}
                className="w-1/3 flex flex-col rounded-md  gap-2 items-center bg-transparent bg-orange-200 hover:bg-orange-300 text-gray-800 justify-center p-4"
              >
                <GiAirplaneArrival className="h-6 w-6" />
                <span className="font-medium text-gray-800 text-xl">
                  {trip.arrival.iataCode}
                </span>
                <span className="font-bold text-2xl">
                  {trip.arrival.at.split("T")[1]}
                </span>
              </motion.div>
            </div>
          );
        })}
        <div className="flex items-center justify-around w-3/4 text-3xl mt-4">
          <span className="font-medium">Grand Total</span>
          <span className="text-orange-500 font-semibold">{cost} EUR</span>
        </div>
      </div>
    );
  }
}

export default FlightDetails;
