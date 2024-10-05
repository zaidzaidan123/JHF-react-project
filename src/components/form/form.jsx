import React from "react";
import Button from "@mui/material/Button";
import TextField from "@mui/material/TextField";
import { Stack } from "@mui/material";
import { useState } from "react";

const Form = () => {
  const [email, setEmail] = useState("");
  const checkValidateEmail = () => {
    const emailPattern = /^[a-zA-Z0-9._-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/;

    if (!emailPattern.test(email)) {
        alert("Invalid email");
      }
  };
  return (
    <form>
      <Stack>
        <Stack justifyContent={"flex-start"} alignItems={"flex-start"}>
          <label htmlFor="">Name</label>
          <TextField name="name" type="text" placeholder="Name" required />
        </Stack>
        <Stack justifyContent={"flex-start"} alignItems={"flex-start"}>
          <label htmlFor="">Email</label>
          <TextField
            name="email"
            type="email"
            placeholder="Email"
            required
            onChange={(e) => setEmail(e.target.value)}
          />
        </Stack>
        <Stack justifyContent={"flex-start"} alignItems={"flex-start"}>
          <label htmlFor="">Phone</label>
          <TextField
            name="phone"
            type="tel"
            placeholder="Phone Number"
            required
          />
        </Stack>
        <Stack justifyContent={"flex-start"} alignItems={"flex-start"}>
          <label htmlFor="">Comment</label>
          <TextField
            name="comment"
            type="text"
            placeholder="comment"
            required
          />
        </Stack>
        <Button variant="contained" type="submit" onClick={checkValidateEmail}>
          Submit
        </Button>
      </Stack>
    </form>
  );
};

export default Form;
