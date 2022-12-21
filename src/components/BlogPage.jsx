import React from "react";
import { Link, Navigate, Outlet, useNavigate } from "react-router-dom";
import { useAuth } from "./auth.jsx";
import { blogdata } from "./blogdata.js";
function BlogPage() {
  const auth = useAuth();
  const navigate = useNavigate();
  const canPost = auth.user?.isAdmin || auth.user?.isEditor;
  const navegar = () => {
    return navigate("/crear");
  };
  return (
    <>
      <h1>Blog .</h1>
      <Outlet />
      <ul>
        {blogdata.map((post) => (
          <BlogLink key={post.slug} post={post} />
        ))}
      </ul>
      {canPost && <button onClick={navegar}> Agregar Post</button>}
    </>
  );
}

function BlogLink({ post }) {
  return (
    <li>
      <Link to={`/blog/${post.slug}`}> {post.tittle} </Link>
    </li>
  );
}

export default BlogPage;
