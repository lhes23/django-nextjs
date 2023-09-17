import React, { useState, useEffect } from "react"
import { TPost } from "../app/page"
import SinglePost from "./SinglePost"
import { fetchData } from "@/lib/fetchData"

const PostsLists = ({ posts }: { posts: TPost[] }) => {
  return (
    <>
      {posts?.map((post) => (
        <SinglePost key={post.id} post={post} />
      ))}
    </>
  )
}

export default PostsLists
