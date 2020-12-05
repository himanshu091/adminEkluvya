/* eslint-disable jsx-a11y/anchor-is-valid */
import React from "react";
import SVG from "react-inlinesvg";
import { toAbsoluteUrl } from "../../../_helpers";

export function TilesWidget12({
  className,
  iconColor = "success",
  widgetHeight = "150px",
  title,
  amount,
  icon
}) {
  return (
    <>
      <div
        className={`card card-custom ${className}`}
        style={{ height: widgetHeight }}
      >
        <div className="card-body">
          <span className={`svg-icon svg-icon-3x svg-icon-${iconColor}`}>
            <SVG
              src={toAbsoluteUrl(icon)}
            />
          </span>
          <div className="text-dark font-weight-bolder font-size-h2 mt-3">
            {amount}
          </div>

          <a
            href="#"
            className="text-muted text-hover-primary font-weight-bold font-size-lg mt-1"
          >
            {title}
          </a>
        </div>
      </div>
    </>
  );
}
