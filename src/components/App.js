import React, { Fragment, useState } from "react";
import { Form, Button, FormControl } from "react-bootstrap";

//Moment JS
import moment from "moment";

//Components
import DateStats from "./DateStats";

function App() {
  const [inputDate, setInputDate] = useState("");
  const [age, setAge] = useState("");
  const [showStat, setShowStat] = useState(false);
  const today = `${moment().format("Do MMMM YYYY")}`;
  const printBirthDay = () => {
    let date1 = moment(inputDate);
    let date2 = moment();
    let date = moment.duration(date2.diff(date1));
    setAge(`${date.years()} years ${date.months()} months ${date.days()} days`);
    setShowStat(true);
  };
  return (
    <Fragment>
      <h1 className="mt-3 text-center display-1">Age Teller</h1>
      <h3 c className="mt-3 text-center display-6">
        <em>
          Today's Date is <span className="text-primary">{`${today}`}</span>
        </em>
      </h3>
      <div className="p-3 text-center mt-3">
        <h2 className="text-center">Input your Birthday!</h2>
        <Form className="d-inline-flex p-1 mb-3">
          <FormControl
            type="date"
            className="me-1"
            onChange={(event) => {
              setInputDate(event.target.value);
            }}
          />
          <Button variant="outline-dark" onClick={printBirthDay}>
            Submit
          </Button>
        </Form>

        {showStat ? <DateStats age={age} /> : ""}
      </div>
    </Fragment>
  );
}

export default App;
