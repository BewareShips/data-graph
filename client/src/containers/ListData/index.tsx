import React, { useState } from "react";
import { useEffect } from "react";
import { data } from "../../assets";
import { userStats } from "../../assets/index2";
import DataTable from "../../components/DataTable";

const headers = [
  "Id",
  "First name",
  "Last name",
  "Email",
  "Gender",
  "IP address",
  "Total clicks",
  "Total page views"

];




const ListData = () => {
  //  const [data, setData] = useState([]);

  //  useEffect(() => {
  //     fetch(
  //        "https://drive.google.com/open?id=1Mnt53fYM_JNsUQgzh7nfsvUjuBAWmh9f"
  //     )
  //        .then((res) => res.json())
  //        .then((json) => setData(json));
  //  }, []);
   return (
      <div className="page-container">
         <DataTable data={data} headers={headers} title={"User statistics"}/>
      </div>
   );
};

export default ListData;
