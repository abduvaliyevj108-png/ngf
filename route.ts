import { NextResponse } from "next/server";

export async function POST(request: Request) {
  try {
    const body = await request.json();

    // Bu yerda ma'lumotlarni bazaga (PostgreSQL/Prisma/Django API) saqlash kodi bo'ladi
    console.log("Qabul qilingan car e'lon:", body);

    return NextResponse.json(
      { message: "E'lon muvaffaqiyatli saqlandi!", data: body },
      { status: 201 }
    );
  } catch (error) {
    return NextResponse.json(
      { error: "Serverda xatolik yuz berdi" },
      { status: 500 }
    );
  }
}