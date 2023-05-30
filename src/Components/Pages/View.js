import React from "react";
import { DeleteFilled, EditFilled } from "@ant-design/icons";
import { Button } from "antd";
import { useEffect, useState } from "react";
import { Table } from "antd";
import "antd/dist/antd.css";
// import "antd/dist/antd.js";
import { Link, useNavigate } from "react-router-dom";
import axios from "axios";

const View = () => {
  const [users, setusers] = useState([]);
  const [loading, setloading] = useState([0]);
  const [page, setPage] = useState(1);
  const [pageSize, setPageSize] = useState(2);
  const getdata = async () => {
    setloading(1);
    const Response = await fetch("http://localhost:8000/crud", {
      method: "GET",
    });
    const data = await Response.json();
    console.log(data.Response);
    setusers(data.Response);
    // try {
    //   const response = await axios.get("http://localhost:8000/crud");
    //   console.log(response.data);
    //   // setusers(response.data);
    // } catch (err) {
    //   console.log(err);
    // }
  };

  useEffect(() => {
    getdata();
  }, []);
  const navigate = useNavigate();
  // const handleRoutes = (id) => {
  //   navigate(`edit/${id}`);
  // };
  const deleteuser = async (id) => {
    if (window.confirm(`You want to delete data of Id no: =  ${id} `))
      await axios.delete(`http://localhost:8000/view/delete/${id}`);
    getdata();
  };
  const columns = [
    {
      title: "Id",
      dataIndex: "id",
      edittable: true,
    },
    {
      title: "Name",
      dataIndex: "name",
      key: "name",
      sorter: (a, b) => {
        return a.name > b.name;
      },
    },
    {
      title: "Email",
      dataIndex: "email",
      key: "email",
    },
    {
      title: "Mobile",
      dataIndex: "mobile_no",
      key: "mobile_no",
    },
    {
      title: "Feedback",
      dataIndex: "feedback",
      key: "feedback",
    },
    {
      title: "Action",
      render: (data) => {
        return (
          <>
            {/* <Button
              type="primary"
              className="mx-2"
              onClick={() => handleRoutes(`/edit/${x.id}`)}
            >
              Edit
            </Button> */}
            {/* <Button
              variant="contained"
              type="secondary"
              // className={classes.button}
              // onClick={() => {
              //   deleteuser;
              // }}
              icon={<DeleteFilled />}
              
            ></Button> */}
            <Link to={`/edit/${data.id}`}>
              <EditFilled
                // onClick={() => handleRoutes(data.id)}
                style={{ color: "blue", padding: "10px", fontSize: "20px" }}
              />
            </Link>
            <DeleteFilled
              style={{ color: "red", padding: "10px", fontSize: "20px" }}
              onClick={() => {
                deleteuser(data.id);
              }}
            />
          </>
        );
      },
    },
  ];

  // const data = [
  //   {
  //     id: 1,
  //     name: "ravi",
  //     email: "sahy@gmail.com",
  //     mobile_no: "136+59746444",
  //     feedback: "idhbioaIDIAH",
  //   },
  //   {
  //     id: 1,
  //     name: "ravi",
  //     email: "sahy@gmail.com",
  //     mobile_no: "136+59746444",
  //     feedback: "idhbioaIDIAH",
  //   },
  // ];

  return (
    <>
      <div className="containeer mt-5">
        <div className="row">
          <div className="col">Crud Operation</div>
        </div>
        <div className="row">
          <div className="col">
            <Table
              columns={columns}
              dataSource={users}
              loading={loading}
              pagination={{
                current: page,
                pageSize: pageSize,
                onChange: (page, pageSize) => {
                  setPage(page);
                  setPageSize(pageSize);
                },
              }}
            />
            {/* <Table columns={columns} dataSource={users} /> */}
          </div>
        </div>
      </div>
    </>
  );
};

export default View;
