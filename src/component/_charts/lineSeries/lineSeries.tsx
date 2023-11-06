"use client";
import React, { useRef, useLayoutEffect } from "react";
import * as am5 from "@amcharts/amcharts5";
import * as am5xy from "@amcharts/amcharts5/xy";
import am5themes_Animated from "@amcharts/amcharts5/themes/Animated";
import { IconsColor } from "@/utilities/constants";

export default function LineSeries({
  chartdiv = "chartdiv",
  className = "",
  seriesStrokeColor = IconsColor.primaryColor,
  seriesFillColor = IconsColor.primaryColor,
}: {
  chartdiv: string;
  className?: string;
  seriesStrokeColor?: string;
  seriesFillColor?: string;
}) {
  // Generate random data
  let date = new Date();
  date.setHours(0, 0, 0, 0);
  let value = 100;

  function generateData() {
    value = Math.round(Math.random() * 10 - 5 + value);
    am5.time.add(date, "day", 1);
    return {
      date: date.getTime(),
      value: value,
    };
  }

  function generateDatas(count: number) {
    let data = [];
    for (var i = 0; i < count; ++i) {
      data.push(generateData());
    }
    return data;
  }

  useLayoutEffect(() => {
    // Create root and chart
    var root = am5.Root.new(chartdiv);

    root.setThemes([am5themes_Animated.new(root)]);

    var chart = root.container.children.push(
      am5xy.XYChart.new(root, {
        panY: false,
        wheelY: "zoomX",
        layout: root.verticalLayout,
      })
    );

    var data = generateDatas(20);

    // Craete Y-axis
    var yAxis = chart.yAxes.push(
      am5xy.ValueAxis.new(root, {
        renderer: am5xy.AxisRendererY.new(root, {}),
      })
    );

    // Create X-Axis
    var xAxis = chart.xAxes.push(
      am5xy.DateAxis.new(root, {
        baseInterval: { timeUnit: "day", count: 1 },
        renderer: am5xy.AxisRendererX.new(root, {
          minGridDistance: 20,
        }),
      })
    );

    // Create series
    function createSeries(name: string, field: string) {
      let series = chart.series.push(
        am5xy.SmoothedXLineSeries.new(root, {
          name: "Series",
          xAxis: xAxis,
          yAxis: yAxis,
          valueYField: "value",
          valueXField: "date",
          tension: 0.2,
          minDistance: 0,
          stroke: am5.color(seriesStrokeColor),
          fill: am5.color(seriesFillColor),
        })
      );
      series.strokes.template.setAll({
        strokeWidth: 2,
      });
      series.fills.template.setAll({
        fillOpacity: 0.5,
        visible: true,
      });
      series.data.setAll(data);
    }

    createSeries("Series with breaks", "value");

    return () => {
      root.dispose();
    };
  }, []);

  return (
    <div
      className={`m-0 p-0 ${className}`}
      id={chartdiv}
      style={{ width: "100%", height: "100%" }}
    ></div>
  );
}
