/* eslint-disable @typescript-eslint/no-explicit-any */
import React from "react";
import Link from "next/link";
import { createServerSupabaseClient } from "@/lib/supabase/server";
import { FaPlus, FaArrowUp, FaArrowDown, FaArrowLeft } from "react-icons/fa";
import { DeleteButton } from "@/components/admin/DeleteButton";

export default async function TransactionsPage() {
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
    .order("transaction_date", { ascending: false });

  const formatCurrency = (amount: number) => {
    return `Rp ${Number(amount).toLocaleString("id-ID")}`;
  };

  return (
    <div>
      {/* Back Button */}
      <Link
        href="/admin/finance"
        className="inline-flex items-center gap-2 text-slate-400 hover:text-white transition-colors mb-6"
      >
        <FaArrowLeft className="w-4 h-4" />
        <span>Back to Finance</span>
      </Link>

      {/* Header */}
      <div className="flex items-center justify-between mb-8">
        <div>
          <h1 className="text-2xl font-bold text-white mb-2">
            All Transactions
          </h1>
          <p className="text-slate-400">Complete transaction history</p>
        </div>

        <Link
          href="/admin/finance/transactions/new"
          className="flex items-center gap-2 px-4 py-2 bg-blue-600 hover:bg-blue-500 text-white rounded-lg transition-colors"
        >
          <FaPlus className="w-4 h-4" />
          <span>Add Transaction</span>
        </Link>
      </div>

      {/* Transactions Table */}
      <div className="bg-slate-800 border border-slate-700 rounded-xl overflow-hidden">
        {!transactions || transactions.length === 0 ? (
          <div className="p-12 text-center">
            <p className="text-slate-400">No transactions found</p>
          </div>
        ) : (
          <div className="overflow-x-auto">
            <table className="w-full">
              <thead>
                <tr className="border-b border-slate-700">
                  <th className="text-left px-6 py-4 text-sm font-semibold text-slate-300">
                    Date
                  </th>
                  <th className="text-left px-6 py-4 text-sm font-semibold text-slate-300">
                    Type
                  </th>
                  <th className="text-left px-6 py-4 text-sm font-semibold text-slate-300">
                    Category
                  </th>
                  <th className="text-left px-6 py-4 text-sm font-semibold text-slate-300">
                    Description
                  </th>
                  <th className="text-left px-6 py-4 text-sm font-semibold text-slate-300">
                    Project
                  </th>
                  <th className="text-right px-6 py-4 text-sm font-semibold text-slate-300">
                    Amount
                  </th>
                  <th className="text-right px-6 py-4 text-sm font-semibold text-slate-300">
                    Actions
                  </th>
                </tr>
              </thead>
              <tbody>
                {transactions.map((transaction: any) => (
                  <tr
                    key={transaction.id}
                    className="border-b border-slate-700 hover:bg-slate-750 transition-colors"
                  >
                    <td className="px-6 py-4 text-sm text-slate-300">
                      {new Date(
                        transaction.transaction_date,
                      ).toLocaleDateString("id-ID")}
                    </td>
                    <td className="px-6 py-4">
                      <div className="flex items-center gap-2">
                        {transaction.type === "income" ? (
                          <>
                            <FaArrowUp className="w-4 h-4 text-green-400" />
                            <span className="text-sm text-green-400">
                              Income
                            </span>
                          </>
                        ) : (
                          <>
                            <FaArrowDown className="w-4 h-4 text-red-400" />
                            <span className="text-sm text-red-400">
                              Expense
                            </span>
                          </>
                        )}
                      </div>
                    </td>
                    <td className="px-6 py-4 text-sm text-slate-300">
                      {transaction.category || "-"}
                    </td>
                    <td className="px-6 py-4 text-sm text-slate-400">
                      {transaction.description || "-"}
                    </td>
                    <td className="px-6 py-4 text-sm text-slate-400">
                      {transaction.projects?.title || "-"}
                    </td>
                    <td className="px-6 py-4 text-right">
                      <span
                        className={`text-sm font-semibold ${
                          transaction.type === "income"
                            ? "text-green-400"
                            : "text-red-400"
                        }`}
                      >
                        {transaction.type === "income" ? "+" : "-"}
                        {formatCurrency(Number(transaction.amount))}
                      </span>
                    </td>
                    <td className="px-6 py-4">
                      <div className="flex justify-end">
                        <DeleteButton
                          id={transaction.id}
                          table="transactions"
                          label="transaksi ini"
                        />
                      </div>
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        )}
      </div>
    </div>
  );
}
