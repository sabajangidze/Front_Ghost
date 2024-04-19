import React from 'react'
import DashboardHeader from '../DashboardElements/DashboardHeader/DashboardHeader'
import DashboardCRUDS from '../DashboardElements/DashboardCRUDS/DashboardCRUDS'
import PaymentsTable from './PaymentsTable/PaymentsTable'

function PaymentsDashboard() {
    return (
        <div className="flex flex-col">
          <div className="header_space"></div>
          <div className="flex flex-col lg:flex-row">
            <DashboardHeader />
            <div className="flex justify-center flex-1 bg-slate-300">
              <div className="mobile_wrapper lg:my-8">
                <DashboardCRUDS Title="გადახდები" />
                <PaymentsTable />
              </div>
            </div>
          </div>
        </div>
    )
}

export default PaymentsDashboard