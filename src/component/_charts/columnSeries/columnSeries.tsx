"use client";
import React, { useRef, useLayoutEffect } from "react";
import * as am5 from "@amcharts/amcharts5";
import * as am5xy from "@amcharts/amcharts5/xy";
import am5themes_Animated from "@amcharts/amcharts5/themes/Animated";
import { IconsColor } from "@/utilities/constants";

//  Widget Legend
interface LegendMarkersInterface {
  width: number;
  height: number;
}

//  Widget Legend
interface LegendMarkersRectanglesInterface {
  cornerRadiusTL: number;
  cornerRadiusTR: number;
  cornerRadiusBL: number;
  cornerRadiusBR: number;
}

// X Renderer Properties
interface RendererPropertiesInterface {
  minGridDistance?: number;
  cellStartLocation?: number;
  cellEndLocation?: number;
}

// Renderer Grid Properties
export interface GridInterface {
  forceHidden?: boolean; // grid hidden
  minGridDistance?: number;
}

interface LabelsInterface {
  rotation?: number; // label rotation,
  paddingRight?: number; // padding right
}

// series properties for dynamic rendering
interface seriesPropertiesInterface {
  columnName: string;
  columnNameLabel: string;
  columnWidth?: number;
  seriesFillColor: string;
}

export default function ColumnSeries({
  chartdiv = "chartdiv",
  className = "",
  categoryField = "",
  data = [],
  isLegend = false,
  legendMarkers = {
    width: 16,
    height: 16,
  },
  legendMarkerRectangles = {
    cornerRadiusTL: 15,
    cornerRadiusTR: 15,
    cornerRadiusBL: 15,
    cornerRadiusBR: 15,
  },
  xRendererProperties = {
    minGridDistance: 30,
    cellStartLocation: 0.1,
    cellEndLocation: 0.9,
  },
  xGridProperty = {
    forceHidden: true, // grid line hidden
  },
  xLabelsProperty = {
    rotation: 0, // bottom x label rotation
    paddingRight: 0, // right side padding
  },
  yGridProperty = {
    forceHidden: true, // grid line hidden
  },
  seriesProperties = [
    {
      columnName: "",
      columnNameLabel: "",
      columnWidth: 16, // column width size
      seriesFillColor: IconsColor.primaryColor, //column color
    },
  ],
  xAxisVisible = true,
  yAxesVisible = true,
}: {
  chartdiv: string;
  className?: string;
  categoryField: string;
  data: any;
  isLegend?: boolean;
  legendMarkers?: LegendMarkersInterface;
  legendMarkerRectangles?: LegendMarkersRectanglesInterface;
  columnNames?: string[];
  xRendererProperties?: RendererPropertiesInterface;
  xGridProperty?: GridInterface;
  xLabelsProperty?: LabelsInterface;
  yGridProperty?: GridInterface;
  seriesProperties: seriesPropertiesInterface[];
  xAxisVisible?: boolean;
  yAxesVisible?: boolean;
}) {
  useLayoutEffect(() => {
    // Create root and chart
    var root = am5.Root.new(chartdiv);

    // Set themes
    // https://www.amcharts.com/docs/v5/concepts/themes/
    root.setThemes([am5themes_Animated.new(root)]);

    let chart = root.container.children.push(
      am5xy.XYChart.new(root, {
        panX: true,
        panY: true,
        wheelX: "panX",
        wheelY: "zoomX",
        pinchZoomX: true,
      })
    );

    // Add legend
    // https://www.amcharts.com/docs/v5/charts/xy-chart/legend-xy-series/
    let legend = chart.children.push(
      am5.Legend.new(root, {
        centerX: am5.p100,
        x: am5.p100,
        centerY: 0,
        y: 0,
      })
    );

    legend.markers.template.setAll({
      ...legendMarkers,
    });

    legend.markerRectangles.template.setAll({
      ...legendMarkerRectangles,
    });

    // Add cursor
    // https://www.amcharts.com/docs/v5/charts/xy-chart/cursor/
    let cursor = chart.set("cursor", am5xy.XYCursor.new(root, {}));
    cursor.lineY.set("visible", false);

    // Create axes
    // https://www.amcharts.com/docs/v5/charts/xy-chart/axes/
    let xRenderer = am5xy.AxisRendererX.new(root, {
      ...xRendererProperties,
    });

    xRenderer.labels.template.setAll({
      centerY: am5.p50,
      centerX: am5.p100,
      ...xLabelsProperty,
    });
    xRenderer.grid.template.setAll({
      location: 1,
      ...xGridProperty,
    });

    let xAxis = chart.xAxes.push(
      am5xy.CategoryAxis.new(root, {
        maxDeviation: 0.3,
        categoryField: categoryField,
        renderer: xRenderer,
        tooltip: am5.Tooltip.new(root, {}),
      })
    );

    let yRenderer = am5xy.AxisRendererY.new(root, {
      strokeOpacity: 0.1,
    });

    yRenderer.grid.template.setAll({
      ...yGridProperty,
    });

    let yAxis = chart.yAxes.push(
      am5xy.ValueAxis.new(root, {
        maxDeviation: 0.8,
        renderer: yRenderer,
      })
    );

    // X axis and y axis label hidden
    !xAxisVisible && xAxis.hide();
    !yAxesVisible && yAxis.hide();

    xAxis.data.setAll(data);

    // Add series
    // https://www.amcharts.com/docs/v5/charts/xy-chart/series/
    function makeSeries({
      name,
      fieldName,
      fillColor,
      columnWidth,
    }: {
      name: string;
      fieldName: string;
      fillColor: string;
      columnWidth: number;
    }) {
      let series = chart.series.push(
        am5xy.ColumnSeries.new(root, {
          name: name,
          xAxis: xAxis,
          yAxis: yAxis,
          valueYField: fieldName,
          sequencedInterpolation: true,
          categoryXField: categoryField,
          fill: am5.color(fillColor),
          // tooltip: am5.Tooltip.new(root, {
          //   labelText: "{valueY}",
          // }),
        })
      );

      series.columns.template.setAll({
        tooltipText: "{name}, {categoryX}:{valueY}",
        width: columnWidth,
        tooltipY: 0,
        cornerRadiusTL: 5,
        cornerRadiusTR: 5,
        strokeOpacity: 0,
      });

      series.data.setAll(data);

      // Make stuff animate on load
      // https://www.amcharts.com/docs/v5/concepts/animations/
      series.appear(1000);
      chart.appear(1000, 100);

      series.bullets.push(function () {
        return am5.Bullet.new(root, {
          locationY: 0,
          sprite: am5.Label.new(root, {
            text: "{valueY}",
            fill: root.interfaceColors.get("alternativeText"),
            centerY: 0,
            centerX: am5.p50,
            populateText: true,
          }),
        });
      });

      isLegend && legend.data.push(series);
    }

    for (var i = 0; i < seriesProperties?.length; i++) {
      const {
        columnName,
        columnNameLabel,
        seriesFillColor,
        columnWidth = 16,
      } = seriesProperties[i];

      makeSeries({
        name: columnNameLabel,
        fieldName: columnName,
        fillColor: seriesFillColor,
        columnWidth: columnWidth,
      });
    }

    return () => {
      root.dispose();
    };
  }, [data]);

  return (
    <div
      className={`m-0 p-0 ${className}`}
      id={chartdiv}
      style={{ width: "100%", height: "100%" }}
    ></div>
  );
}
