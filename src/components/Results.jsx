import React from "react";
import { calculateInvestmentResults,formatter } from "../util/investment";
export default function Results({ input }) {
    console.log(input);
    const ans = calculateInvestmentResults(input);
    console.log(ans);
    const initialInvestment = ans[0].valueEndOfYear - ans[0].interest - ans[0].annualInvestment;
    return (
        <table id='result' >
            <thead>
                <tr>
                    <th>Year</th>
                    <th>Investment Value</th>
                    <th>Interest (year)</th>
                    <th>Total Interest</th>
                    <th>Invested Capital</th>
                </tr>
            </thead>
            <tbody>
                {ans.map(yearData => {
                    const totalInt = yearData.valueEndOfYear - yearData.annualInvestment*yearData.year -initialInvestment;
                    const totalAmount = yearData.valueEndOfYear-totalInt;
                      return <tr key={yearData.year}>
                        <td>{yearData.year}</td>
                        <td>{formatter.format(yearData.valueEndOfYear)}</td>
                        <td>{formatter.format(yearData.interest)}</td>
                        <td>{formatter.format(totalInt)}</td>
                        <td>{formatter.format(totalAmount)}</td>
                    </tr>
                })}
            </tbody>
        </table>
    );

}