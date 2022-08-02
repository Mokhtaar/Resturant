import React from "react";
import { Form, Button } from "react-bootstrap";
import Item from "../Components/Item";

type Props = {};

const checkout = (props: Props) => {
  return (
    <div className="row">
      <Form className="col-md-8">
        <fieldset disabled>
          <Form.Group className="mb-3">
            <Form.Label htmlFor="disabledTextInput">Disabled input</Form.Label>
            <Form.Control id="disabledTextInput" placeholder="Disabled input" />
          </Form.Group>
          <Form.Group className="mb-3">
            <Form.Label htmlFor="disabledSelect">
              Disabled select menu
            </Form.Label>
            <Form.Select id="disabledSelect">
              <option>Disabled select</option>
            </Form.Select>
          </Form.Group>
          <Form.Group className="mb-3">
            <Form.Check
              type="checkbox"
              id="disabledFieldsetCheck"
              label="Can't check this"
            />
          </Form.Group>
          <Button type="submit">Submit</Button>
        </fieldset>
      </Form>
      <div className="col-md-4">
      <Item />
      </div>
    </div>
  );
};

export default checkout;
