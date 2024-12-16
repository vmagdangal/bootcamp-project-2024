
import { NextRequest, NextResponse } from 'next/server'
import connectDB from "@/../database/db"
import blogSchema from "@/../database/blogSchema"

export async function GET(req: NextRequest, { params }: { params: Promise<{ slug: string }> }) {
    await connectDB();
	const slug = (await params).slug
	try {
		const blog = await blogSchema.findOne({ slug }).orFail()
		return NextResponse.json(blog)
	} catch {
		return NextResponse.json('Blog not found.', { status: 404 })
	}
}

export async function POST(req: NextRequest, { params }: { params: Promise<{ slug: string }> }) {
	await connectDB();
	const body = await req.json();
	const slug = (await params).slug;
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
	} catch {
		return NextResponse.json('Could not POST comment.', { status: 400 });
	}

}