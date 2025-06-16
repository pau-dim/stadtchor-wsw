import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table"
import { parseCsvToRowsAndColumn } from "@/utils/parseCsv";
import fs from 'fs'
import path from "path";


export default function Auftritte() {

  const filePath = path.join(process.cwd(), "/data", "auftritte.csv");
  const csvData = fs.readFileSync(filePath, 'utf8');
  const csvAsRows = parseCsvToRowsAndColumn(csvData)
  console.log(csvAsRows)

  return (
    <>
      <h1 id="auftritte" className="">
        Unsere Auftritte 2025
      </h1>
      <div className="subtitle-heading">Den Stadtchor live erleben:</div>
      <div className="container mx-auto">

        <Table>
          <TableHeader>
            <TableRow>
              {csvAsRows[0].map((cell, i) => (
                <TableHead key={i}>{cell}</TableHead>

              ))}
            </TableRow>
          </TableHeader>
          <TableBody>
            {csvAsRows.map((row, i) => (
              i > 0 &&
              <TableRow key={i}>
                {row.map((cell, i) => (
                  <TableCell key={i}>{cell}</TableCell>
                ))}
              </TableRow>
            ))}

          </TableBody>
        </Table>
      </div>
    </>
  );
}

