const statusStyles = {
  "In Progress": "text-[#F8A72D]",
  "Not Started": "text-[C43131]",
  "In Review": "text-[#543CDA]",
  Completed: "text-[#00D073]",
};

const milestone = [
  { status: "Pending Confirmation" },
  { status: "Pending Confirmation" },
  { status: "Overdue" },
  { status: "Paid" },
  { status: "Paid" },
];

export default function DeliverablesTable() {
  return (
    <div className="py-4 rounded-xl space-y-4">
      {/* <div className="flex justify-between items-center mb-4">
        <h2 className="font-bold text-lg text-gray-800">Next Deliverables (This Week)</h2>
        <a href="#" className="text-lg font-medium">View All</a>
      </div> */}

      {/* Independent table header */}
      <div className="overflow-hidden rounded-xl">
        <table className="w-full text-sm text-left">
          <thead>
            <tr className="bg-[#553bd96d] text-[#543CDA]">
              <th className="py-6 px-6 font-bold text-lg rounded-tl-xl">Invoice #</th>
              <th className="py-6 px-6 font-bold text-lg">Amount</th>
              <th className="py-6 px-6 font-bold text-lg">Client</th>
              <th className="py-6 px-6 font-bold text-lg">Project</th>
              <th className="py-6 px-6 font-bold text-lg">Milestone</th>
              <th className="py-6 px-6 font-bold text-lg">Status</th>
              <th className="py-6 px-6 font-bold text-lg">Date</th>
              <th className="py-6 px-6 font-bold text-lg rounded-tr-xl">Actions</th>
            </tr>
          </thead>
        </table>
      </div>

      {/* Independent table body */}
      <div className="space-y-2">
        {milestone.map((d, idx) => (
          <div
            key={idx}
            className="grid grid-cols-6 bg-white shadow rounded-xl overflow-hidden text-sm hover:bg-gray-50 transition"
          >
            <div className="py-6 px-6 font-semibold text-gray-500">INV-104</div>
            <div className="py-6 px-6 font-semibold text-gray-500 ml-12">#250,000</div>
            <div className="py-6 px-6 font-semibold text-gray-500 ml-10">Tayo Wellens</div>
            <div className="py-6 px-6 font-semibold text-gray-500 ml-10">Food Delivery Website</div>
            <div className="py-6 px-6 font-semibold text-gray-500 ml-10">Wireframe Design</div>
            <div className="py-6 px-6 font-semibold text-gray-500">
              <span className={`px-6 py-6 rounded-full font-semibold text-gray-500 ${statusStyles[d.status]}`}>
                {d.status}
              </span>
            </div>
            <div className="py-6 px-6 font-semibold text-gray-500">July 1</div>
            <div className="py-6 px-6 text-xl text-gray-400 cursor-pointer ml-8">...</div>
          </div>
        ))}
      </div>
    </div>
  );
}