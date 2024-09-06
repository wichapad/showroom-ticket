// Component in show data all artists

import React, { useState, useContext } from "react";

import { ApiContext } from "../../../../UseContext/ApiContext";
import { DataGrid } from "@mui/x-data-grid";
import { Button, Stack, TextField, Box } from "@mui/material";
import CreateArtists from "./CreateArtists";
import UpdateArtists from "./UpdateArtists";
import DeleteArists from "./DeleteArtist";
import { DashboardContext } from "../../../../UseContext/DashboardContext";

const AristsMange = () => {
  const { artistsList } = useContext(ApiContext);
  const { state, dispatch } = useContext(DashboardContext);
  const [word, setWord] = useState("");

  const [selectedArtist, setSelectedArtist] = useState([]);

  // Search Data by artist name
  const searchData = () => {
    return artistsList.filter((item) => {
      return item.artist_name.toLowerCase().includes(word.toLowerCase());
    });
  };

  // Start value is false when click create button will show CreateArtists component
  const handleCreate = () => {
    dispatch({ type: "TOGGLE_CREATE" });
  };
  // Start value is false when click update button will show UpdateArtists for slug name
  const handleUpdate = (slug) => {
    dispatch({ type: "TOGGLE_UPDATE" });
    const artist = artistsList.find((item) => item.slug === slug);
    setSelectedArtist(artist);
  };

  // Start value is false when click delete button will show DeleteArtist for slug name
  const handleDelete = (slug) => {
    dispatch({ type: "TOGGLE_DELETE" });
    const artist = artistsList.find((item) => item.slug === slug);
    setSelectedArtist(artist);
  };

  const columns = [
    {
      field: "artist_name",
      headerName: "Artist",
      flex: 1,
      minWidth: 150,
      sortable: false,
      disableColumnMenu: true,
      resizable: false,
      headerAlign: "center",
      align: "center",
    },
    {
      field: "genre_name",
      headerName: "Genre",
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
              onClick={() => handleUpdate(params.row.slug)}
            >
              Update
            </Button>
            <Button
              variant="contained"
              color="error"
              size="small"
              onClick={() => handleDelete(params.row.slug)}
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
          label="Searc Artists..."
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
          height: 460,
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
          getRowId={(row) => row.artist_id}
        />
        {/* Manage page Create Update Delete Artists by DashboardProviders */}
        <div
          className={`${
            state.isCreate ? "translate-x-0 " : "translate-x-full"
          } fixed top-0 left-0 z-50 h-full w-full bg-[rgba(0,0,0,0.5)] `}
        >
          <CreateArtists />
        </div>
        <div
          className={`${
            state.isUpdate ? "translate-x-0 " : "translate-x-full"
          } fixed top-0 left-0 z-50 h-full w-full  bg-[rgba(0,0,0,0.5)]`}
        >
          <UpdateArtists artist={selectedArtist} />
        </div>
        <div
          className={`${
            state.isDelete ? "translate-x-0 " : "translate-x-full"
          } fixed top-0 left-0 z-50 h-full w-full  bg-[rgba(0,0,0,0.5)]`}
        >
          <DeleteArists artist={selectedArtist} />
        </div>
      </div>
    </div>
  );
};

export default AristsMange;
