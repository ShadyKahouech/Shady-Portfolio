// import * as React from "react";
// import { Gauge, gaugeClasses } from "@mui/x-charts/Gauge";

// export default function ArcDesign({ value = 0 }) {
//   return (
//     <Gauge
//       width={80}
//       height={80}
//       value={value}
//       cornerRadius="50%"
//       sx={(theme) => ({
//         [`& .${gaugeClasses.valueText}`]: {
//           fontSize: 20,
//         },
//         [`& .${gaugeClasses.valueArc}`]: {
//           fill: "#52b202",
//         },
//         [`& .${gaugeClasses.referenceArc}`]: {
//           fill: theme.palette.text.disabled,
//         },
//       })}
//     />
//   );
// }
import * as React from "react";
import Box from "@mui/material/Box";
import LinearProgress from "@mui/material/LinearProgress";

export default function LinearDeterminate({ valueMin = 0, valueMax = 100 }) {
  const [progress, setProgress] = React.useState(valueMin);

  React.useEffect(() => {
    const timer = setInterval(() => {
      setProgress((oldProgress) => {
        if (oldProgress >= valueMax) {
          clearInterval(timer);
          return valueMax;
        }
        const diff = Math.random() * 5;
        return Math.min(oldProgress + diff, valueMax);
      });
    }, 500);

    return () => {
      clearInterval(timer);
    };
  }, [valueMax]);

  return (
    <Box sx={{ width: "100%" }}>
      <LinearProgress variant="determinate" value={progress} />
    </Box>
  );
}
