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
        data: [{ y: asset.healthscore, url: asset._id }],
        zones: [
          {
            value: 59,
            color: '#ff000070',
          },
          {
            value: 79,
            color: '#ffa60070',
          },
          {
            color: ' #1eff3170',
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
      borderRadius: 20,
      borderWidth: 3,
      valueSuffix: ' hs',
    },
    marker: {
      enabled: false,
    },
    yAxis: {
      title: {
        text: 'HealthScore (hs)',
      },
      tickInterval: 5,
    },
    title: {
      text: 'HealthScore',
    },
    subtitle: {
      text: 'Healthscore (hs) neste momento',
    },
    series: assets,
    legend: {
      showCheckbox: false,
      title: {
        text: '<h4>Ativos</h4>',
        style: {
          fontStyle: 'italic',
        },
      },
      symbolPadding: 0,
      symbolWidth: 0,
      symbolHeight: 0,
      squareSymbol: false,
      enabled: true,
    },
    plotOptions: {
      series: {
        pointWidth: 25,
        states: {
          inactive: {
            opacity: 1,
          },
        },
        cursor: 'pointer',
        point: {
          events: {
            click() {
              location.href = `http://localhost:3000/ativo/${this.url}`;
            },
          },
        },
      },
    },
  };

  return (
    <>
      <HighchartsReact highcharts={Highcharts} options={options} />
    </>
  );
}

export default ChartHealthscore;
