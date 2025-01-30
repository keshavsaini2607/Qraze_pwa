import React, { useState } from "react";
import { useHistory } from "react-router";
import DiscountBadge from "../components/DiscountBadge";

const ActiveOffers: React.FC = () => {
  const history = useHistory();

  const campaignDetails = [
    { label: "Start date", value: "25th Jan 2025, 00:00 AM" },
    { label: "End date", value: "25th Jan 2025, 00:00 AM" },
    { label: "Redemptions", value: "150" },
  ];

  return (
    <div className="w-full md:w-[30%] m-auto h-screen">
      <div className="flex flex-col items-center justify-center gap-4 p-5">
        <p className="rounded-2xl p-4 bg-[#6DCFDE] w-full flex items-center justify-center">
          Hi&nbsp; <span className="font-bold">Skylight Alwar</span>, Welcome to
          Qraze!
        </p>

        <h2 className="font-bold text-[16px] ">Active Offers</h2>

        <div className="bg-[#FFCE1B] p-4 rounded-2xl w-full">
          <p className="font-bold mb-4">Campaign Name</p>

          <div className="flex gap-2 w-full ">
            <div className="flex flex-col gap-3 w-[75%]">
              {campaignDetails.map((item, index) => (
                <p key={index} className="flex justify-between text-[12px]">
                  <span className="font-semibold ">{item.label}</span>{" "}
                  <span>{item.value}</span>
                </p>
              ))}
            </div>

            <div className="m-auto">
              <DiscountBadge />
            </div>
          </div>
          <button
            className="bg-black  text-white w-full rounded-2xl mt-5 p-2 cursor-pointer"
            onClick={() => history.push("/scan")}
          >
            Avail now
          </button>
        </div>
      </div>
    </div>
  );
};

export default ActiveOffers;
