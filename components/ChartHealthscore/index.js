import { useEffect, useState } from 'react';
import Highcharts from 'highcharts';
import HighchartsExporting from 'highcharts/modules/exporting';
import HighchartsReact from 'highcharts-react-official';

if (typeof Highcharts === 'object') {
  HighchartsExporting(Highcharts);
}

function ChartHealthscore({ data }) {
  const [assets, setAssets] = useState([]);

  function composeGraphic() {
    const array = data.map((asset) => {
      return {
        type: 'column',
        name: asset.name,
        data: [asset.healthscore],
        zones: [
          {
            value: 59,
            color: '#ff00002c',
          },
          {
            value: 79,
            color: '#ffa6002c',
          },
          {
            color: ' #1eff3151',
          },
        ],
      };
    });
    setAssets(array);
  }

  useEffect(() => {
    composeGraphic();
  }, []);

  const options = {
    tooltip: {
      backgroundColor: '#fff',
      borderColor: 'blue',
      borderRadius: 8,
      borderWidth: 1,
    },
    yAxis: {
      title: {
        text: 'HealthScore (hs)',
      },
      tickInterval: 5,
    },
    title: {
      text: 'Saúde dos ativos',
    },
    subtitle: {
      text: 'Healthscore (hs) neste momento',
    },
    series: assets,
    hoverData: null,
  };

  return (
    <>
      <HighchartsReact highcharts={Highcharts} options={options} />
    </>
  );
}

export default ChartHealthscore;
