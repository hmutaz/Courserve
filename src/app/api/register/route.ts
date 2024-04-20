import { PrismaClient } from '@prisma/client';
import { NextResponse } from 'next/server';
import bcrypt from 'bcryptjs';

const prisma = new PrismaClient();

export const POST = async (request: any) => {
    const {email, password} = await request.json();

    const existingUser = await prisma.user.findUnique({
        where: {
            email
        }
    });

    if (existingUser) {
        return new NextResponse('User already exists', {
            status: 400
        });
    }

    const hashedPassword = await bcrypt.hash(password, 5);

    try {
        const user = await prisma.user.create({
            data: {
                email,
                password: hashedPassword
            }
        });
        return new NextResponse("user is registered", { status: 200 });
    } catch (err: any) {
        console.log(err);
        return new NextResponse(err, {
            status: 500,
        });
    }
}