function TableItem(props) {
  const { nama, nilai_pekanan, nilai_bulanan, nilai_akhir, kehadiran } = props;

  let statusKelulusan;

  if (nilai_akhir >= 75 && kehadiran >= 80) {
    statusKelulusan = "Lulus";
  } else {
    statusKelulusan = "Tidak Lulus";
  }

  return (
    <tr>
      <td>{nama}</td>
      <td>{nilai_pekanan}</td>
      <td>{nilai_bulanan}</td>
      <td>{nilai_akhir}</td>
      <td>{kehadiran}%</td>
      <td
        style={{
          color: statusKelulusan === "Lulus" ? "black" : "black",
        }}
      >
        {statusKelulusan}
      </td>
    </tr>
  );
}

export default TableItem;