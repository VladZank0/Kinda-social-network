import post from'./Post.module.css';

const Post = (props)=>{
    return(

        <div className= {post.post}>

            <div className= {post.info}>
                <div className= {post.avatar}>
                    <img src= {props.img}/>
                </div>
                <div className={post.postData}>
                    <h3> {props.PersonName} </h3>
                    <p> {props.time} </p>
                </div>
            </div>

            <p className= {post.text}> {props.message} </p>
           
        </div>

    )
}

export default Post;