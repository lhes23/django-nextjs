"use client"
import { deletePostHandler } from "@/actions/serverActions"
import React from "react"

const DeleteButton = ({ id }: { id: number }) => {
  return (
    <>
      <button onClick={() => deletePostHandler(id)}>Delete</button>
    </>
  )
}

export default DeleteButton
