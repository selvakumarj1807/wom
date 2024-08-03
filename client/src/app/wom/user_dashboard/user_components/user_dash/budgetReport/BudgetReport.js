import React, { useState } from 'react'
import CardFilter from '../cardfilter/CardFilter'
import BudgetChart from './budgetChart/BudgetChart'

function BudgetReport() {
    const [filter, setFilter] = useState('Today');
    const handleFilterChanage = filter => {
        setFilter(filter)
    }
  return (
    <div className="card">
    <CardFilter filterChange={handleFilterChanage} />
    <div className="card-body pb-0">
        <h5 className="card-title">
            Budget Report <span>| {filter}</span>
        </h5>
        <BudgetChart />
    </div>
</div>
  )
}

export default BudgetReport