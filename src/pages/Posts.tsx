import React, { useEffect } from 'react';
import { useState } from 'react';
import Post from '../components/Post';
import axios from 'axios';

type Post = {
  id: string;
  userId: number;
  title: string;
  body: string;
}


function Posts() {

  const [posts, setPosts] = useState<Post[]>([]);

  const deletePost = async (postId: string) => {
    await axios.delete(`https://jsonplaceholder.typicode.com/posts/${postId}`);
  };

  useEffect(() => {
    const fetchData = async () => {
      const response = await axios.get('https://jsonplaceholder.typicode.com/posts');
      setPosts(response.data);
      console.log(response.data);
    };
    fetchData();
  }, []);

//   const [posts, setPosts] = React.useState([
//     {
//       id: "1",
//       title: 'Post 1',
//       body: 'This is post 1'
//     },
//     {
//       id: "2",
//       title: 'Post 2',
//       body: 'This is post 2'
//     },
//     {
//       id: "3",
//       title: 'Post 3',
//       body: 'This is post 3'
//     }
//   ])



  const handleClick = async (id: string) => {
    await deletePost(id);
    setPosts((posts) => {
      return posts.filter((post) => post.id !== id);
    });
  }

  return (
    <div>
      {posts.map((post) => (
        <div>
          <Post key={post.id} id={post.id} title={post.title}  body={post.body}/>
          <button onClick={() => handleClick(post.id)}>X</button>
        </div>
      ))}
    </div>
  );

  // return (
  //   <ul>
  //     {posts.map(item => (
  //       <li key={item.id}>{item.title}</li>
  //     ))}
  //   </ul>
  // );
}


export default Posts;
