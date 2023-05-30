import React from "react";
import { TextField, Box, Typography, Button } from "@mui/material";

import { useState } from "react";
import { useNavigate } from "react-router-dom";
import axios from "axios";

const Add = () => {
  const navigate = useNavigate();
  const [value, setValue] = useState({
    id: "",
    name: "",
    email: "",
    mobile_no: "",
    feedback: "",
  });
  const Handlechange = (e) => {
    console.log(e.target.value);
    function getValue(pre) {
      return {
        ...pre,
        [e.target.name]: e.target.value,
      };
    }
    setValue(getValue);
  };
  const Handelsubmit = (event) => {
    event.preventDefault();
    // const userData = {
    //   id: value.id,
    //   name: value.name,
    //   email: value.email,
    //   mobile_no: value.mobile_no,
    //   feedback: value.feedback,
    // };
    axios.post("http://localhost:8000/view/add", value);
    navigate("/");
  };
  const resetsignup = () => {
    setTimeout(() => {
      setValue({
        id: "",
        name: "",
        email: "",
        mobile_no: "",
        feedback: "",
      });
    }, 1000);

    // Navigate("/");
  };
  const boxstyle = {
    display: "flex",
    flexDirection: "column",
    maxWidth: "50%",
    alignItems: "center",
    jsutifyContent: "center",
    margin: "auto",
    marginTop: "5%",
    padding: "4%",
    borderRadius: "5%",
    boxShadow: "5px 5px 10px #ccc",
    backgroundColor: "#ffff",
  };
  return (
    <>
      <form onSubmit={Handelsubmit}>
        <Box style={boxstyle}>
          <Typography
            variant="h4"
            padding={2}
            textAlign="center"
            fontWeight="bold"
          >
            Add
          </Typography>
          <TextField
            name="id"
            value={value.id}
            margin="normal"
            label="id"
            type="number"
            autoComplete="current-id"
            onChange={Handlechange}
          />
          <TextField
            name="name"
            value={value.name}
            margin="normal"
            label="Name"
            type="text"
            autoComplete="current-name"
            onChange={Handlechange}
          />
          <TextField
            name="email"
            value={value.email}
            margin="normal"
            label="Email"
            type="email"
            autoComplete="current-email"
            onChange={Handlechange}
          />
          <TextField
            name="mobile_no"
            value={value.mobile_no}
            id="outlined-number"
            label="Mobile"
            type="number"
            margin="normal"
            autoComplete="current-number"
            // InputLabelProps={{
            //   shrink: true,
            // }}
            onChange={Handlechange}
          />
          <TextField
            name="feedback"
            value={value.feedback}
            id="outlined-multiline-static"
            margin="normal"
            label="Feedback"
            multiline
            rows={4}
            autoComplete="current-feedback"
            onChange={Handlechange}
          />
          <Button
            type="submit"
            variant="contained"
            color="warning"
            sx={{ marginTop: 3, borderRadius: 2 }}
            onClick={resetsignup}
          >
            Submit
          </Button>
        </Box>
      </form>
    </>
  );
};

export default Add;
