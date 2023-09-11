import * as React from "react";
import Table from "@mui/material/Table";
import TableBody from "@mui/material/TableBody";
import TableCell from "@mui/material/TableCell";
import TableContainer from "@mui/material/TableContainer";
import TableHead from "@mui/material/TableHead";
import TableRow from "@mui/material/TableRow";
import Paper from "@mui/material/Paper";
import { useTranslation } from "react-i18next";
import LibraryBooksIcon from "@mui/icons-material/LibraryBooks";
import MenuBookIcon from "@mui/icons-material/MenuBook";
import TaskIcon from "@mui/icons-material/Task";
import { useNavigate } from "react-router-dom";

export default function BasicTable({ rows }) {
  const navigate = useNavigate();
  const handleIconClick = (link) => {
    navigate(link);
  };

  const { t } = useTranslation();

  return (
    <TableContainer component={Paper}>
      <Table
        sx={{ maxWidth: "100%", marginRight: "-15px" }}
        aria-label="simple table"
      >
        <TableHead>
          <TableRow>
            <TableCell>{t("unit_name")}</TableCell>
            <TableCell align="center">{t("vocabulary")}</TableCell>
            <TableCell align="center">{t("reading")}</TableCell>
            <TableCell align="center">{t("activities")}</TableCell>
          </TableRow>
        </TableHead>
        <TableBody>
          {rows.map((row) => (
            <TableRow
              key={row.moduleName}
              sx={{ "&:last-child td, &:last-child th": { border: 0 } }}
            >
              <TableCell
                component="th"
                scope="row"
                sx={{ color: row.isCompleted ? "green" : "inherit" }}
              >
                {row.moduleName}
              </TableCell>

              <TableCell align="center">
                <LibraryBooksIcon
                  style={{ cursor: "pointer" }}
                  onClick={() => handleIconClick(row.moduleLink)}
                />
              </TableCell>
              <TableCell align="center">
                <MenuBookIcon
                  style={{ cursor: "pointer" }}
                  onClick={() => handleIconClick(row.moduleLink)}
                />
              </TableCell>
              <TableCell align="center">
                <TaskIcon
                  style={{ cursor: "pointer" }}
                  onClick={() => handleIconClick(row.moduleLink)}
                />
              </TableCell>
            </TableRow>
          ))}
        </TableBody>
      </Table>
    </TableContainer>
  );
}
