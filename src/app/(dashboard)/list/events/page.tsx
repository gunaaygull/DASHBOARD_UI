import Pagination from "@/app/components/Pagination";
import Table from "@/app/components/Table";
import TableSearch from "@/app/components/TableSearch";
import { eventsData, role } from "@/lib/data";
import Image from "next/image";
import Link from "next/link";

type Event = {
  id: number;
  title: string;
  class: string;
  date: string;
  startTime:string;
  endTime:string;
};

const columns = [
  {
    header: "Title",
    accessor: "title",
  },
  {
    header: "Class",
    accessor: "class",
  },
  {
    header: "Date",
    accessor: "Date",
    className:"hidden md:table-cell",
  },
  {
    header: "Start Time",
    accessor: "start time",
    className:"hidden md:table-cell",
  },
  {
    header: "End Time",
    accessor: "end time",
    className:"hidden md:table-cell",
  },
  {
    header: "Actions",
    accessor: "action",
    
  },
];

const EventListPage = () => {
  const renderRow = (item: Event) => {
    return (
      <tr key={item.id} className="border-b border-gray-200 even:bg-slate-50 text-sm hover:bg-lamaPurpleLight">
        <td className="py-4 px-6">{item.title}</td>
        <td className="py-4 px-6">{item.class}</td>
        <td className="py-4 px-6">{item.date}</td>
        <td className="py-4 px-6">{item.startTime}</td>
        <td className="py-4 px-6">{item.endTime}</td>
        <td className="py-4 px-6">
          <div className="flex items-center gap-4">
            <Link href={`/list/exams/${item.id}`}>
              <button className="w-8 h-8 flex items-center justify-center rounded-full bg-lamaSky">
                <Image src="/edit.png" alt="Edit" width={16} height={16} />
              </button>
            </Link>
            {role === "admin" && (
              <button className="w-8 h-8 flex items-center justify-center rounded-full bg-lamaPurple">
                <Image src="/delete.png" alt="Delete" width={16} height={16} />
              </button>
            )}
          </div>
        </td>
      </tr>
    );
  };

  return (
    <div className="bg-white p-8 rounded-md flex-1 m-6 mt-0">
      {/*TOP*/}
      <div className="flex items-center justify-between mb-8">
        <h1 className="text-lg font-semibold">All Events</h1>
        <div className="flex flex-col md:flex-row items-center gap-4 w-full md:w-auto">
          <TableSearch />
          <div className="flex items-center gap-4 self-end">
            <button className="w-10 h-10 flex items-center justify-center rounded-full bg-lamaYellow">
              <Image src="/filter.png" alt="Filter" width={14} height={14} />
            </button>
            <button className="w-10 h-10 flex items-center justify-center rounded-full bg-lamaYellow">
              <Image src="/sort.png" alt="Sort" width={14} height={14} />
            </button>
            {role === "admin" && (
              <button className="w-10 h-10 flex items-center justify-center rounded-full bg-lamaYellow">
                <Image src="/plus.png" alt="Add" width={14} height={14} />
              </button>
            )}
          </div>
        </div>
      </div>
      {/*LIST*/}
      <Table columns={columns} data={eventsData} renderRow={renderRow} />
      {/*PAGINATION*/}
      <div className="mt-8">
        <Pagination />
      </div>
    </div>
  );
};

export default EventListPage;
