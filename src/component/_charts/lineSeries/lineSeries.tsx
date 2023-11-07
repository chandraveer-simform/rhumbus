"use client";
import React, { useLayoutEffect } from "react";
import * as am5 from "@amcharts/amcharts5";
import * as am5xy from "@amcharts/amcharts5/xy";
import am5themes_Animated from "@amcharts/amcharts5/themes/Animated";
import { IconsColor } from "@/utilities/constants";
import { GridInterface } from "../columnSeries/columnSeries";

export default function LineSeries({
  chartdiv = "chartdiv",
  className = "",
  seriesStrokeColor = IconsColor.primaryColor,
  seriesFillColor = IconsColor.primaryColor,
  xGridProperty = {
    forceHidden: true, // grid line hidden
    minGridDistance: 20,
  },
  yGridProperty = {
    forceHidden: true, // grid line hidden
  },
}: {
  chartdiv: string;
  className?: string;
  seriesStrokeColor?: string;
  seriesFillColor?: string;
  xGridProperty?: GridInterface;
  yGridProperty?: GridInterface;
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
    let yRenderer = am5xy.AxisRendererY.new(root, {});

    yRenderer.grid.template.setAll({
      ...yGridProperty,
    });

    var yAxis = chart.yAxes.push(
      am5xy.ValueAxis.new(root, {
        renderer: yRenderer,
      })
    );

    // Create X-Axis
    let xRenderer = am5xy.AxisRendererX.new(root, {
      ...xGridProperty,
    });

    xRenderer.grid.template.setAll({
      ...xGridProperty,
    });

    var xAxis = chart.xAxes.push(
      am5xy.DateAxis.new(root, {
        baseInterval: { timeUnit: "day", count: 1 },
        renderer: xRenderer,
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
