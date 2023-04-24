import { getProcesoOwn } from "#@/app/Procesos/api/getProcesos";
import { getActuaciones } from "./Actuaciones/getActuaciones";
import type { Route } from 'next';
import layout from "##/layout.module.css";
import Card from "#@/components/card";
import box from '##/box.module.css';
const months = [ "January", "February", "March", "April", "May", "June", "July", "August", "September", "October", "November", "December" ];
export default async function Page ( {
  params,
}: {
  params: { llaveProceso: string; };
} ) {
  const proceso = await getProcesoOwn( params.llaveProceso );
  const actuaciones = await getActuaciones( proceso.idProceso,
proceso.llaveProceso );
  return (
    <div className={ layout.llaveProcesos }>
      {
        actuaciones.map(
          ( actuacion, index, array ) => {
            const dateActuacion = new Date( actuacion.fechaActuacion );
            const monthActuacion = months[ dateActuacion.getMonth() ];
            const dayActuacion = dateActuacion.getDate().toLocaleString();
            return (
              <Card
                key={ index }
                content={ actuacion.anotacion }
                title={ actuacion.actuacion }
                href={ ( "/Procesos/" + params.llaveProceso + "/Actuaciones?idProceso=" + proceso.idProceso ) as Route }
                index={ index }
                array={ array } ultimaActDate={ monthActuacion + ' / ' + dayActuacion } />
            );
          }
        )
      }
    </div>
  );
}
