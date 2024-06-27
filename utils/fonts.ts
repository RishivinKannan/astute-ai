import local from "next/font/local";

export const mokoto = local({
  src: "../fonts/mokoto/Mokoto.ttf",
});

export const century = local({
  src: [
    {
      path: "../fonts/century/CenturyGothicPaneuropeanThin.ttf",
      weight: "100",
    },
    {
      path: "../fonts/century/CenturyGothicPaneuropeanLight.ttf",
      weight: "300",
    },
    {
      path: "../fonts/century/CenturyGothicPaneuropeanRegular.ttf",
      weight: "400",
    },
    {
      path: "../fonts/century/CenturyGothicPaneuropeanSemiBold.ttf",
      weight: "600",
    },
    {
      path: "../fonts/century/CenturyGothicPaneuropeanBold.ttf",
      weight: "700",
    },
    {
      path: "../fonts/century/CenturyGothicPaneuropeanExtraBold.ttf",
      weight: "800",
    },
    {
      path: "../fonts/century/CenturyGothicPaneuropeanBlack.ttf",
      weight: "900",
    },
  ],
});
