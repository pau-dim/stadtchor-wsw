import {
  Table,
  TableBody,
  TableCaption,
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

      <h1 id="auftritte" className="text-center">
        Unsere Auftritte 2025
      </h1>
      <div className="container mx-auto">

        <Table>
          <TableCaption>Liste der Auftritte 2025</TableCaption>
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

