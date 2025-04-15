import React from 'react';
import { Dimensions } from 'react-native';
import Svg, { Path, Line } from 'react-native-svg';
import { evaluate } from 'mathjs';

interface Props {
  expression: string;
}

const { width } = Dimensions.get('window');
const HEIGHT = 300;
const PADDING = 20;
const GRAPH_WIDTH = width - PADDING * 2;
const GRAPH_HEIGHT = HEIGHT - PADDING * 2;

const FunctionPlot: React.FC<Props> = ({ expression }) => {
  const points: { x: number; y: number }[] = [];

  const xMin = -10;
  const xMax = 10;
  const step = (xMax - xMin) / GRAPH_WIDTH;

  for (let x = xMin; x <= xMax; x += step) {
    let y: number;
    try {
      y = evaluate(expression, { x });
      if (typeof y !== 'number' || isNaN(y)) y = 0;
    } catch (e) {
      y = 0;
    }

    const scaledX = ((x - xMin) / (xMax - xMin)) * GRAPH_WIDTH + PADDING;
    const scaledY = HEIGHT - (((y + 10) / 20) * GRAPH_HEIGHT + PADDING);

    points.push({ x: scaledX, y: scaledY });
  }

  const pathData = points
    .map((p, i) => `${i === 0 ? 'M' : 'L'} ${p.x.toFixed(2)} ${p.y.toFixed(2)}`)
    .join(' ');

  return (
    <Svg height={HEIGHT} width={width}>
      {/* Ejes */}
      <Line x1={PADDING} y1={HEIGHT / 2} x2={width - PADDING} y2={HEIGHT / 2} stroke="#aaa" />
      <Line x1={width / 2} y1={PADDING} x2={width / 2} y2={HEIGHT - PADDING} stroke="#aaa" />

      {/* Gráfica */}
      <Path d={pathData} stroke="#00b894" strokeWidth={2} fill="none" />
    </Svg>
  );
};

export default FunctionPlot;
