
import { NextResponse } from "next/server";
import { supabase } from "@/lib/supabase";

export async function POST(
  request: Request
) {
  try {
    const body = await request.json();

    const {
      name,
      phone,
      email,
      service,
      form_data,
    } = body;

    if (
      !name ||
      !phone ||
      !email ||
      !service
    ) {
      return NextResponse.json(
        {
          success: false,
          message:
            "Missing required fields",
        },
        {
          status: 400,
        }
      );
    }

    const { data, error } =
      await supabase
        .from("leads")
        .insert([
          {
            name,
            phone,
            email,
            service,
            form_data,
          },
        ])
        .select();

    if (error) {
      console.error(
        "SUPABASE ERROR:",
        error
      );

      return NextResponse.json(
        {
          success: false,
          message: error.message,
        },
        {
          status: 500,
        }
      );
    }

    return NextResponse.json({
      success: true,
      lead: data,
    });
  } catch (error) {
    console.error(
      "API ERROR:",
      error
    );

    return NextResponse.json(
      {
        success: false,
        message:
          error instanceof Error
            ? error.message
            : "Unknown error",
      },
      {
        status: 500,
      }
    );
  }
}
