import { render } from 'react-dom'
import { ResponsiveBar } from '@nivo/bar'


// make sure parent container have a defined height when using responsive component,
// otherwise height will be 0 and no chart will be rendered.
// website examples showcase many properties, you'll often use just a few of them.
render((
    <ResponsiveBar
				/* data format [{index: <group of bars>, key1: value, key2: value, ... }, {}, ...]*/
				data={/* see data tab */}

				// keys to group together
				/*
  			keys={[
						"key1",
						"key2",
        ]}
				*/

				// index defines different groups (essentially x-axis metric)
        indexBy="year"

				// margins for the graph
        margin={{
            "top": 50,
            "right": 130,
            "bottom": 50,
            "left": 60
        }}

				// padding between each bar
        padding={0.3}

				// color range
        colors="nivo"

				// property to determine node color
        colorBy="id"

				// define SVG defs
        defs={[
            {
                "id": "dots",
                "type": "patternDots",
                "background": "inherit",
                "color": "#38bcb2",
                "size": 4,
                "padding": 1,
                "stagger": true
            },
            {
                "id": "lines",
                "type": "patternLines",
                "background": "inherit",
                "color": "#eed312",
                "rotation": -45,
                "lineWidth": 6,
                "spacing": 10
            }
        ]}

				// rules for SVG defs
        fill={[
            {
                "match": {
                    "id": "fries"
                },
                "id": "dots"
            },
            {
                "match": {
                    "id": "sandwich"
                },
                "id": "lines"
            }
        ]}

				// border color rule
        borderColor="inherit:darker(1.6)"

				// bottom axis rules
        axisBottom={{
            "orient": "bottom",
            "tickSize": 5,
            "tickPadding": 5,
            "tickRotation": 0,
            "legend": "country",
            "legendPosition": "center",
            "legendOffset": 36
        }}

				// left axis rules
        axisLeft={{
            "orient": "left",
            "tickSize": 5,
            "tickPadding": 5,
            "tickRotation": 0,
            "legend": "food",
            "legendPosition": "center",
            "legendOffset": -40
        }}

        labelSkipWidth={12}
        labelSkipHeight={12}
        labelTextColor="inherit:darker(1.6)"
        animate={true}
        motionStiffness={90}
        motionDamping={15}
        legends={[
            {
                "dataFrom": "keys",
                "anchor": "bottom-right",
                "direction": "column",
                "justify": false,
                "translateX": 120,
                "translateY": 0,
                "itemsSpacing": 2,
                "itemWidth": 100,
                "itemHeight": 20,
                "itemDirection": "left-to-right",
                "itemOpacity": 0.85,
                "symbolSize": 20,
                "effects": [
                    {
                        "on": "hover",
                        "style": {
                            "itemOpacity": 1
                        }
                    }
                ]
            }
        ]}
    />
), document.getElementById('chart'))
