import React from "react";
import { useNavigate, useParams } from "react-router-dom";
import { useAuth } from "./auth";
import { blogdata } from "./blogdata";
function BlogPost() {
  const navigate = useNavigate();
  const { slug } = useParams();
  const auth = useAuth();
  const blogpost = blogdata.find((post) => post.slug === slug);
  const canDelete =
    auth.user?.isAdmin || blogpost.author === auth.user?.username;
  const returntoblog = () => {
    navigate("/blog");
  };
  return (
    <>
      <h2>{blogpost.tittle}</h2>
      <button onClick={returntoblog}>Volver</button>
      <p>{blogpost.author}</p>
      <p>{blogpost.content}</p>
      {canDelete && (
        <div>
          <button>Eliminar blog</button>
        </div>
      )}
    </>
  );
}
export default BlogPost;
