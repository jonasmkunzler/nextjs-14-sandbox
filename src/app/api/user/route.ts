import { NextRequest, NextResponse } from "next/server";

export async function GET( req: NextRequest ){
  try {
    console.log(req);
    
    return Response.json({message:'DEU CERTO'});
  } catch (error) {
    return NextResponse.json({
      message:"Erro",
      error
    },
    {
      status:500
    })
  }
}
