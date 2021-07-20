import React from "react";
import "./data-table.css"

interface User {
   id: number;
   first_name: string;
   last_name: string;
   email: string;
   gender: string;
   ip_address: string;
}

interface TableProps {
   data: User[];
   headers: string[];
   title: string;
}

const DataTable: React.FC<TableProps> = ({ data, headers, title }) => {
   const tableData = data.map((row, index) => {
      const rowData = Object.entries(row);

      return (
         <tr key={index}>
            {rowData.map((item, i) => (
               <td>{item[1]}</td>
            ))}
         </tr>
      );
   });

   return (
      <>
         <div className="table-container">
            <div className="table-container__title">
               <h2>{title}</h2>
            </div>
            <table className="table-class">
               <thead>
                  <tr>
                     {headers.map((heading, i) => (
                        <th key={i}>{heading}</th>
                     ))}
                  </tr>
               </thead>
               <tbody>{tableData}</tbody>
            </table>
         </div>

         {/* <table cellPadding={0} cellSpacing={0}>
            <thead>
               <tr>
                  {headers.map((heading,i) => (
                     <th key={i}>{heading}</th>
                  ))}
               </tr>
            </thead>
            <tbody>
              
            </tbody>
         </table> */}
      </>
   );
};

export default DataTable;
