import FormModal from "@/app/components/FormModal";
import Pagination from "@/app/components/Pagination";
import Table from "@/app/components/Table";
import TableSearch from "@/app/components/TableSearch";
import { role, studentsData } from "@/lib/data";
import Image from "next/image";
import Link from "next/link";

type Student = {
  id: number;
  studentId: string;
  name: string;
  email?: string;
  photo: string;
  phone?: string;
  grade: number;
  class: string;
  address: string;
};

const columns = [
  {
    header: "Info",
    accessor: "info",
  },
  {
    header: "Student ID",
    accessor: "studentId",
    className: "hidden md:table-cell",
  },
  {
    header: "Grade",
    accessor: "grade",
    className: "hidden md:table-cell",
  },
  {
    header: "Phone",
    accessor: "phone",
    className: "hidden lg:table-cell",
  },
  {
    header: "Address",
    accessor: "address",
    className: "hidden lg:table-cell",
  },
  {
    header: "Actions",
    accessor: "action",
  },
];

const StudentListPage = () => {
  const renderRow = (item: Student) => {
    return (
      <tr key={item.id} className="border-b border-gray-200 even:bg-slate-50 text-sm hover:bg-lamaPurpleLight">
        <td className="py-4 px-4">
          <div className="flex items-center gap-6">
            <Image
              src={item.photo}
              alt={`${item.name} profile`}
              width={40}
              height={40}
              className="md:hidden xl:block w-10 h-10 rounded-full object-cover"
            />
            <div className="flex flex-col">
              <h3 className="font-semibold">{item.name}</h3>
              <p className="text-xs text-gray-500">{item?.class}</p>
            </div>
          </div>
        </td>
        <td className="hidden md:table-cell py-4 px-4">{item.studentId}</td>
        <td className="hidden md:table-cell py-4 px-4">{item.grade}</td>
        <td className="hidden md:table-cell py-4 px-4">{item.phone}</td>
        <td className="hidden lg:table-cell py-4 px-4">{item.phone}</td>
        <td className="hidden lg:table-cell py-4 px-4">{item.address}</td>
        <td className="py-4 px-4">
          <div className="flex items-center gap-6">
            <Link href={`/list/teachers/${item.id}`}>
              <button className="w-8 h-8 flex items-center justify-center rounded-full bg-lamaSky">
                <Image src="/view.png" alt="View" width={16} height={16} />
              </button>
            </Link>
            {role === "admin" && (
              //<button className="w-8 h-8 flex items-center justify-center rounded-full bg-lamaPurple">
                //<Image src="/delete.png" alt="Delete" width={16} height={16} />
              //</button>
              <FormModal table="student" type="delete" id={item.id}/>
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
        <h1 className="hidden md:block text-lg font-semibold">All Students</h1>
        <div className="flex flex-col md:flex-row items-center gap-8 w-full md:w-auto">
          <TableSearch />
          <div className="flex items-center gap-8 self-end">
            <button className="w-8 h-8 flex items-center justify-center rounded-full bg-lamaYellow">
              <Image src="/filter.png" alt="Filter" width={14} height={14} />
            </button>
            <button className="w-8 h-8 flex items-center justify-center rounded-full bg-lamaYellow">
              <Image src="/sort.png" alt="Sort" width={14} height={14} />
            </button>
            {role==="admin" && (
                //<button className="w-8 h-8 flex items-center justify-center rounded-full bg-lamaYellow">
              //<Image src="/plus.png" alt="Add" width={14} height={14} />
            //</button>
            <FormModal table="student" type="create"/>
            )}
  
          </div>
        </div>
      </div>
      {/*LIST*/}
      <Table columns={columns} data={studentsData} renderRow={renderRow} />
      {/*PAGINATION*/}
      <div className="mt-8">
        <Pagination />
      </div>
    </div>
  );
};

export default StudentListPage;
