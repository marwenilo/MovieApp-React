import React from 'react'
import { Input } from 'antd';




const { Search } = Input;
 const NameFilter= ({handleSearch,b})=>  {

       return (
           
               <Search className="searchInput"
                   placeholder="input search text"
                   onChange ={(e)=>handleSearch(e.target.value)} 
                   enterButton="Search"
                   size="large"
                  
               />
           
       )
   }
   export default NameFilter






















// import { MDBCol, MDBIcon } from "mdbreact";


// const nameFilter = () => {
//   return (
//     <MDBCol md="6">
//       <form className="form-inline mt-4 mb-4">
//         <MDBIcon icon="search" />
//         <input className="form-control form-control-sm ml-3 w-75" type="text" placeholder="Search" aria-label="Search" />
//       </form>
//     </MDBCol>
//   );
// }

// export default nameFilter;