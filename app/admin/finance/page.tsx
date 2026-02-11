/* eslint-disable @typescript-eslint/no-explicit-any */
import React from "react";
import Link from "next/link";
import { createServerSupabaseClient } from "@/lib/supabase/server";
import {
  FaPlus,
  FaArrowUp,
  FaArrowDown,
  FaMoneyBillWave,
  FaChartLine,
} from "react-icons/fa";

export default async function FinancePage() {
  const supabase = createServerSupabaseClient();

  // Fetch all transactions
  const { data: transactions } = await supabase
    .from("transactions")
    .select(
      `
      *,
      projects:project_id (
        id,
        title,
        clients:client_id (
          name
        )
      )
    `,
    )
    .order("transaction_date", { ascending: false })
    .limit(10);

  // Calculate stats
  const totalIncome =
    transactions
      ?.filter((t) => t.type === "income")
      .reduce((sum, t) => sum + Number(t.amount), 0) || 0;

  const totalExpense =
    transactions
      ?.filter((t) => t.type === "expense")
      .reduce((sum, t) => sum + Number(t.amount), 0) || 0;

  const netProfit = totalIncome - totalExpense;

  // Get current month transactions
  const now = new Date();
  const firstDayOfMonth = new Date(now.getFullYear(), now.getMonth(), 1);
  const monthTransactions = transactions?.filter(
    (t) => new Date(t.transaction_date) >= firstDayOfMonth,
  );

  const monthIncome =
    monthTransactions
      ?.filter((t) => t.type === "income")
      .reduce((sum, t) => sum + Number(t.amount), 0) || 0;

  const monthExpense =
    monthTransactions
      ?.filter((t) => t.type === "expense")
      .reduce((sum, t) => sum + Number(t.amount), 0) || 0;

  // Format currency
  const formatCurrency = (amount: number) => {
    return `Rp ${(amount / 1000).toFixed(0)}k`;
  };

  return (
    <div>
      {/* Header */}
      <div className="flex items-center justify-between mb-8">
        <div>
          <h1 className="text-2xl font-bold text-white mb-2">Finance</h1>
          <p className="text-slate-400">Track your income and expenses</p>
        </div>

        <Link
          href="/admin/finance/transactions/new"
          className="flex items-center gap-2 px-4 py-2 bg-blue-600 hover:bg-blue-500 text-white rounded-lg transition-colors"
        >
          <FaPlus className="w-4 h-4" />
          <span>Add Transaction</span>
        </Link>
      </div>

      {/* Stats Cards - All Time */}
      <div className="mb-6">
        <h2 className="text-lg font-semibold text-white mb-4">All Time</h2>
        <div className="grid grid-cols-1 md:grid-cols-4 gap-6">
          <div className="bg-slate-800 border border-slate-700 rounded-xl p-6">
            <div className="flex items-center gap-3 mb-2">
              <div className="p-2 bg-green-500/10 rounded-lg">
                <FaArrowUp className="w-5 h-5 text-green-400" />
              </div>
              <p className="text-slate-400 text-sm">Total Income</p>
            </div>
            <p className="text-3xl font-bold text-green-400">
              {formatCurrency(totalIncome)}
            </p>
          </div>

          <div className="bg-slate-800 border border-slate-700 rounded-xl p-6">
            <div className="flex items-center gap-3 mb-2">
              <div className="p-2 bg-red-500/10 rounded-lg">
                <FaArrowDown className="w-5 h-5 text-red-400" />
              </div>
              <p className="text-slate-400 text-sm">Total Expense</p>
            </div>
            <p className="text-3xl font-bold text-red-400">
              {formatCurrency(totalExpense)}
            </p>
          </div>

          <div className="bg-slate-800 border border-slate-700 rounded-xl p-6">
            <div className="flex items-center gap-3 mb-2">
              <div className="p-2 bg-blue-500/10 rounded-lg">
                <FaMoneyBillWave className="w-5 h-5 text-blue-400" />
              </div>
              <p className="text-slate-400 text-sm">Net Profit</p>
            </div>
            <p
              className={`text-3xl font-bold ${
                netProfit >= 0 ? "text-blue-400" : "text-red-400"
              }`}
            >
              {formatCurrency(netProfit)}
            </p>
          </div>

          <div className="bg-slate-800 border border-slate-700 rounded-xl p-6">
            <div className="flex items-center gap-3 mb-2">
              <div className="p-2 bg-purple-500/10 rounded-lg">
                <FaChartLine className="w-5 h-5 text-purple-400" />
              </div>
              <p className="text-slate-400 text-sm">Transactions</p>
            </div>
            <p className="text-3xl font-bold text-white">
              {transactions?.length || 0}
            </p>
          </div>
        </div>
      </div>

      {/* Stats Cards - This Month */}
      <div className="mb-8">
        <h2 className="text-lg font-semibold text-white mb-4">
          This Month (
          {now.toLocaleString("id-ID", { month: "long", year: "numeric" })})
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          <div className="bg-slate-800 border border-slate-700 rounded-xl p-6">
            <p className="text-slate-400 text-sm mb-2">Income</p>
            <p className="text-2xl font-bold text-green-400">
              {formatCurrency(monthIncome)}
            </p>
          </div>

          <div className="bg-slate-800 border border-slate-700 rounded-xl p-6">
            <p className="text-slate-400 text-sm mb-2">Expense</p>
            <p className="text-2xl font-bold text-red-400">
              {formatCurrency(monthExpense)}
            </p>
          </div>

          <div className="bg-slate-800 border border-slate-700 rounded-xl p-6">
            <p className="text-slate-400 text-sm mb-2">Net</p>
            <p
              className={`text-2xl font-bold ${
                monthIncome - monthExpense >= 0
                  ? "text-blue-400"
                  : "text-red-400"
              }`}
            >
              {formatCurrency(monthIncome - monthExpense)}
            </p>
          </div>
        </div>
      </div>

      {/* Recent Transactions */}
      <div className="bg-slate-800 border border-slate-700 rounded-xl overflow-hidden">
        <div className="p-6 border-b border-slate-700 flex items-center justify-between">
          <h2 className="text-lg font-semibold text-white">
            Recent Transactions
          </h2>
          <Link
            href="/admin/finance/transactions"
            className="text-sm text-blue-400 hover:text-blue-300 transition-colors"
          >
            View All →
          </Link>
        </div>

        {!transactions || transactions.length === 0 ? (
          <div className="p-12 text-center">
            <div className="inline-flex items-center justify-center w-16 h-16 bg-slate-700 rounded-full mb-4">
              <FaMoneyBillWave className="w-8 h-8 text-slate-500" />
            </div>
            <h3 className="text-lg font-semibold text-white mb-2">
              No transactions yet
            </h3>
            <p className="text-slate-400 mb-6">
              Start tracking your income and expenses
            </p>
            <Link
              href="/admin/finance/transactions/new"
              className="inline-flex items-center gap-2 px-4 py-2 bg-blue-600 hover:bg-blue-500 text-white rounded-lg transition-colors"
            >
              <FaPlus className="w-4 h-4" />
              <span>Add Transaction</span>
            </Link>
          </div>
        ) : (
          <div className="divide-y divide-slate-700">
            {transactions.slice(0, 10).map((transaction: any) => (
              <div
                key={transaction.id}
                className="p-6 hover:bg-slate-750 transition-colors"
              >
                <div className="flex items-start justify-between">
                  <div className="flex items-start gap-4">
                    <div
                      className={`p-2 rounded-lg ${
                        transaction.type === "income"
                          ? "bg-green-500/10"
                          : "bg-red-500/10"
                      }`}
                    >
                      {transaction.type === "income" ? (
                        <FaArrowUp className="w-5 h-5 text-green-400" />
                      ) : (
                        <FaArrowDown className="w-5 h-5 text-red-400" />
                      )}
                    </div>

                    <div>
                      <div className="flex items-center gap-2 mb-1">
                        <p className="font-medium text-white">
                          {transaction.category || "Uncategorized"}
                        </p>
                        {transaction.type === "income" && (
                          <span className="px-2 py-0.5 bg-green-500/10 border border-green-500/20 rounded text-xs text-green-400">
                            Income
                          </span>
                        )}
                        {transaction.type === "expense" && (
                          <span className="px-2 py-0.5 bg-red-500/10 border border-red-500/20 rounded text-xs text-red-400">
                            Expense
                          </span>
                        )}
                      </div>

                      {transaction.description && (
                        <p className="text-sm text-slate-400 mb-1">
                          {transaction.description}
                        </p>
                      )}

                      {transaction.projects && (
                        <p className="text-xs text-slate-500">
                          Project: {transaction.projects.title}
                          {transaction.projects.clients && (
                            <> • {transaction.projects.clients.name}</>
                          )}
                        </p>
                      )}

                      <p className="text-xs text-slate-500 mt-1">
                        {new Date(
                          transaction.transaction_date,
                        ).toLocaleDateString("id-ID", {
                          day: "numeric",
                          month: "short",
                          year: "numeric",
                        })}
                      </p>
                    </div>
                  </div>

                  <div className="text-right">
                    <p
                      className={`text-lg font-bold ${
                        transaction.type === "income"
                          ? "text-green-400"
                          : "text-red-400"
                      }`}
                    >
                      {transaction.type === "income" ? "+" : "-"}
                      {formatCurrency(Number(transaction.amount))}
                    </p>
                    {transaction.payment_method && (
                      <p className="text-xs text-slate-500 mt-1">
                        {transaction.payment_method.replace("_", " ")}
                      </p>
                    )}
                  </div>
                </div>
              </div>
            ))}
          </div>
        )}
      </div>
    </div>
  );
}
