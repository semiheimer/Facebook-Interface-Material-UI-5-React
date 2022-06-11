import { Box, Divider, Skeleton, Stack } from "@mui/material";
import { useState } from "react";
import Post from "./Post";

function Feed() {
  const [loading, setLoading] = useState(true);

  setTimeout(() => {
    setLoading(false);
  }, [3000]);

  return (
    <Box p={{ xs: 0, md: 2 }} m={20} sx={{ flex: "4" }}>
      {loading ? (
        <Stack spacing={1}>
          <Skeleton variant="text" height={100} />
          <Skeleton variant="text" height={20} />
          <Skeleton variant="text" height={20} />
          <Skeleton variant="rectangular" height={300} />
        </Stack>
      ) : (
        <>
          <Post imageLink="https://cdn.pixabay.com/photo/2017/07/22/11/46/adventure-2528477_960_720.jpg"></Post>
          <Divider variant="middle" />
          <Post imageLink="https://cdn.pixabay.com/photo/2015/03/10/21/23/pirate-667763_960_720.jpg"></Post>
          <Divider light />
          <Post imageLink="https://cdn.pixabay.com/photo/2018/06/27/19/46/cyprus-3502430_960_720.jpg"></Post>
        </>
      )}
    </Box>
  );
}

export default Feed;
