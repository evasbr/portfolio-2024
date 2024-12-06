import connectMongoDB from '@/libs/mongodb';
import Project from "@/models/projects";
import {NextResponse} from 'next/server';

export async function GET(){
    await connectMongoDB();
    const projects = await Project.find();
    return NextResponse.json({projects});
}

export async function POST(request){
    const newProject = await request.json();
    connectMongoDB();
    await Project.create(newProject);
    return NextResponse.json({message: "Project Created"}, {status: 201});
}