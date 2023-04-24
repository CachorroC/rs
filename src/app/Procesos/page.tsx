import { getProcesosOwn } from "#@/app/Procesos/api/getProcesos";
import Card from "#@/components/card";
import layout from "##/layout.module.css";
const months = [ "January", "February", "March", "April", "May", "June", "July", "August", "September", "October", "November", "December" ];

export default async function Page () {
  const procesos = await getProcesosOwn();

  const Proceso = procesos.map(
    ( proceso, index, array ) => {
      const dateActuacion = new Date( proceso.fechaUltimaActuacion
? proceso.fechaUltimaActuacion
: '' );
      const monthActuacion = months[ dateActuacion.getMonth() ];
      const dayActuacion = dateActuacion.getDate().toLocaleString();
      const id = ( proceso.idProceso + index ).toString();

      return (
        <Card
          key={ index }
          content={ id }
          title={ proceso.sujetosProcesales }
          index={ index }
          array={ array }
          href={ "/Procesos" } ultimaActDate={ dayActuacion + monthActuacion } />
      );
    } );
  return <div className={ layout.procesos }>{ Proceso }</div>;
}
