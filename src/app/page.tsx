"use client";
import { FormPost } from "@/components/form-post";
import { PostLists } from "@/components/posts-list";
import { createPost, deletePost, getAllPosts } from "@/services/posts";
import { Button, Stack } from "@mui/material";
import { useEffect, useState } from "react";

export default function Home() {
  const [posts, setPosts] = useState<IPost[]>([]);

  const handleDeletePost = (id: number) => {
    deletePost(id)
      .then(() => {
        const newPosts = posts.filter((post) => post.id !== id);
        setPosts(newPosts);
      })
      .catch((err) => console.log(err));
  };

  const handleCreatePost = async (post: PartialPost) => {
    try {
      const data = await createPost(post);
      const newPost = {
        ...data,
        userId: 1,
      };
      setPosts([...posts, newPost]);
    } catch (err) {
      console.log(err);
    }
  };

  useEffect(() => {
    getAllPosts()
      .then((posts) => setPosts(posts))
      .catch((err) => console.log(err));
  }, []);
  return (
    <main>
      <FormPost handleCreatePost={handleCreatePost} />
      <PostLists posts={posts} handleDeletePost={handleDeletePost} />
    </main>
  );
}
