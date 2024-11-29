import React from "react";
import { render, screen } from "@testing-library/react";
import Table from "./Table";

describe("Table Component", () => {
  it("renders table headers correctly", () => {
    render(<Table records={[]} />);
    expect(screen.getByText("S.No.")).toBeInTheDocument();
    expect(screen.getByText("Percentage Funded")).toBeInTheDocument();
    expect(screen.getByText("Amount Pledged")).toBeInTheDocument();
  });

  it("renders table rows correctly", () => {
    const mockRecords = [
      { "s.no": 0, "percentage.funded": 186, "amt.pledged": 15283 },
      { "s.no": 1, "percentage.funded": 8, "amt.pledged": 6859 },
    ];

    render(<Table records={mockRecords} />);

    // Account for number formatting (e.g., commas in numbers)
    expect(screen.getByText("15,283")).toBeInTheDocument();
    expect(screen.getByText("6,859")).toBeInTheDocument();
  });
});
