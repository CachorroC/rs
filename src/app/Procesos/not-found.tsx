import typeface from "##/typeface.module.css";

import modal from "##/modal.module.css";

import SearchBar, { Search } from "#@/app/context-input-search";

import { llaves } from "#@/lib/llaves";

export default async function NotFound() {
  const today = new Date();

  const curHr = today.getHours();

  const time = () => {
    if (curHr < 12) {
      const timesegment = "este dia";

      return timesegment;
    }
    if (curHr < 18) {
      const timesegment = "la tarde";

      return timesegment;
    }

    const timesegment = "la noche";

    return timesegment;
  };

  return (
    <>
      <div className={modal.modal}>
        <div className={modal.content}>
          <div className={modal.header}>
            <span className="material-symbols-outlined">close</span>
            <h2 className={typeface.subtitle}>{"No se encuentra"}</h2>
          </div>
          <SearchBar />
          <div className={modal.body}>
            <p>{`Sentimos que tu consulta no hay podido ser resuelta en ${time()} de hoy.`}</p>
            <p>Some other text...</p>
          </div>
          <div className={modal.footer}>
            <h3>Modal Footer</h3>
          </div>
        </div>
      </div>
    </>
  );
}
