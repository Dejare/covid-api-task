import React, { useState, useEffect } from "react";
import Home from "./component/Home";
import { BallTriangle } from "react-loader-spinner";
import { useSelector } from "react-redux";
import State from "./component/State";
import ReactDOM from "react-dom";
import Paginator from "react-hooks-paginator";
function App() {

  const { data, isLoading } = useSelector((state) => state.main);
  const [stateData, setstateData] = useState(data);
  const [generalData, setgeneralData] = useState(data);


  useEffect(() => {
    if (isLoading === false) {
      setgeneralData(data.data);
      setstateData(data.data.states);
    }
  }, [isLoading, data]);

  return (
    <div>
      {null ? (
        <div className="flex items-center justify-center">
          <BallTriangle />
        </div>
      ) : (
        <div>
          <Home />

          <div>
            <p className="my-8 ml-10 font-bold">General Info</p>
            {isLoading ? (
              <div className="flex items-center justify-center">
                <BallTriangle />
              </div>
            ) : (
              <div className="flex flex-row w-full m-auto justify-evenly items-center border py-3 font-semibold text-sm">
                <h1 className="md:mx-3 px-3 flex flex-col">
                  Sample Tested: <br />
                  {generalData.totalSamplesTested}
                </h1>
                <h1 className="md:mx-3 px-3 flex flex-col text-center justify-center">
                  Confirmed Cases: <br />
                  {generalData.totalConfirmedCases}
                </h1>
                <h1 className="md:mx-3 px-3 flex flex-col text-center justify-center">
                  Active cases: <br />
                  {generalData.totalActiveCases}
                </h1>
                <h1 className="text-green-500 md:mx-3 px-3 flex flex-col text-center justify-center">
                  Discharged: <br />
                  {generalData.discharged}
                </h1>
                <h1 className="text-red-500 md:mx-3 px-3 flex flex-col text-center justify-center">
                  Deaths Recorded: <br />
                  {generalData.death}
                </h1>
              </div>
            )}
          </div>
          {isLoading
            ? null
            : stateData.map((state) => (
              <>
                <div className="">
                  <State
                    key={state._id}
                    state={state.state}
                    cases={state.confirmedCases}
                    discharged={state.discharged}
                    death={state.death}
                    admission={state.casesOnAdmission}
                  />
                </div>
              </>
            ))}
          {/* {isLoading ? null : (
            <Paginator
              totalRecords={"36"}
              pageLimit={6}
              pageNeighbours={5}
              setOffset={setOffset}
              currentPage={currentPage}
              setCurrentPage={setCurrentPage}
            />
          )} */}
        </div>
      )}{" "}
      <p className="text-sm ml-10 text-gray-500 mb-10 text-center"><a href="https://adejare.vercel.app" target="_blank" rel="noreferrer">Adejare</a></p>
    </div>
  );
}

export default App;
