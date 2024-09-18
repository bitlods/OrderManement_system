import React,{useState,useEffect}from 'react';
import axios from 'axios';
function GetRequest(){
    // create a state variable "posts"
    const[posts,setposts]=useState([0])

    useEffect(()=>{
        axios.get(`https://jsonplaceholder.typicode.com/posts`)

        //asscess the data retuned using them catch block
        .then(res=>{
            // console.log(res)
            setposts(res.data)// update the posts state variable which will be renderd url

        })
        .catch(err=>{
            console.log(err)
        })

    },[])
    //retun data in the form of list
    return(
        <div>

            <ul>{
                    posts.map(post=>(<li key={post.id}>{post.body}</li>)) 
                }
           
            </ul>

        </div>
    )
}
export default GetRequest 