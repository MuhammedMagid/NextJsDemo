import Link from "next/link";
import style from "../page.module.css"

export default async function PostsPage(){

  const response =await fetch (
    "https://jsonplaceholder.typicode.com/posts",
    {
      next:{
        revalidate: 60,
      },
    }
  );
  const posts =await response.json();
  
  const post =posts.map((post)=>{
    return(
      <Link className={style.postLink} href={`/posts/${post.id}`}>
        <div className={style.post} >
        <h3>{post.title}</h3>
        <p>{post.body}</p>
        </div>
      </Link>

    )
  })

  return(
    <div>
      <h1>Post Page</h1>
      <div>
        {post}
      </div>
    </div>
  )
}
 