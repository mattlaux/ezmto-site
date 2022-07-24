const TableSection = () => {
  return (
    <article className="container">
      <div className="row text-center mt-3 mt-md-5 pt-3 pt-md-5">
        <h2>Simple, Straight-Forward Cost Savings</h2>
      </div>
      <div className="row text-center">
        <h3>
          Costs of doing a 100 Isometric Takeoff In-House vs Sending it to ezMTO
        </h3>
      </div>
      <table className="table table-striped table-bordered">
        <thead className="table-secondary">
          <tr>
            <th scope="col"></th>
            <th scope="col">Your Material Takeoff</th>
            <th scope="col">ezMTO Material Takeoff</th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td>Your Employees&apos; Time (1)</td>
            <td>8 Hours</td>
            <td>0 Hours</td>
          </tr>
          <tr>
            <td>Direct Cost to You (2)</td>
            <td>$200</td>
            <td>$120</td>
          </tr>
          <tr>
            <td>Indirect Cost to You (3)</td>
            <td>$80</td>
            <td>$0</td>
          </tr>
          <tr>
            <td>Office Costs for Employees</td>
            <td>Significant</td>
            <td>$0</td>
          </tr>
        </tbody>
        <tfoot className="table-secondary">
          <tr>
            <td>Total Cost to You ($)</td>
            <td>$280 + Office Costs</td>
            <td>$120</td>
          </tr>
        </tfoot>
      </table>
      <ol>
        <li>Avg determined from previous takeoffs</li>
        <li>Uses hourly rate of $25 (Frequently much higher)</li>
        <li>Uses indirect rate of 40% from SBA.gov</li>
      </ol>
    </article>
  );
};

export default TableSection;
