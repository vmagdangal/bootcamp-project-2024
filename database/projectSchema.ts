import mongoose, { Schema } from "mongoose";

// typescript type (can also be an interface)
type Project = {
    _id: string;
    name: string;
    description: string;
    link: string; 
    target: string;
    image: string;
    imageAlt: string;
};


// mongoose schema 
const projectSchema = new Schema<Project>({
		name: { type: String, required: true },
		description: { type: String, required: true },
		link: { type: String, required: true },
        target: {type: String, required: true },
        image: { type: String, required: true },
        imageAlt: { type: String, required: false },
})

// defining the collection and model
const Project = mongoose.models['projects'] ||
    mongoose.model('projects', projectSchema);

export default Project;
