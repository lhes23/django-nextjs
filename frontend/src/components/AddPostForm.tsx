import { submitActionHandler } from "@/actions/serverActions"
import React from "react"

const AddPostForm = () => {
  return (
    <>
      {/* <form onSubmit={submitHandler}> */}
      <form action={submitActionHandler}>
        <input
          type="text"
          name="title"
          id=""
          // value={title}
          // onChange={(e) => setTitle(e.target.value)}
        />
        <input
          type="text"
          name="content"
          id=""
          // value={content}
          // onChange={(e) => setContent(e.target.value)}
        />
        <input type="submit" value="Submit" />
      </form>
    </>
  )
}

export default AddPostForm
