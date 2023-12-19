import { useState } from "react";

type Budget = {
    groceries: number;
    rent: number;
    utilities: number;
    entertainment: number;
}

function capitalizeFirstLetter(word: string): string {
    return word.charAt(0).toUpperCase() + word.slice(1);
}

function BudgetTracker() {
    const [budget, setBudget] = useState<Budget>({
        groceries: 0,
        rent: 0,
        utilities: 0,
        entertainment: 0,
    });

    function GetTotalBudget() {
        if (!budget) {
            return 0;
        }
        const sum = Object.values(budget).reduce(
            (accumulator, currentValue) => accumulator + currentValue, 0);
        return sum;
    }
    return <>
        <div className="budget-tracker" id="basic-container">
            <h2>Budget Tracker</h2>
            <div className="current-budget">
                {Object.entries(budget).map(([key, value]) => (
                    <div className="budget-row" key={key}>

                        <span id="key">{capitalizeFirstLetter(key)}</span> <span id="value">{value.toFixed(2)}</span>
                    </div>
                ))}
                <div className="budget-row" id="budget-total">
                    <span id="key">Total budget</span><span id="value">{GetTotalBudget().toFixed(2)}</span>
                </div>
            </div>
        </div>
    </>
}

export default BudgetTracker;