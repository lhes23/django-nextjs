import React from "react"
import { TPost } from "../app/page"
import Link from "next/link"

const SinglePost = ({ post }: { post: TPost }) => {
  return (
    <>
      <div>
        <Link href={`/${post.id}`}>
          <h2>{post.title}</h2>
        </Link>
        <p>{post.content}</p>
      </div>
    </>
  )
}

export default SinglePost
