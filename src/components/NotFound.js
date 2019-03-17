import React from "react";

export default function NotFound() {
  return (
    <div>
      <i
        className="fa fa-arrow-left back fa-4x"
        onClick={() => {
          this.props.history.push("/");
        }}
      />
      <h2 style={{ "margin-left": "20px" }}>404 - Page Not Found</h2>
    </div>
  );
}
