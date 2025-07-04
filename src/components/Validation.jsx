import React from "react";

const Validation = () => {
  return (
    <div>
      <div className="px-2 md:px-5 lg:px-10 w-full h-auto trmcndn">
        <h1 className="grd_text py-5">VALIDITY AND ACCEPTANCE OF BETS</h1>

        <div className="pb-10">
          <div className="pvcplc_ttl">
            <h1>Betting Management</h1>
          </div>
          <div className="pvcplc_text">
            <p>
              Once confirmed, the bet cannot be modified or removed by the
              Player. www.play.bet.ar reserves the right to reject or partially
              accept the bet amount. www.play.bet.ar also reserves the right to
              cancel a previously accepted bet before the event begins, without
              explanation. In this case, the Player will be informed via the
              messaging system. In the event of irregularities or decisions that
              disrupt the regular progress of sporting events, www.play.bet.ar
              reserves the right to declare the event "cancelled," even after it
              has begun.
            </p>
          </div>

          <div className="pvcplc_ttl">
            <h1>Validity of bets</h1>
          </div>
          <div className="pvcplc_text">
            <p>
              The Player must check the bet before and after confirmation. The
              bet will be valid only after a confirmation message is displayed
              and the bet has been assigned an ID. All bets not confirmed before
              the start of the first event in the pool will not be accepted.
              Only bets present in the bet list of the Player's gaming account
              will be considered valid. Complaints related to bets not correctly
              registered in the database will not be considered.
            </p>
          </div>

          <div className="pvcplc_ttl">
            <h1>Types of bets</h1>
          </div>
          <div className="pvcplc_text">
            <p>
              The Player has the ability to choose between different types of
              bets and create personalized combinations. The types of bets
              available at www.play.bet.ar are: Single bet: The Player places a
              bet that includes a single predicted event. In this case, if the
              prediction is correct, the Player will be the winner. Multiple
              bets: The Player places a bet that includes more events. In this
              case, if the prediction for all events is correct, the Player will
              be the winner. Comprehensive bets: This consists of predicting
              multiple events (with a minimum of two) in which it is possible to
              select more than one odds for the same event. The system generates
              more tickets, depending on the number of odds selected for the
              same event, so that each bet appears only once on a ticket.
              Example: If a Player bets: Lazio - Roma: 1 and 2 Milan - Inter: X
              Torino - Juventus: X The system will generate two tickets:
              Lazio-Roma 1; Milan-Inter X; Torino-Juventus X Lazio-Roma 2;
              Milan-Inter X; Torino-Juventus X System: By selecting at least
              three odds for three different events, the Player can create a
              betting system. By selecting the 'System' option, located on the
              coupon, it is possible to plan a system. It is not necessary to
              predict and win all the bets placed; for example, by selecting
              doubles combinations with 4 events, the Application generates 6
              tickets in total, each consisting of 2 events; in this mode, the
              Player has 6 chances of winning. The Player can decide the types
              of combinations (single, double, treble, quadruple) and the amount
              to bet on each type or the total amount. Additionally, by clicking
              on the B button, they can set a base odds for the generated
              system. This means that it will be present on each combination.
              The Player can also combine events belonging to different sporting
              categories, but in some cases, it is not possible to combine
              different types of odds for the same event (for example, in the
              Motors category). If, due to human or system error, the
              Application accepts a system that includes two or more odds for
              the categories in question, all related bets will be void (all
              system odds will have a value of 1.0). The Application will
              automatically refund any credits wagered by the Player.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Validation;
