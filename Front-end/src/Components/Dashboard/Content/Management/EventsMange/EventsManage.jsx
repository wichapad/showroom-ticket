import React, { useState, useContext } from "react";
import { ApiContext } from "../../../../UseContext/ApiContext";
import { FormatDateTime } from "../../../../FormatDateTime";
import { DashboardContext } from "../../../../UseContext/DashboardContext";
import { DataGrid } from "@mui/x-data-grid";
import { Button, Stack,TextField,Box } from "@mui/material";
import CreateEvents from "./CreateEvents";
import UpdateEvents from "./UpdateEvents";
import DeleteEvents from "./DeleteEvents";

const EventsManage = () => {
  const { state, dispatch } = useContext(DashboardContext);
  const { eventsList } = useContext(ApiContext);
  const { formatDate } = FormatDateTime();
  const [word, setWord] = useState("");

  const [selectedEvent, setSelectedEvent] = useState([]);

  // Search Data by artist name
  const searchData = () => {
    return eventsList.filter((item) => {
      return item.event_name.toLowerCase().includes(word.toLowerCase());
    });
  };

  const handleCreate = () => {
    dispatch({ type: "TOGGLE_CREATE" });
  };
  const handleUpdate = (slug) => {
    dispatch({ type: "TOGGLE_UPDATE" });
    const event = eventsList.find((item) => item.slug_event === slug);
    setSelectedEvent(event);
  };
  const handleDelete = (slug) => {
    dispatch({ type: "TOGGLE_DELETE" });
    const event = eventsList.find((item) => item.slug_event === slug);
    setSelectedEvent(event);
  };

  const columns = [
    {
      field: "event_name",
      headerName: "Event",
      flex: 1,
      minWidth: 150,
      sortable: false,
      disableColumnMenu: true,
      resizable: false,
      headerAlign: "center",
      align: "center",
    },
    {
      field: "event_date",
      headerName: "Date",
      flex: 1,
      minWidth: 150,
      sortable: false,
      disableColumnMenu: true,
      resizable: false,
      headerAlign: "center",
      align: "center",
      renderCell: (params) => {
        const date = params.value.split("T")[0];
        return formatDate(date);
      },
    },
    {
      field: "event_time",
      headerName: "Time",
      flex: 1,
      minWidth: 150,
      sortable: false,
      disableColumnMenu: true,
      resizable: false,
      headerAlign: "center",
      align: "center",
    },

    {
      field: "venue_name",
      headerName: "venue",
      flex: 1,
      minWidth: 150,
      sortable: false,
      disableColumnMenu: true,
      resizable: false,
      headerAlign: "center",
      align: "center",
    },
    {
      field: "actions",
      headerName: "",
      flex: 1,
      minWidth: 180,
      sortable: false,
      disableColumnMenu: true,
      resizable: false,
      headerAlign: "center",
      align: "center",
      renderCell: (params) => (
        <div
          style={{
            display: "flex",
            justifyContent: "center",
            marginTop: "0.6rem",
          }}
        >
          <Stack spacing={1} direction="row">
            <Button
              variant="contained"
              color="success"
              size="small"
              onClick={() => handleUpdate(params.row.slug_event)}
            >
              Update
            </Button>
            <Button
              variant="contained"
              color="error"
              size="small"
              onClick={() => handleDelete(params.row.slug_event)}
            >
              Delete
            </Button>
          </Stack>
        </div>
      ),
    },
  ];

  return (
    <div className="pl-2 pr-2">
       {/* search bar and button create */}
       <Box
        sx={{
          display: "flex",
          alignItems: "center",
          gap: 2, 
          mb: 1, 
        }}
      >
        <TextField
          label="Searc Events..."
          variant="outlined"
          fullWidth
          size="small"
          sx={{ flexGrow: 1 }}
          value={word}
          onChange={(e) => setWord(e.target.value)}
        />
        <Button variant="contained" size="Normal" onClick={() => handleCreate()}>
          Create
        </Button>
      </Box>
      <div
        style={{
          height: 470,
          width: "100%",
          margin: "0 auto",
        }}
      >
        <DataGrid
          rows={searchData()}
          columns={columns}
          initialState={{
            pagination: {
              paginationModel: { page: 0, pageSize: 10 },
            },
          }}
          getRowId={(row) => row.event_id}
        />
        {/* Manage page Create Update Delete Artists by DashboardProviders */}
        <div
          className={`${
            state.isCreate ? "translate-x-0 " : "translate-x-full"
          } fixed top-0 left-0 z-50 h-full w-full bg-[rgba(0,0,0,0.5)] `}
        >
          <CreateEvents />
        </div>
        <div
          className={`${
            state.isUpdate ? "translate-x-0 " : "translate-x-full"
          } fixed top-0 left-0 z-50 h-full w-full  bg-[rgba(0,0,0,0.5)]`}
        >
          <UpdateEvents event={selectedEvent} />
        </div>
        <div
          className={`${
            state.isDelete ? "translate-x-0 " : "translate-x-full"
          } fixed top-0 left-0 z-50 h-full w-full  bg-[rgba(0,0,0,0.5)]`}
        >
          <DeleteEvents event={selectedEvent} />
        </div>
      </div>
    </div>
  );
};

export default EventsManage;
