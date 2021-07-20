import React from "react";
import AddSong from "./components/AddSong";
import Header from "./components/Header";
import SongList from "./components/SongList";
import SongPlayer from "./components/SongPlayer";
import { Grid, useMediaQuery, Hidden } from "@material-ui/core";
import songReducer from "./reducer";

export const SongContext = React.createContext({
  song: {
    id: "b3272234-22ae-4f25-a918-bf8699763d99",
    title: "This Is Amazing Grace (Official Music Video)",
    artist: "Phil Wickham - T",
    thumbnail: "http://img.youtube.com/vi/XFRjr_x-yxU/0.jpg",
    url: "https://www.youtube.com/watch?v=XFRjr_x-yxU&list=RDXFRjr_x-yxU&start_radio=1",
    duration: 279,
  },
  isPlaying: false,
});

function App() {
  const initialSongState = React.useContext(SongContext);
  const [state, dispatch] = React.useReducer(songReducer, initialSongState);
  const greaterThanSm = useMediaQuery((theme) => theme.breakpoints.up("sm"));
  const greaterThanMd = useMediaQuery((theme) => theme.breakpoints.up("md"));

  return (
    <SongContext.Provider value={{ state, dispatch }}>
      <Hidden only="xs">
        <Header />
      </Hidden>
      {/* {greaterThanSm && <Header />} */}
      <Grid container spacing={3}>
        <Grid
          style={{
            paddingTop: greaterThanSm ? 80 : 10,
          }}
          item
          xs={12}
          md={7}
        >
          <AddSong />
          <SongList />
        </Grid>
        <Grid
          style={
            greaterThanMd
              ? { position: "fixed", width: "100%", right: 0, top: 70 }
              : { position: "fixed", width: "100%", left: 0, bottom: 0 }
          }
          item
          xs={12}
          md={5}
        >
          <SongPlayer />
        </Grid>
      </Grid>
    </SongContext.Provider>
  );
}

export default App;
