import React from "react";
import { TextField, Box, Typography, Button } from "@mui/material";

import { useState, useEffect } from "react";
import { useNavigate, useParams } from "react-router-dom";
import axios from "axios";

const Add = () => {
  const { id } = useParams();
  // console.log(id);
  const navigate = useNavigate();
  const [data, setData] = useState({
    id: "",
    name: "",
    email: "",
    mobile_no: "",
    feedback: "",
  });
  // const { name, email, mobile_no, feedback } = data;
  const Handlechange = (e) => {
    console.log(e.target.value);

    function getValue(pre) {
      return {
        ...pre,
        [e.target.name]: e.target.value,
      };
    }
    setData(getValue);
  };
  const Handelsubmit = (e) => {
    e.preventDefault();
    axios.put(`http://localhost:8000/view/update/${id}`, data);
    navigate("/");
  };
  useEffect(() => {
    if (id) {
      getUser(id);
    }
  }, []);
  const getUser = async (id) => {
    const res = await axios.get(`http://localhost:8000/crud/${id}`);
    const oldData = res.data.Response[0];
    console.log(oldData);
    setData(oldData);
    // if (res.status === 200) {
    //   console.log({ ...res.data[0] });
    //   setData({ ...res.data[0] });
    //   console.log(data);
    // }
    // console.log(res.data);
  };
  // const resetsignup = () => {
  //   setTimeout(() => {
  //     setData({
  //       id: "",
  //       name: "",
  //       email: "",

  //       mobile_no: "",
  //       feedback: "",
  //     });
  //   }, 1000);

  //   Navigate("/");
  // };
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
            Edit
          </Typography>
          <TextField
            name="name"
            value={data.name}
            label="Name"
            type="text"
            onChange={Handlechange}
          />
          <TextField
            name="email"
            value={data.email}
            margin="normal"
            label="Email"
            type="email"
            autoComplete="current-email"
            onChange={Handlechange}
          />
          <TextField
            name="mobile_no"
            value={data.mobile_no}
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
            value={data.feedback}
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
          >
            Update
          </Button>
        </Box>
      </form>
    </>
  );
};

export default Add;
