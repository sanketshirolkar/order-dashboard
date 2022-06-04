import React from "react";

export const RenderOrderId = (data) => {
  return (
    <div>{data.orderId}</div>
  )
}

export const RenderCustId = (data) => {
  return (
    <div>{data.customerId}</div>
  )
}

export const RenderPinCode = (data) => {
  return (
    <div>{data.deliveryPincode}</div>
  ) 
}

export const RenderOrderDate = (data) => {
  return (
    <div>{data.orderDate}</div>
  )
}

export const RenderItems = (data) => {
  return (
    <div>{data.items}</div>
  )
}

export const tableRows = [
    {
      title: "Order Id",
      index: 1,
      render: RenderOrderId,
    },
    {
      title: "Cust Id",
      index: 2,
      render: RenderCustId,
    },
    {
      title: "Pin Code",
      index: 3,
      render: RenderPinCode,
    },
    {
      title: "Order Date",
      index: 4,
      render: RenderOrderDate,
    },
    {
      title: "Items",
      index: 5,
      render: RenderItems,
    },
  ];

  
 