import React from "react";
import style from './comments.module.css'

{/* When we pass props, the name that we use to pass values
		is the key for the type
*/}
interface IComment {
    user: string;
    comment: string;
    date: Date;
}

type CommentProps = {
    comment: IComment;
}


{/* Modularizing code into seperate functions is useful.
		Makes your code look nicer and allows for better readability.
	*/}
function parseCommentTime(date: Date){
	const newdate = new Date(date);
    const months = ["Jan", "Feb", "Mar", "Apr", "May", "Jun", "Jul", "Aug", "Sep", "Oct", "Nov", "Dec"];
    const period = newdate.getUTCHours() < 12 ? 'AM' : 'PM';
    let result = `${
        months[newdate.getMonth()] + " " +
        newdate.getDate() + ", " +
        newdate.getFullYear() + " | " +
        (newdate.getUTCHours() % 12 || 12) + ":" +
        String(newdate.getUTCMinutes()).padStart(2, "0") + period
    }`
    return result;
}

function Comment({ comment }: CommentProps) {
    if(comment.user === undefined){
        return (
            <div className={style.commentContainer}>
                <p>No comments yet!</p>
            </div>
        );
    }
    return (
        <div className={style.commentContainer}>
            <div className={style.commentHeader}>
                <h4>{comment.user}</h4>
                <p>{parseCommentTime(comment.date)}</p>
            </div>
            <p>{comment.comment}</p>
        </div>
    );
}

export default Comment;