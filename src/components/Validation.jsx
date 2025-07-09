import React from "react";

const Validation = () => {
  return (
    <div>
      <div className="px-2 md:px-5 lg:px-10 w-full h-auto trmcndn">
        <h1 className="grd_text py-5">VALIDEZ Y ACEPTACIÓN DE LAS APUESTAS</h1>

        <div className="pb-10">
          <div className="pvcplc_ttl">
            <h1>Administración de las apuestas</h1>
          </div>
          <div className="pvcplc_text">
            <p>
              Una vez confirmada, la apuesta no puede ser modificada o eliminada por el Jugador. www.play.bet.ar se reserva el derecho de rechazar o aceptar parcialmente el monto apostado. www.play.bet.ar se reserva, además, el derecho de cancelar una apuesta anteriormente aceptada antes de que empiece el evento, sin explicación. En este caso el Jugador será informado a través de el sistema de mensajería. En caso de irregularidades o decisiones que alteran el regular desarrollo de los eventos deportivos, www.play.bet.ar se reserva el derecho de declarar el evento 'cancelado' incluso después de su inicio.
            </p>
          </div>

          <div className="pvcplc_ttl">
            <h1>Validez de las apuestas</h1>
          </div>
          <div className="pvcplc_text">
            <p>
              El Jugador deberá controlar la apuesta antes y después de la confirmación, La apuesta será válida sólo después de la visualización de un mensaje de confirmación y cuando a la apuesta se le haya asociado un ID. Todas las apuestas no confirmadas antes del inicio del primer evento en la quiniela, no serán aceptadas. Solo las apuestas presentes en la lista de apuestas de la cuenta de juego del Jugador serán consideradas válidas. Quejas relacionadas a apuestas no correctamente registradas en la base de datos no serán tomadas en cuenta.
            </p>
          </div>

          <div className="pvcplc_ttl">
            <h1>Tipos de apuestas</h1>
          </div>
          <div className="pvcplc_text">
            <p>
              El Jugador tiene la posibilidad de elegir entre diferentes tipos de apuestas y crear combinaciones personalizadas. Los tipos de apuestas disponibles en www.play.bet.ar son: Apuesta simple: el Jugador efectua una apuesta que incluye un solo evento previsto. En tal caso si se acierta el pronóstico, el Jugador saldrá ganador. Apuestas múltiples: el Jugador efectua una apuesta incluyendo más eventos. En tal caso si se acierta el pronóstico de todos los eventos, el Jugador saldrá ganador. Apuestas integrales: consiste en predecir eventos múltiples (con un mínimo de dos) en los cuales es posible seleccionar más cuotas para el mismo evento. El sistema produce más tiques, según el número de cuotas seleccionadas para el mismo evento de manera que cada apuesta aparezca una sola vez en un tique. Ejemplo Si un Jugador apuesta: Lazio - Roma: 1 and 2 Milan - Inter: X Torino - Juventus: X El sistema producirá dos tiques: Lazio-Roma 1; Milan-Inter X; Torino-Juventus X Lazio-Roma 2; Milan-Inter X; Torino-Juventus X Sistema: Seleccionando mínimo tres cuotas para tres eventos diferentes, el Jugador puede crear un sistema de apuestas. Seleccionando la opción 'Sistema', situado en el cupón, es posible planear un sistema. No es necesario prever y vencer todos los eventos apostados, por ejemplo, seleccionando combinaciones de dobles con 4 eventos, la Aplicación produce 6 tiques en total, cada tique está constituido por 2 eventos; el Jugador tiene, en este modo, 6 posibilidades de victoria. El Jugador puede decidir los tipos de combinaciones (simple, dobles, triples, cuádruples) y el monto que quiere apostar en cada tipo o el monto total. Además, haciendo clic en el botón B, él puede poner una cuota como base del sistema producido. Esto significa que será presente en cada combinación. El Jugador puede también combinar eventos que pertenecen a diferentes categorías deportivas, pero en unos casos, no es posible combinar diferentes tipos de cuotas para el mismo evento (por ejemplo en la categoría Motores). Si, por un error humano o del sistema, la Aplicación aceptara un sistema que incluye dos o más cuotas para las categorías en cuestión, todas las apuestas relativas vendrán canceladas (todas las cuotas del sistema tendrán valor 1.0). La Aplicación restituirá automáticamente los créditos apostados por el Jugador.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Validation;
