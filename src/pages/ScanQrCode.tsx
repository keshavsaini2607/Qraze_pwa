import React, { useState } from "react";
import { IonButton, IonContent, IonPage, IonText } from "@ionic/react";
import { BarcodeScanner } from "@capacitor-community/barcode-scanner";
import "../theme/style.css";
import DiscountBadge from "../components/DiscountBadge";
import { useHistory } from "react-router";

const QrScanner: React.FC = () => {
  const [scannedData, setScannedData] = useState<string>("");
  const history = useHistory();

  const checkAndRequestPermission = async () => {
    const status = await BarcodeScanner.checkPermission({ force: true });
    return status.granted;
  };
  let stream: any;
  const startScan = async () => {
    try {
      stream = await navigator.mediaDevices.getUserMedia({ video: true }); // Request camera access

      document.body.classList.add("scanner-active");
      await BarcodeScanner.hideBackground();

      const result = await BarcodeScanner.startScan();

      if (result.hasContent) {
        setScannedData(result.content!);
      }
    } catch (error: any) {
      console.error("Camera permission denied or error:", error);
      if (error.name === "NotAllowedError") {
        alert(
          "Camera permission is required to scan QR codes. Please grant permission in your browser settings."
        );
      } else if (error.name === "NotFoundError") {
        alert("No camera found on this device.");
      } else {
        alert("An error occurred while accessing the camera: " + error.message);
      }
    } finally {
      document.body.classList.remove("scanner-active");
      BarcodeScanner.showBackground();
      BarcodeScanner.stopScan();

      if (stream) {
        const tracks = stream.getTracks();
        tracks.forEach((track: any) => track.stop());
      }
    }
  };

  const campaignDetails = [
    { label: "Start date", value: "25th Jan 2025, 00:00 AM" },
    { label: "End date", value: "25th Jan 2025, 00:00 AM" },
    { label: "Redemptions", value: "150" },
  ];

  return (
    <IonPage>
      {/* <IonContent className="ion-padding"> */}
      <div className="w-full md:w-[30%] flex flex-col items-center gap-20 m-auto h-screen p-5">
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
        </div>

        <div className="">
          <IonButton onClick={startScan}>Scan QR Code</IonButton>

          {scannedData && <IonText>Scanned Data: {scannedData}</IonText>}
        </div>
      </div>
      {/* </IonContent> */}
    </IonPage>
  );
};

export default QrScanner;
