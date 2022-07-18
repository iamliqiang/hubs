import React from "react";
import { RoomLayout } from "../layout/RoomLayout";
import { EnterOnDeviceModal } from "./EnterOnDeviceModal";

export default {
  title: "Room/EnterOnDeviceModal",
  parameters: {
    layout: "fullscreen"
  }
};

export const Base = () => <RoomLayout viewport={<EnterOnDeviceModal shortUrl="0xspace.net" code="IDEB" />} />;

export const HeadsetConnected = () => (
  <RoomLayout viewport={<EnterOnDeviceModal shortUrl="0xspace.net" code="IDEB" headsetConnected />} />
);

export const VrNotSupported = () => (
  <RoomLayout viewport={<EnterOnDeviceModal unsupportedBrowser shortUrl="0xspace.net" code="IDEB" headsetConnected />} />
);

export const LoadingCode = () => <RoomLayout viewport={<EnterOnDeviceModal loadingCode />} />;
