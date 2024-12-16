
import { NextRequest, NextResponse } from 'next/server'
import connectDB from "@/../database/db"
import blogSchema from "@/../database/blogSchema"

type IParams = {
		params: {
			slug: string
		}
}

export async function GET(req: NextRequest, { params }: IParams) {
    await connectDB();
	const { slug } = await params
	try {
		const blog = await blogSchema.findOne({ slug }).orFail()
		return NextResponse.json(blog)
	} catch (err) {
		return NextResponse.json('Blog not found.', { status: 404 })
	}
}

export async function POST(req: NextRequest, { params }: IParams) {
	await connectDB();
	console.log('Connected to MongoDB');
	const body = await req.json();
	const { slug } = await params;
	if(!body.user || !body.comment){
		return NextResponse.json('Comment is missing a required field.', { status: 400 });
	}

	try{
		await blogSchema.findOneAndUpdate(
			{slug},
			{$push: {
				"comments": {
					user: body.user,
					comment: body.comment,
					date: new Date().toISOString()
				}
			}},
			{new: true}
		)
		return NextResponse.json(body);
	} catch (err) {
		return NextResponse.json('Could not POST comment.', { status: 400 });
	}

}