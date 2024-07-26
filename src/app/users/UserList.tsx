"use client";
import * as React from "react";
import Paper from "@mui/material/Paper";
import Table from "@mui/material/Table";
import TableBody from "@mui/material/TableBody";
import TableCell from "@mui/material/TableCell";
import TableContainer from "@mui/material/TableContainer";
import TableHead from "@mui/material/TableHead";
import TablePagination from "@mui/material/TablePagination";
import TableRow from "@mui/material/TableRow";
import { useState, useEffect } from "react";
import axios from "axios";
import DeleteIcon from "@mui/icons-material/Delete";
import EditIcon from "@mui/icons-material/Edit";
import { format, set } from "date-fns";
import { confirmAlert } from "react-confirm-alert";
import "react-confirm-alert/src/react-confirm-alert.css";
import { ToastContainer, toast } from "react-toastify";
import Button from "@mui/material/Button";
import AddCircleOutlineIcon from "@mui/icons-material/AddCircleOutline";
import UserDetails from "./UserDetails";

interface Data {
  id: number;
  name: string;
  email: string;
  type: string;
  createdAt: string;
  updatedAt: string;
}

export default function UserList() {
  const [page, setPage] = useState(0);
  const [rowsPerPage, setRowsPerPage] = useState(10);
  const [data, setData] = useState<Data[]>([]);
  const [alldata, setallData] = useState<Data[]>([]);
  const [loading, setLoading] = useState(false);
  const [addUser, setAddUser] = useState(false);
  const [isAdd, setAdd] = useState(false);
  const [rows, setrows] = useState<Data>(null);

  const [searchquery, setSearchQuery] = useState("");
  const ishandleclose = () => {
    setAdd(false);
  };

  useEffect(() => {
    getData();
  }, [isAdd]);

  useEffect(() => {
    searchData(searchquery);
  }, [searchquery]);

  const getData = async () => {
    setLoading(true);
    try {
      const response = await axios.get("http://localhost:3000/api/users");
      console.log(response.data);
      setData(response.data);
      setallData(response.data);
    } catch (error) {
      console.log(error);
    } finally {
      setLoading(false);
    }
  };

  const handleChangePage = (event: unknown, newPage: number) => {
    setPage(newPage);
  };

  const handleChangeRowsPerPage = (
    event: React.ChangeEvent<HTMLInputElement>
  ) => {
    setRowsPerPage(+event.target.value);
    setPage(0);
  };

  const editRecord = (row: Data) => {
    console.log("the items has been eddited  that is here", row);
    setAdd(true);
    setrows(row);
  };

  const addRecord = () => {
    setAdd(true);
    setrows(null);
  };
  const deleteRecord = (row: Data) => {
    confirmAlert({
      title: "Confirm to submit 🤩🤩🤩",
      message: "Are you sure to do this items 😙😙😙😙🙄",
      buttons: [
        {
          label: "Yes",
          onClick: () => deleteRow(row),
        },
        {
          label: "No",
        },
      ],
    });
  };

  const deleteRow = async (row) => {
    let data = JSON.stringify({
      id: row.id,
    });

    let config = {
      method: "delete",
      url: "http://localhost:3000/api/users",
      headers: {
        "Content-Type": "application/json",
      },
      data: data,
    };

    try {
      const response = await axios(config);
      toast.success("😡😡😡🤬  successfully deleted ", {
        position: "top-right",
        autoClose: 1000,
        hideProgressBar: false,
        closeOnClick: true,
        pauseOnHover: true,
        draggable: true,
        progress: undefined,
        theme: "light",
      });
      console.log("The response has been occurred, that is", response);
      getData();
    } catch (error) {
      toast.error("👨👍👍👍  ouff ", {
        position: "top-right",
        autoClose: 1000,
        hideProgressBar: false,
        closeOnClick: true,
        pauseOnHover: true,
        draggable: true,
        progress: undefined,
        theme: "light",
      });
      console.log("The error has been occurred, that is", error);
    }
  };

  const dateFormatter = () => {
    const myDate = new Date();
    console.log("my current date is ", myDate);
    const formattedDate = format(myDate, "MMM d,yyyy h:mm:ss a");
    return formattedDate;
  };


  const searchData = (searchQuery) => {
    let filterData = data;
    if (searchQuery) {
      filterData = filterData.filter((item) => 
        item.name.toLowerCase().includes(searchQuery.toLowerCase())||
      item.email.toLowerCase().includes(searchQuery.toLowerCase())||
      item.type.toLowerCase().includes(searchQuery.toLowerCase())
      );
  
      setData(filterData);
    } else {
      setData(alldata);
    }
  };
  


  return (
    <>
      <ToastContainer />
      {isAdd ? (
        <UserDetails ishandleclose={ishandleclose} rows={rows} />
      ) : (
        <>
          <h2 className="font-bold mb-4">Users</h2>
          <div className="flex justify-between">
            <div>
              <input
                type="text"
                value={searchquery}
                onChange={(e) => setSearchQuery(e.target.value)}
                placeholder="Search Users"
                className="mb-2 px-2 py-2  border-rounded"
              />
            </div>
            <Button
              variant="outlined"
              onClick={() => addRecord()}
              className="mb-3"
            >
              Add Items <AddCircleOutlineIcon className="ml-2" />
            </Button>
          </div>
          <Paper sx={{ width: "100%", overflow: "hidden" }}>
            <TableContainer sx={{ maxHeight: 440 }}>
              <Table stickyHeader aria-label="sticky table">
                <TableHead>
                  <TableRow>
                    <TableCell align="right" style={{ minWidth: 70 }}>
                      ID
                    </TableCell>
                    <TableCell align="right" style={{ minWidth: 170 }}>
                      Name
                    </TableCell>
                    <TableCell align="right" style={{ minWidth: 170 }}>
                      Email
                    </TableCell>
                    <TableCell align="right" style={{ minWidth: 170 }}>
                      Type
                    </TableCell>
                    <TableCell align="right" style={{ minWidth: 170 }}>
                      Created At
                    </TableCell>
                    <TableCell align="right" style={{ minWidth: 170 }}>
                      Updated At
                    </TableCell>
                  </TableRow>
                </TableHead>
                <TableBody>
                  {data
                    .slice(page * rowsPerPage, page * rowsPerPage + rowsPerPage)
                    .map((row) => {
                      return (
                        <TableRow
                          hover
                          role="checkbox"
                          tabIndex={-1}
                          key={row.id}
                        >
                          <TableCell align="right">{row.id}</TableCell>
                          <TableCell align="right">{row.name}</TableCell>
                          <TableCell align="right">{row.email}</TableCell>
                          <TableCell align="right">{row.type}</TableCell>
                          <TableCell align="right">
                            {dateFormatter(row.createdAt)}
                          </TableCell>
                          <TableCell align="right">{row.updatedAt}</TableCell>
                          <TableCell align="right">
                            <div className="flex justify-center">
                              <div
                                className="cursor-pointer text-green-600 mr-2"
                                onClick={() => editRecord(row)}
                              >
                                <EditIcon />
                              </div>
                              <div
                                className="cursor-pointer text-orange-700"
                                onClick={() => deleteRecord(row)}
                              >
                                <DeleteIcon />
                              </div>
                            </div>
                          </TableCell>
                        </TableRow>
                      );
                    })}
                </TableBody>
              </Table>
            </TableContainer>
            <TablePagination
              rowsPerPageOptions={[10, 25, 100]}
              component="div"
              count={data.length}
              rowsPerPage={rowsPerPage}
              page={page}
              onPageChange={handleChangePage}
              onRowsPerPageChange={handleChangeRowsPerPage}
            />
          </Paper>
        </>
      )}
    </>
  );
}
