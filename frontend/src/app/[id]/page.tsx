import React from "react"
import { fetchData } from "@/lib/fetchData"
import { TPost } from "../page"
import DeleteButton from "@/components/DeleteButton"

const SinglePostDetails = async ({ params }: { params: { id: number } }) => {
  const post: TPost = await fetchData(
    `http://127.0.0.1:8000/api/posts/${params.id}`
  )

  return (
    <div>
      <h1>{post?.title}</h1>
      <p>{post?.content}</p>
      <DeleteButton id={post.id} />
    </div>
  )
}

export default SinglePostDetails
