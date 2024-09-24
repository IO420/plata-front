import CreateKind from "@/app/src/components/Create/CreateKind";
import CreateProduct from "@/app/src/components/Create/CreateProduct";
import CreateUser from "@/app/src/components/Create/CreateUser";
import Login from "@/app/src/components/Login/Login";
import React from "react";

export default function page() {
  return (
    <>
      <CreateUser />
      <Login />
      <CreateProduct />
      <CreateKind />
    </>
  );
}
