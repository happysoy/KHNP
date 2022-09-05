import { useEffect, useRef } from 'react';
import useAxis from 'src/hooks/useAxis';

export default function SmallGraph1() {
  const ref = useRef(null);
  const range = useAxis();
  console.log('small', range);

  useEffect(() => {
    const myDiv = ref.current;

    const trace1 = {
      x: [
        -407.6540476, -400.9264804, -389.1172414, -375.1095737, -361.101906, -348.3315859, -340.366671, -338.1682423,
        -340.0904044, -347.0942382, -356.9813152, -366.8683921, -374.5570404, -382.2456887, -388.0121749, -391.856499,
        -395.7008231, -399.5451473, -402.704657, -403.9420046, -403.2571902, -397.490704, -388.5647081, -376.7554691,
        -362.062987, -348.3315859, -334.3239182, -323.4757602, -317.709274, -313.8649499, -312.9038688, -315.7871119,
        -320.5925171, -326.6352699, -334.3239182, -341.327752, -344.4872618, -345.4483428, -339.6818566, -329.7947797,
        -316.748193, -303.4253397, -292.3009151, -285.9818956, -284.744548, -289.2736865, -300.1218445, -313.4446978,
        -326.4912845, -338.8530567, -346.8179716, -349.9774813, -351.214829, -345.8568906, -336.654628, -323.6080414,
        -309.324107, -295.3164393, -283.2309337, -274.3049378, -269.4995326, -269.0909848, -270.6045991, -273.0792944,
        -274.5929087, -274.8691753, -273.9080943, -275.8302564, -279.6745805, -286.6784143, -296.5654913, -304.8066728,
        -309.8883446, -308.2424492, -298.3553722, -283.3866235, -266.9042604, -253.5814071, -245.063959, -244.7876924,
        -253.7136883, -268.4061704, -284.6122668, -299.5810155, -312.3513356, -319.3551695, -322.923227, -325.8064701,
        -326.4912845, -328.1371799, -331.020423, -335.1410138, -338.9853379, -343.1059286, -344.3432763, -342.4211142,
        -334.732466, -323.884308, -309.1918259, -293.5382627, -277.6084329, -267.721356, -262.6396842, -265.2466607,
        -275.1337376, -289.1414053, -305.0712351, -317.1567408, -326.3590033, -329.2422464, -329.9270608, -328.6897132,
        -328.4134465, -331.5729562, -337.3394424, -345.580624, -350.3860291, -353.2692722, -350.1097625, -343.1059286,
        -332.9425851, -321.133346, -309.6003737, -298.0674013, -288.7328576, -278.8457806, -272.1182134, -266.0754606,
        -263.8770319, -261.9548698, -266.0754606, -270.8808657, -276.9236185, -282.6901047, -288.4565909, -295.8689726,
        -306.4408639, -319.8959984, -337.7479902, -357.7984108, -376.6114836, -389.6580703, -395.0160087, -387.3273605,
        -369.4753686, -342.4211142, -311.5225357, -283.2309337, -261.2583511, -250.4101931, -249.1728454, -257.4140269,
        -271.0131469, -285.2970812, -296.6977724, -300.8183632, -296.2892247, -282.281557, -262.5074031, -240.5348205,
        -220.4843999, -206.7529988, -202.6324081, -211.558404, -230.6477435, -256.0561025, -280.9119281, -300.9623487,
        -310.8494256, -311.53424, -303.0167919, -292.9857295, -286.1141768, -288.4448866, -301.6237544, -323.3200704,
        -347.2148151, -367.5415022, -379.9032745, -382.1017032, -373.4519739, -355.8762487, -335.1410138, -313.4446978,
        -292.9857295, -276.0948187, -262.087151, -252.200074, -249.0405643, -250.6864597, -260.29727, -276.2270998,
        -295.7249871, -315.499141, -332.3900518, -345.1603719, -353.1252867, -357.2458775, -358.4832252, -357.5221441,
        -351.4793913, -343.5144764, -330.4678897, -316.460222, -304.3747164, -295.4487205, -294.2113728, -299.016778,
        -310.826017, -326.7558468, -340.4872478, -352.2964869, -358.3392397, -360.5376684, -362.4598304, -365.0668069,
        -370.5570265, -378.2456747, -386.2105896, -391.2922614, -392.5296091, -385.1172274, -370.701012, -351.8879391,
        -330.1916231, -310.1412026, -296.4098015, -289.9585009, -290.5110342, -295.1841582, -299.8572822, -301.0946298,
        -297.5265723, -288.6005764, -277.7524184, -268.8264225, -262.7836697, -263.4684841, -269.9197847, -282.1375715,
        -295.0401727, -309.1801216, -322.0827228, -334.3005096, -342.9502388, -350.6388871, -354.4832112, -355.7205589,
        -354.7594779, -352.1525014, -348.3081773, -345.7012008, -343.0942243, -341.4483289, -337.8802714, -332.3900518,
        -322.0944271, -307.6782116, -290.378753, -271.5656801, -256.5969314, -245.4725068, -239.429754, -237.5075919,
        -237.5075919, -239.9822872, -240.9433682, -240.2585538, -239.9822872, -241.9044493, -247.3946688, -257.2817458,
        -271.9742279, -288.8651387, -306.0323161, -320.0399839, -327.7286321, -329.6507942, -323.3317747, -312.2073501,
        -297.2386014, -281.3087716, -267.3011039, -254.8070505, -245.1962401, -237.5075919, -232.7021867, -227.8967816,
        -225.9746195, -225.0135385, -227.8967816, -231.7411057, -235.8616964, -239.0212062, -236.1379631, -230.3714769,
        -220.8929477, -211.4144185, -207.0175612, -207.4261089,
      ],
      y: [
        105.7363583, 103.8024919, 101.4483734, 99.50280272, 97.55723202, 94.92684691, 93.67779493, 94.08634271,
        94.63887596, 95.61166131, 97.41324654, 99.21483177, 101.4249648, 103.6350978, 105.2926976, 106.3977641,
        107.5028306, 108.6078971, 108.4756159, 107.7908015, 106.5534538, 104.8958541, 103.3705355, 101.016417,
        97.83349864, 94.92684691, 92.98127621, 90.90342435, 89.24582459, 88.14075809, 87.86449146, 88.69329134,
        90.07462447, 90.7711432, 92.98127621, 93.95406156, 93.8217804, 94.09804703, 92.44044727, 90.63886204,
        88.96955797, 88.26133492, 87.1445641, 87.40912641, 88.09394081, 90.43635498, 92.51420683, 93.22242988,
        94.89173395, 95.32369037, 96.57274235, 96.44046119, 95.75564679, 96.29647572, 95.73223815, 94.06293407,
        93.0784444, 91.1328737, 89.73983625, 88.21451765, 86.83318452, 84.63475583, 82.98886039, 81.61923157,
        79.97333614, 79.0122551, 78.73598848, 79.28852173, 80.39358823, 81.36637359, 83.16795881, 83.45592976,
        83.87618186, 82.36256757, 80.56098234, 78.33914502, 77.76320313, 77.05498008, 77.72809017, 78.6891712,
        80.21448981, 83.39740817, 84.93443109, 87.15626842, 89.78665353, 90.75943888, 92.82558641, 93.65438629,
        94.89173395, 96.40534824, 97.23414812, 97.37813359, 98.48320009, 98.62718557, 97.94237116, 97.38983791,
        95.1797049, 93.10185304, 89.91893468, 86.45974969, 83.96164574, 82.16006051, 81.73980841, 83.52968932,
        85.33127455, 87.27684525, 89.77494921, 91.16798666, 91.73222423, 92.56102411, 93.79837177, 94.48318617,
        95.4442672, 95.31198605, 96.96958581, 97.25755675, 98.63888988, 99.46768976, 99.59997092, 98.62718557,
        97.78668137, 95.43256289, 92.11736337, 88.80216386, 85.07841656, 83.27683133, 81.34296495, 80.64644622,
        81.054994, 80.50246075, 80.64644622, 82.02777935, 82.72429808, 84.38189784, 86.03949759, 89.21071164,
        92.24964453, 96.11737729, 99.1680145, 101.8101039, 105.1370078, 106.8063118, 106.2654829, 104.0553499,
        101.0047127, 97.38983791, 92.66989662, 89.73983625, 86.54521357, 84.46736172, 85.15217612, 85.44014707,
        85.18728908, 86.17177875, 86.32746854, 86.47145401, 84.12903985, 82.18346915, 78.58029869, 75.38567601,
        72.74358658, 69.83693485, 69.69294937, 71.21826798, 73.58409078, 75.68535127, 79.70877383, 82.35086325,
        84.15244848, 85.38979614, 86.06290623, 88.38191176, 90.56863613, 93.31959807, 98.14841187, 102.3041156,
        106.0512715, 107.7322799, 108.1642363, 107.7556885, 105.2692889, 101.2575707, 97.37813359, 93.22242988,
        88.38191176, 85.60754118, 83.66197048, 81.86038525, 81.9926664, 83.50628068, 86.26894695, 88.7670509,
        93.33130239, 96.93447285, 99.70884343, 102.3392285, 103.5882805, 103.732266, 103.0474516, 102.771185,
        102.0746662, 100.8256143, 99.15631018, 97.21073948, 95.81770203, 94.29238343, 94.97719783, 96.35853096,
        98.71264945, 101.2107534, 104.1174051, 106.4715236, 107.1680423, 106.7594946, 107.3120278, 109.1019087,
        111.7205895, 113.9307225, 115.1797745, 115.6000266, 114.9152122, 111.7439982, 107.5999988, 104.2730949,
        100.1173912, 97.47530179, 94.56865005, 91.67370264, 89.75154057, 87.97336398, 86.19518739, 85.51037298,
        83.44422544, 81.91890684, 79.84105498, 78.31573638, 77.61921765, 78.85656531, 81.75151273, 86.3040599,
        92.09395473, 97.19903516, 102.98893, 107.5414772, 110.0278768, 112.2380098, 113.3430763, 112.6582619,
        112.3819953, 110.5921144, 109.4870479, 107.697167, 105.907286, 104.3936718, 102.3275242, 99.70884343,
        95.70882951, 91.56483012, 86.59203085, 83.26512701, 81.04328969, 79.92651886, 79.23000014, 78.67746688,
        78.67746688, 77.30783807, 77.5841047, 76.34675704, 77.30783807, 77.86037132, 80.47905211, 82.28063734,
        85.4635557, 88.23792629, 90.05121583, 91.99678654, 94.20691955, 94.7594528, 95.02401511, 93.90724428,
        91.68540695, 89.187303, 87.2417323, 83.65026616, 80.88759989, 78.67746688, 77.29613375, 75.91480062,
        75.36226737, 75.08600074, 75.91480062, 77.01986713, 77.1638526, 77.03157145, 76.20277157, 74.54517181,
        74.94201527, 75.33885873, 76.15595429, 78.35438298,
      ],
    };

    const data = [trace1];
    const layout = {
      title: 'CH1',
      width: 500,
      height: 300,
      yaxis: {
        fixedrange: true,
      },
    };

    Plotly.newPlot(myDiv, data, layout, { showSendToCloud: true });

    myDiv.on('plotly_relayout', function (eventdata) {
      alert(
        'ZOOM!' +
          '\n\n' +
          'Event data:' +
          '\n' +
          JSON.stringify(eventdata) +
          '\n\n' +
          'x-axis start:' +
          eventdata['xaxis.range[0]'] +
          '\n' +
          'x-axis end:' +
          eventdata['xaxis.range[1]']
      );
    });
  }, []);

  return (
    <>
      <div ref={ref} id="myDiv"></div>
      <script></script>
    </>
  );
}
