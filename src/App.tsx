import React, { useEffect, useState } from 'react';
import logo from './logo.svg';
import './App.css';
import { supabase } from './config/supabase.config';

type tPost = {
  id?: any,
  title: string,
   content: string
}

const defaultPostData: tPost[] = [{
  title: "",
  content: ""

}]

function App() {

  const [posts, setPosts] = useState<tPost[]>(defaultPostData)
  const [post, setPost] = useState<tPost>({ title: "", content: ""})
  const {title, content} = post;


  const fetchPosts = async () => {
    const { data } = await supabase.from('testTB').select()
    data ? setPosts(data) : null
  }

  const createPost = async () => {
     await supabase.from('testTB')
    .insert([
      {title, content}
    ]).single()
    setPost({ title: "", content: ""})
    fetchPosts()
    
  } 

  useEffect(() => {
fetchPosts()
  })

  
  return (
    <div className="App">
       <input type="text" value={title} placeholder="Title"
       onChange={(e)=> setPost({...post, title: e.target.value})}
      />
      <input type="text" value={content} placeholder="Content"
       onChange={(e)=> setPost({...post, content: e.target.value})}
      />

      <button onClick={createPost}>Create Post</button>

      {
        posts.map( (post: tPost, index) => (
           <div key={post.id}>
             <span>{post.title}</span>:<span>{post.content}</span>
           </div>
        ))
      }
    </div>
  );
}

export default App;
