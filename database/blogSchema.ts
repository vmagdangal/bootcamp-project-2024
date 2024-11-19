import mongoose, { Schema } from "mongoose";

// typescript type (can also be an interface)
type Blog = {
    _id: string;
    title: string;
    slug: string; 
    date: Date;
    description: string; // for preview
    content: string; // for individual blog page
    comments: Comment[]; // array for comments
    image: string;
    imageAlt: string;
};


// mongoose schema 
const blogSchema = new Schema<Blog>({
		title: { type: String, required: true },
		slug: { type: String, required: true },
		date: { type: Date, required: false, default: new Date()},
		description: { type: String, required: true },
		content: { type: String, required: true },
        image: { type: String, required: true },
        imageAlt: { type: String, required: false },
})

// defining the collection and model
const Blog = mongoose.models['blogs'] ||
    mongoose.model('blogs', blogSchema);

export default Blog;