import React, { useState, useEffect } from "react";
import { useForm } from "../context/FormContext";

const PostalDetails = () => {
  const { postalCode } = useForm();

  const [postalData, setPostalData] = useState("");
  const [isLoading, setIsLoading] = useState(false);
  const [isError, setIsError] = useState("");

  useEffect(() => {
    //fetchData from API
    const fetchData = () => {
      if (postalCode) {
        setIsLoading(true);
        setIsError("");
        fetch(`https://api.zippopotam.us/in/${postalCode}`)
          .then((response) => {
            //if response is not ok then throw error
            if (!response.ok) {
              setIsError("response is not ok");
            }
            return response.json();
          })
          .then((data) => {
            //if we get data then update state with data
            setPostalData(data);
            setIsLoading(false);
          })
          .catch((error) => {
            setIsError("error while fetching data");
          })
          .finally(() => {
            setIsLoading(false);
          });
      }
    };
    fetchData();
  }, [postalCode]);

  return (
    <>
      {postalData && (
        <ul className="mr-60 bg-slate-500 p-8 rounded">
          <li>
            <span className="text-white text-xl uppercase">country:-</span>
            <span className="text-green-400 text-lg ml-4">
              {postalData.country}
            </span>
          </li>
          {postalData.places && postalData.places.length > 0 && (
            <li>
              <span className="text-white text-xl uppercase">State:-</span>
              <span className="text-green-400 text-lg ml-4">
                {postalData.places[0].state}
              </span>
            </li>
          )}
          {postalData.places && postalData.places.length > 0 && (
            <li>
              <span className="text-white text-xl uppercase">Place Name:-</span>
              <span className="text-green-400 text-lg ml-4">
                {postalData.places[0]["place name"]}
              </span>
            </li>
          )}
          {postalData.places && postalData.places.length > 0 && (
            <li>
              <span className="text-white text-xl uppercase">Longitude:-</span>
              <span className="text-green-400 text-lg ml-4">
                {postalData.places[0].longitude}
              </span>
            </li>
          )}
          {postalData.places && postalData.places.length > 0 && (
            <li>
              <span className="text-white text-xl uppercase">Latitude:-</span>
              <span className="text-green-400 text-lg">
                {postalData.places[0].latitude}
              </span>
            </li>
          )}
        </ul>
      )}
    </>
  );
};

export default PostalDetails;
