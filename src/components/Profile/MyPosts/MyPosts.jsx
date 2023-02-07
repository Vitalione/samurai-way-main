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
                <MyPost/>
                <MyPost/>
                <MyPost/>
                <MyPost/>
                <MyPost/>
                <MyPost/>
            </div>
        </div>
    );
};

export default MyPosts;