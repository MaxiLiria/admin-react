import { GridColDef, } from "@mui/x-data-grid";
import { DataTable } from "../../components/dataTable/DataTable"
import "./users.scss"
import { userRows } from "../../data";
import { useState } from "react";
import { Add } from "../../components/add/Add";

const columns: GridColDef[] = [
  { field: 'id', headerName: 'ID', width: 90 },
  {
      field: "img", 
      headerName: "Avatar",
      width: 100,
      renderCell: (params) => {
          return <img src={params.row.img || "/noavatar.png"} alt="User Avatar" />;
      }
  },
  {
      field: 'firstName',
      headerName: 'First name',
      width: 150,
      editable: true,
      type: "string"
  },
  {
      field: 'lastName',
      headerName: 'Last name',
      width: 150,
      editable: true,
      type: "string"
  },
  {
    field: 'email',
    headerName: 'Email',
    width: 200,
    editable: true,
    type: "string"
  },
  {
    field: 'phone',
    headerName: 'Phone',
    width: 150,
    editable: true,
    type: "string"
  },
  {
    field: 'createdAt',
    headerName: 'Created At',
    width: 200,
    editable: true,
    type: "string"
  },
  {
    field: "verified", headerName: "Verified", width: 100, type: "boolean",
  },
];

const Users = () => {
const [open, setOpen] = useState(false)

  return (
    <div className="users">
      <div className="info">
        <h1>Users</h1>
        <button onClick={()=>setOpen(true)}>Add New User</button>
      </div>
        <DataTable slug="users" columns={columns} rows={userRows}/>
        {open && <Add slug="user" columns={columns} setOpen={setOpen}/>}
    </div>
  )
}

export default Users