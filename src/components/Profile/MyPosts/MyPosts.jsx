import React from 'react';
import s from "./MyPosts.module.css";
import MyPost from "./Post/MyPost";

const MyPosts = () => {
    return (
        <div>
            <textarea></textarea>
            <button>Add post</button>
            <div>
                New post
            </div>
            <div className={s.posts}>
                <MyPost message={"Hi, how are you"} like={15}/>
                <MyPost message={"It's my first post"} like={20}/>
            </div>
        </div>
    );
};

export default MyPosts;