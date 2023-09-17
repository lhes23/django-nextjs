"use server"

import { revalidatePath } from "next/cache"
import { redirect } from "next/navigation"

export const submitActionHandler = async (formData: FormData) => {
  const title = formData.get("title")?.toString()
  const content = formData.get("content")?.toString()
  const res = await fetch(`http://127.0.0.1:8000/api/posts/`, {
    method: "POST",
    headers: {
      "Content-Type": "application/json"
    },
    body: JSON.stringify({ title, content })
  })
  console.log({ res })
  if (!res.ok) return console.log("Error")
  revalidatePath("/")
}

export const deletePostHandler = async (id: number) => {
  const res = await fetch(`http://127.0.0.1:8000/api/posts/${id}`, {
    method: "DELETE"
  })
  if (!res.ok) return console.log("Error")
  revalidatePath("/")
  redirect("/")
}
