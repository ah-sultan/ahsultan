"use client";
import { use, useState } from "react";
import { Button, Spinner } from "react-bootstrap";
import React from "react";
import { toast } from "react-toastify";
import UploadImage from "@/components/Admin/UploadImage";
import { handleRemoveSelectedImg } from "@/lib/helper";
import ImageGallery from "@/components/ImageGallery/ImageGallery";
import { useRouter } from "next/navigation";

// Role List
const roleList = ["admin", "owner", "viewer"];

const UserForm = ({
  _id,
  image,
  userName,
  fullName,
  role,
  password,
  email,
  type,
}) => {
  const [loading, setLoading] = useState(false);
  const [newFullName, setNewFulName] = useState(fullName);
  const [newUserName, setNewUserName] = useState(userName);
  const [newEmail, setNewEmail] = useState(email);
  const [newPassword, setNewPassword] = useState(password);
  const [newImage, setNewImage] = useState(image);
  const [newRole, setNewRole] = useState(role);

  const router = useRouter();

  // User Data
  const userData = {
    fullName: newFullName,
    userName: newUserName,
    email: newEmail,
    password: newPassword,
    role: newRole,
    image: "IMAGE",
  };

  // Handle Submit
  const handlePost = async () => {
    if (
      (newFullName.length &&
        newUserName.length &&
        newEmail.length &&
        newPassword.length &&
        newRole.length) > 0
    ) {
      try {
        setLoading(true);
        // Fetch Api
        const res = await fetch("/api/user/", {
          method: "POST",
          body: JSON.stringify(userData),
        });
        const data = await res.json();
        if (res.statusText === "OK") {
          setLoading(false);
          toast.success(data.message);
          setNewFulName("");
          setNewRole("");
          setNewEmail("");
          setNewPassword("");
          setNewUserName("");
          router.refresh();
        } else {
          setLoading(false);
          toast.error(data.message);
        }
      } catch (error) {
        setLoading(false);
        toast.error("user did not created");
      }
    } else {
      toast.warning("Please Fill required filed");
      setLoading(false);
    }
  };

  // HANDLE UPDATE
  const handleUpdate = async () => {
    if (
      (newFullName !== fullName,
      newUserName !== userName,
      newEmail !== email,
      newPassword !== password,
      newRole !== role)
    ) {
      try {
        setLoading(true);
        // Fetch Api
        const res = await fetch(`/api/user?id=${_id}`, {
          method: "PATCH",
          body: JSON.stringify(userData),
        });
        const data = await res.json();
        if (res.statusText === "OK") {
          setLoading(false);
          toast.success(data.message);
          setNewFulName("");
          setNewRole("");
          setNewEmail("");
          setNewPassword("");
          setNewUserName("");
          router.refresh();
        } else {
          setLoading(false);
          toast.error(data.message);
        }
      } catch (error) {
        setLoading(false);
        toast.error("User update error");
      }
    } else {
      toast.warning("Please change any filed");
    }
  };

  // HANDLE SUBMIT
  const handleSubmit = (e) => {
    e.preventDefault();
    if (type === "update") {
      handleUpdate();
    }

    if (type === "post") {
      handlePost();
    }
  };

  return (
    <>
      <form onSubmit={handleSubmit}>
        <div className="row">
          {/* Full Name */}
          <div className="col-6">
            <label htmlFor="fullName">Full Name</label>
            <input
              className="dash-input-form"
              type="text"
              name="fullName"
              placeholder="Enter full Name"
              value={newFullName}
              onChange={(e) => setNewFulName(e.target.value)}
            />
          </div>
          {/* User Name */}
          <div className="col-6">
            <label htmlFor="userName">User Name</label>
            <input
              className="dash-input-form"
              type="text"
              name="userName"
              placeholder="User full Name"
              value={newUserName}
              onChange={(e) => setNewUserName(e.target.value)}
            />
          </div>
          {/*  Email */}
          <div className="col-6">
            <label htmlFor="email">User Email</label>
            <input
              className="dash-input-form"
              type="email"
              name="email"
              placeholder="User Email"
              value={newEmail}
              onChange={(e) => setNewEmail(e.target.value)}
            />
          </div>
          {/*  Password */}
          <div className="col-6">
            <label htmlFor="Password">Password</label>
            <input
              className="dash-input-form"
              type="password"
              name="Password"
              placeholder="User Password"
              value={newPassword}
              onChange={(e) => setNewPassword(e.target.value)}
            />
          </div>
          {/*  Role */}
          <div className="col-6">
            <label htmlFor="Password">Role</label>
            <select
              value={newRole}
              onChange={(e) => setNewRole(e.target.value)}
            >
              {Array.isArray(roleList) &&
                roleList.map((data, index) => {
                  return (
                    <option value={data} key={index}>
                      {data}
                    </option>
                  );
                })}
            </select>
          </div>
        </div>
        <br />

        <div className="d-flex align-items-center ">
          <Button
            type="submit"
            variant="primary"
            size="lg"
            disabled={loading === true}
          >
            {type === "post" && "Save Users"}
            {type === "update" && "Update Now"}
          </Button>

          {loading && <Spinner className="ms-3" />}
        </div>
      </form>
    </>
  );
};

export default UserForm;
