import React, { Fragment, useState } from "react";
import { Form, Button } from "react-bootstrap";

//Moment JS
import moment from "moment";

//Components
import DateStats from "./DateStats";

function App() {
  const [inputDate, setInputDate] = useState("");
  const [age, setAge] = useState("");
  const [showStat, setShowStat] = useState(false);
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
      <div className="p-3 text-center mt-3">
        <h2 className="text-center">Input your Birthday!</h2>
        <Form className="d-inline-flex p-2 mb-3">
          <Form.Control
            type="date"
            className="me-2"
            onChange={(event) => {
              setInputDate(event.target.value);
            }}
          />
          <Button variant="outline-dark" onClick={printBirthDay}>
            Submit
          </Button>
        </Form>
        {showStat ? (
          <DateStats today={`${moment().format("Do MMMM YYYY")}`} age={age} />
        ) : (
          ""
        )}
      </div>
    </Fragment>
  );
}

export default App;
