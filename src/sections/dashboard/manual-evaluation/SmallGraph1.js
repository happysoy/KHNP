import { useEffect, useRef, useState } from 'react';
import useAxis from 'src/hooks/useAxis';

const CH1X = {
  1: -407.6540476,
  2: -400.9264804,
  3: -389.1172414,
  4: -375.1095737,
  5: -361.101906,
  6: -348.3315859,
  7: -340.366671,
  8: -338.1682423,
  9: -340.0904044,
  10: -347.0942382,
};

const CH1Y = [
  -334.732466, -323.884308, -309.1918259, -293.5382627, -277.6084329, -267.721356, -262.6396842, -265.2466607,
  -275.1337376, -289.1414053,
];

const blank = {};

export default function SmallGraph1() {
  const ref = useRef(null);
  const range = useAxis();
  console.log('small', range);

  useEffect(() => {
    const myDiv = ref.current;

    const trace1 = {
      // x: [
      //   -407.6540476, -400.9264804, -389.1172414, -375.1095737, -361.101906, -348.3315859, -340.366671, -338.1682423,
      //   -340.0904044, -347.0942382, -356.9813152, -366.8683921, -374.5570404, -382.2456887, -388.0121749, -391.856499,
      //   -395.7008231, -399.5451473, -402.704657, -403.9420046, -403.2571902, -397.490704, -388.5647081, -376.7554691,
      //   -362.062987, -348.3315859, -334.3239182, -323.4757602, -317.709274, -313.8649499, -312.9038688, -315.7871119,
      //   -320.5925171, -326.6352699, -334.3239182, -341.327752, -344.4872618, -345.4483428, -339.6818566, -329.7947797,
      //   -316.748193, -303.4253397, -292.3009151, -285.9818956, -284.744548, -289.2736865, -300.1218445, -313.4446978,
      //   -326.4912845, -338.8530567, -346.8179716, -349.9774813, -351.214829, -345.8568906, -336.654628, -323.6080414,
      //   -309.324107, -295.3164393, -283.2309337, -274.3049378, -269.4995326, -269.0909848, -270.6045991, -273.0792944,
      //   -274.5929087, -274.8691753, -273.9080943, -275.8302564, -279.6745805, -286.6784143, -296.5654913, -304.8066728,
      //   -309.8883446, -308.2424492, -298.3553722, -283.3866235, -266.9042604, -253.5814071, -245.063959, -244.7876924,
      //   -253.7136883, -268.4061704, -284.6122668, -299.5810155, -312.3513356, -319.3551695, -322.923227, -325.8064701,
      //   -326.4912845, -328.1371799, -331.020423, -335.1410138, -338.9853379, -343.1059286, -344.3432763, -342.4211142,
      //   -334.732466, -323.884308, -309.1918259, -293.5382627, -277.6084329, -267.721356, -262.6396842, -265.2466607,
      //   -275.1337376, -289.1414053, -305.0712351, -317.1567408, -326.3590033, -329.2422464, -329.9270608, -328.6897132,
      //   -328.4134465, -331.5729562, -337.3394424, -345.580624, -350.3860291, -353.2692722, -350.1097625, -343.1059286,
      //   -332.9425851, -321.133346, -309.6003737, -298.0674013, -288.7328576, -278.8457806, -272.1182134, -266.0754606,
      //   -263.8770319, -261.9548698, -266.0754606, -270.8808657, -276.9236185, -282.6901047, -288.4565909, -295.8689726,
      //   -306.4408639, -319.8959984, -337.7479902, -357.7984108, -376.6114836, -389.6580703, -395.0160087, -387.3273605,
      //   -369.4753686, -342.4211142, -311.5225357, -283.2309337, -261.2583511, -250.4101931, -249.1728454, -257.4140269,
      //   -271.0131469, -285.2970812, -296.6977724, -300.8183632, -296.2892247, -282.281557, -262.5074031, -240.5348205,
      //   -220.4843999, -206.7529988, -202.6324081, -211.558404, -230.6477435, -256.0561025, -280.9119281, -300.9623487,
      //   -310.8494256, -311.53424, -303.0167919, -292.9857295, -286.1141768, -288.4448866, -301.6237544, -323.3200704,
      //   -347.2148151, -367.5415022, -379.9032745, -382.1017032, -373.4519739, -355.8762487, -335.1410138, -313.4446978,
      //   -292.9857295, -276.0948187, -262.087151, -252.200074, -249.0405643, -250.6864597, -260.29727, -276.2270998,
      //   -295.7249871, -315.499141, -332.3900518, -345.1603719, -353.1252867, -357.2458775, -358.4832252, -357.5221441,
      //   -351.4793913, -343.5144764, -330.4678897, -316.460222, -304.3747164, -295.4487205, -294.2113728, -299.016778,
      //   -310.826017, -326.7558468, -340.4872478, -352.2964869, -358.3392397, -360.5376684, -362.4598304, -365.0668069,
      //   -370.5570265, -378.2456747, -386.2105896, -391.2922614, -392.5296091, -385.1172274, -370.701012, -351.8879391,
      //   -330.1916231, -310.1412026, -296.4098015, -289.9585009, -290.5110342, -295.1841582, -299.8572822, -301.0946298,
      //   -297.5265723, -288.6005764, -277.7524184, -268.8264225, -262.7836697, -263.4684841, -269.9197847, -282.1375715,
      //   -295.0401727, -309.1801216, -322.0827228, -334.3005096, -342.9502388, -350.6388871, -354.4832112, -355.7205589,
      //   -354.7594779, -352.1525014, -348.3081773, -345.7012008, -343.0942243, -341.4483289, -337.8802714, -332.3900518,
      //   -322.0944271, -307.6782116, -290.378753, -271.5656801, -256.5969314, -245.4725068, -239.429754, -237.5075919,
      //   -237.5075919, -239.9822872, -240.9433682, -240.2585538, -239.9822872, -241.9044493, -247.3946688, -257.2817458,
      //   -271.9742279, -288.8651387, -306.0323161, -320.0399839, -327.7286321, -329.6507942, -323.3317747, -312.2073501,
      //   -297.2386014, -281.3087716, -267.3011039, -254.8070505, -245.1962401, -237.5075919, -232.7021867, -227.8967816,
      //   -225.9746195, -225.0135385, -227.8967816, -231.7411057, -235.8616964, -239.0212062, -236.1379631, -230.3714769,
      //   -220.8929477, -211.4144185, -207.0175612, -207.4261089,
      // ],
      x: Object.values(CH1X),
      y: CH1Y,
    };
    // Object.values(CH1X),
    let data = [trace1];
    const layout = {
      title: 'CH1',
      width: 500,
      height: 300,
      yaxis: {
        fixedrange: true,
      },
    };

    if (isNaN(range[0]) || range[0] === undefined) {
      data = [blank];
      Plotly.newPlot(myDiv, data, layout);
      return;
    }
    Plotly.newPlot(myDiv, data, layout, { showSendToCloud: true });

    let startValue = CH1X[range[0]];
    let endValue = CH1X[range[1]];

    let update = {
      'xaxis.range': [startValue, endValue],
    };
    Plotly.relayout(myDiv, update);

    // myDiv.on('plotly_relayout',update )
  }, [range]);

  return (
    <>
      <div ref={ref} id="myDiv"></div>
      <script></script>
    </>
  );
}
