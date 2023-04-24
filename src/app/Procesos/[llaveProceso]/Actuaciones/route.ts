import { NextRequest, NextResponse } from "next/server";
import { intActuacion, intConsultaActuaciones } from "../../procesos";
process.env[ "NODE_TLS_REJECT_UNAUTHORIZED" ] = "0";
import "server-only";
import { notFound } from "next/navigation";
export async function GET ( request: NextRequest ) {
  const { searchParams } = new URL( request.url );
  const idProceso = searchParams.get( "idProceso" );
  if ( idProceso ) {
    const res = await fetch(
      `https://consultaprocesos.ramajudicial.gov.co:448/api/v2/Proceso/Actuaciones/${ idProceso }`
    );
    const dataRaw = ( await res.json() ) as intConsultaActuaciones;
    const actuaciones = JSON.stringify( dataRaw.actuaciones );
    return new NextResponse( actuaciones,
      {
        status: 200,
        headers: {
          "content-type": "application/json",
        },
      } );
  }
  return new NextResponse(
    null, {
    status: 404,
    statusText: notFound()
  }
  );
}
