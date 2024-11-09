import { resolve } from "styled-jsx/css";
import style from "../page.module.css"

const PostContent = async (props)=>{
  //const  id =  params.postId;
  const id=props.Id;
  await new Promise((resolve)=>{
    setTimeout(()=>{
      resolve();
    },1000);
  })

  const response =await fetch (
    `https://jsonplaceholder.typicode.com/posts/${id}`,
    {
      next:{
        revalidate: 180,
      },
    }
  );
  const post =await response.json();
  return(
    <div className={style.postContainer}> 
      <h1>{post.title}</h1>  
      <hr/>
      <p>{post.body}</p> 
    </div>
  );

}

export default PostContent;