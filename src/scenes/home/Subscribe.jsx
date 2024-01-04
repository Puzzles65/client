import { Box, InputBase, Divider, Typography, IconButton } from "@mui/material";
import MarkEmailReadOutlinedIcon from "@mui/icons-material/MarkEmailReadOutlined";
import { useState } from "react";

const Subscribe = () => {
  const [email, setEmail] = useState("");

  return (
    <Box width="80%" margin="80px auto" textAlign="center">
      <IconButton>
        <MarkEmailReadOutlinedIcon fontSize="large" />
      </IconButton>
      <Typography variant="h3">Subscribe To Our Newsletter</Typography>
      <Typography>
        and receive 15% discount coupon for your first order
      </Typography>
      <Box
        p="2px 4px"
        m="15px auto"
        display="flex"
        alignItems="center"
        width="75%"
        backgroundColor="#F2F2F2"
      >
        <InputBase
          sx={{ m1: 1, flex: 1 }}
          placeholder="Enter email here"
          onChange={(e) => setEmail(e.target.value)}
          value={email}
        />
          <Divider sx={{ height: 28, m: 0.5 }} orientation="vertical" />
          <Typography sx={{ p: "10px", ":hover": { cursor: "pointer" } }}>
            Subscribe
          </Typography>
      </Box>
    </Box>
  );
};

export default Subscribe;
