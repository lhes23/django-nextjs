import React from "react"
import PostsLists from "@/components/PostsLists"
import AddPostForm from "@/components/AddPostForm"
import { fetchData } from "@/lib/fetchData"

export type TPost = {
  id: number
  title: string
  content: string
}

const Home = async () => {
  const posts = await fetchData(`http://127.0.0.1:8000/api/posts`)
  return (
    <div className="">
      <h1>Hello</h1>
      <AddPostForm />
      {posts && <PostsLists posts={posts} />}
    </div>
  )
}

export default Home
