import React from "react";
import AddSong from "./components/AddSong";
import Header from "./components/Header";
import SongList from "./components/SongList";
import SongPlayer from "./components/SongPlayer";
import { Grid, useMediaQuery, Hidden } from "@material-ui/core";
import songReducer from "./reducer";

export const SongContext = React.createContext({
  song: {
    id: "641b3969-f86d-4013-b9c3-6bb8512cc4c4",
    title: "Battle Belongs",
    artist: "Phil Wickham",
    thumbnail: "http://img.youtube.com/vi/qtvQNzPHn-w/0.jpg",
    url: "https://www.youtube.com/watch?v=qtvQNzPHn-w",
    duration: 286,
  },
  isPlaying: false,
});

function App() {
  const initialSongState = React.useContext(SongContext);
  const [state, dispatch] = React.useReducer(songReducer, initialSongState);
  const greaterThanSm = useMediaQuery((theme) => theme.breakpoints.up("sm"));
  const greaterThanMd = useMediaQuery((theme) => theme.breakpoints.up("md"));
  // const { data } = useQuery(GET_QUEUED_SONGS);
  // console.log(data.queue);
  // useEffect(() => {
  //   console.log(data.queue[0]);
  //   dispatch({ type: "SET_SONG", payload: { song: data.queue[0] } });
  // }, [dispatch, data.queue]);

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
