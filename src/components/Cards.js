import React from "react";
import { CircularProgressbar } from "react-circular-progressbar";
import "react-circular-progressbar/dist/styles.css";
import "../App.css";
import sanlam from "./sanlam.png";
import ut from "./output-onlinepngtools.png";
import tax from "./tax.png";
const data = require("./data.json");

const Cards = () => {
  return (
    <div className="main">
      {/* first card */}
      <div class="card">
        <div className="card-bg-light">
          <div className="card-header bg-primary text-white">
            <img className="ut" src={ut}></img>{" "}
            <p className="card-title">
              {data.portfolio.clientAccountGroups[0].productLabel}
              <p>
                Investor Code:{" "}
                {data.portfolio.clientAccountGroups[0].accountGroupId}
              </p>
            </p>
          </div>
          <div className="card-body">
            <div class="row">
              <div class="col-lg-6">
                <CircularProgressbar
                  value={
                    data.portfolio.clientAccountGroups[0].percentageComplete
                  }
                  text={`${data.portfolio.clientAccountGroups[0].percentageComplete}%`}
                />
              </div>
              <div class="col-lg-6">
                <p>
                  Almost there!{" "}
                  <b>
                    {data.portfolio.clientAccountGroups[0].percentageComplete}%
                  </b>{" "}
                  done with your application
                </p>
                <hr />
                <p>
                  Pick up where you left off or{" "}
                  <button type="button" class="btn btn-outline-primary">
                    Cancel &times;
                  </button>
                </p>
              </div>
            </div>
            <hr />
            <p>
              Last updated:
              <p className="date">
                {data.portfolio.clientAccountGroups[0].valueDate}
              </p>
            </p>
            <p>
              Total funds:
              <p className="funds">
                {data.portfolio.clientAccountGroups[0].funds.length}
              </p>
            </p>
            <hr />
            <button type="button" class="btn btn-primary btn-lg">
              RESUME APPLICATION
            </button>
          </div>
        </div>
      </div>
      {/* second card */}
      <div class="card">
        <div className="card-bg-light">
          <div className="card-header bg-primary text-white">
            <img className="ut" src={tax}></img>{" "}
            <p className="card-title">
              {data.portfolio.clientAccountGroups[1].productLabel}
              <p>
                Investor Code:{" "}
                {data.portfolio.clientAccountGroups[1].accountGroupId}
              </p>
            </p>
          </div>
          <div className="card-body">
            <div class="row">
              <div class="col-lg-6">
                <CircularProgressbar
                  value={
                    data.portfolio.clientAccountGroups[1].percentageComplete
                  }
                  text={`${data.portfolio.clientAccountGroups[1].percentageComplete}%`}
                />
              </div>
              <div class="col-lg-6">
                <p>Well Done! We have all the information we need.</p>
                <hr />
                <p>Your investment is currently pending.</p>
              </div>
            </div>
            <hr />
            <p>
              Application submitted:{" "}
              <p className="date">
                {data.portfolio.clientAccountGroups[1].valueDate}
              </p>
            </p>
            <p>
              Total funds:{" "}
              <p className="funds">
                {data.portfolio.clientAccountGroups[1].funds.length}
              </p>
            </p>
            <hr />
          </div>
        </div>
      </div>
      {/* third card */}
      <div class="card">
        <div className="card-bg-light">
          <div className="card-header bg-primary text-white">
            <img className="ut" src={tax}></img>{" "}
            <p className="card-title">
              {data.portfolio.clientAccountGroups[2].productLabel}
              <p>
                Investor Code:{" "}
                {data.portfolio.clientAccountGroups[2].accountGroupId}
              </p>
            </p>
          </div>
          <div className="card-body">
            <p>
              Total value:{" "}
              <p className="funds">
                R {data.portfolio.clientAccountGroups[2].marketValue.toFixed(2)}
              </p>
            </p>
            <p>
              Total available:{" "}
              <p className="funds">
                R{" "}
                {data.portfolio.clientAccountGroups[2].availableMarketValue.toFixed(
                  2
                )}
              </p>
            </p>
            <p>
              Total funds:{" "}
              <p className="funds">
                {data.portfolio.clientAccountGroups[2].funds.length}
              </p>
            </p>
            <p>
              Investing since:{" "}
              <p className="funds">
                {data.portfolio.clientAccountGroups[0].inceptionDate}
              </p>
            </p>
            <button type="button" class="btn btn-primary btn-lg">
              VIEW FUND
            </button>
            <hr />
            <img className="sanlam" src={sanlam}></img>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Cards;
