import React from 'react';
import { Button } from 'antd-mobile';
import ReactEChartsCore from 'echarts-for-react/lib/core';
import * as echarts from 'echarts/core';
import { BarChart } from 'echarts/charts';
import { GridComponent } from 'echarts/components';
// 注意，新的接口中默认不再包含 Canvas 渲染器，需要显示引入，如果需要使用 SVG 渲染模式则使用 SVGRenderer
import { CanvasRenderer } from 'echarts/renderers';

echarts.use([BarChart, GridComponent, CanvasRenderer]);

export default function About() {
	const options = {
		xAxis: {
			type: 'value',
			show: false,
		},
		yAxis: {
			type: 'category',
			data: ['1', 'A', 'B', 'C', 'D', 'E', 'F'],
		},
		series: [
			{
				data: [
					{
						value: 20000,
						itemStyle: {
							color: '#a90000',
						},
					},
					15000,
					8000,
					7000,
					11000,
					13000,
					14000,
				],
				type: 'bar',
			},
		],
	};

	return <ReactEChartsCore echarts={echarts} option={options} notMerge={true} lazyUpdate={true} />;
}
