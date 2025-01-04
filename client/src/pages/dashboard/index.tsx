import { useUser } from '@clerk/clerk-react'
import { FinancialRecordForm } from './financial-record-form'
import { FinancialRecordList } from './financial-record-list'
import "./financial-record.css"
import { useFinancialRecords } from '../../contexts/financial-record-context'
import { useMemo } from 'react'

export const Dashboard = () => {
    const { user } = useUser()
    const { records } = useFinancialRecords()

    // Use React's useMemo to calculate the total monthly amount
    const totalMonthly = useMemo(() => {
        return records.reduce((totalAmount, record) => totalAmount + record.amount, 0)
    }, [records]) // Dependency array ensures recalculation only when `records` changes

    return (
        <div className='dashboard-container'> 
            <h1>Welcome {user?.firstName}! Here are your finances:</h1>
            <FinancialRecordForm />
            <div>Total Monthly: {totalMonthly}</div>
            <FinancialRecordList /> 
        </div>
    )
}
