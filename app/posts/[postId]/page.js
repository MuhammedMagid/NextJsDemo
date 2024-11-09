import { resolve } from "styled-jsx/css";
import style from "../../page.module.css"
import { Suspense } from 'react'
import PostContent from '../../components/PostContent'

const  PostPage = async ({params})=> {
  const  id =  params.postId;
  return (
      <div>
      <h1>Post Content</h1>
      <PostContent Id ={id}/>
    </div>

    /*
      <div>
        <h1>Post Content</h1>
        <Suspense fallback={<p>Loading feed...</p>}>
          <PostContent Id ={id}/>
        </Suspense>
      </div>
    */
  )
}

export default PostPage;

