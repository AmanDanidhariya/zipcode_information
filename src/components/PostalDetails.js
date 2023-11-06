import React, { useEffect } from "react";
import Spinner from "./Spinner";
import { useForm } from "../context/FormContext";
import { usePostal } from "../context/postalDetailContext";

const PostalDetails = () => {
  const { postalCode } = useForm();
  const { postalData, isLoading, isError, fetchPostalData } = usePostal();

  //fetchPostal data as our input
  useEffect(() => {
    fetchPostalData(postalCode);
  }, [postalCode, fetchPostalData]);

  return (
    <div className="p-8">
      <div>
        {isError && (
          <span className="text-red-500 text-2xl font-bold">{isError}</span>
        )}
      </div>
      <div className="flex flex-col">
        {isLoading && (
          <span>
            <Spinner />
          </span>
        )}
        {postalData && postalData.places && postalData.places.length > 0 && (
          <ul className="mr-60 bg-slate-500 p-8 rounded">
            {postalData.places && postalData.places.length > 0 && (
              <li>
                <span className="text-white text-xl uppercase">country:-</span>
                <span className="text-green-400 text-lg ml-4 font-bold">
                  {postalData.country}
                </span>
              </li>
            )}
            {postalData.places && postalData.places.length > 0 && (
              <li>
                <span className="text-white text-xl uppercase">State:-</span>
                <span className="text-green-400 text-lg ml-4 font-bold">
                  {postalData.places[0].state}
                </span>
              </li>
            )}
            {postalData.places && postalData.places.length > 0 && (
              <li>
                <span className="text-white text-xl uppercase">
                  Place Name:-
                </span>
                <span className="text-green-400 text-lg ml-4 font-bold">
                  {postalData.places[0]["place name"]}
                </span>
              </li>
            )}
            {postalData.places && postalData.places.length > 0 && (
              <li>
                <span className="text-white text-xl uppercase">
                  Longitude:-
                </span>
                <span className="text-green-400 text-lg ml-4 font-bold">
                  {postalData.places[0].longitude}
                </span>
              </li>
            )}
            {postalData.places && postalData.places.length > 0 && (
              <li>
                <span className="text-white text-xl uppercase">Latitude:-</span>
                <span className="text-green-400 text-lg font-bold">
                  {postalData.places[0].latitude}
                </span>
              </li>
            )}
          </ul>
        )}
        <div></div>
      </div>
    </div>
  );
};

export default PostalDetails;
