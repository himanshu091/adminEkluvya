import React from 'react'
import {Button,Form} from 'react-bootstrap';




function AddClass() {
    return (
        
            
<Form>
  <Form.Group controlId="formBasicEmail">
    <Form.Label>Class Name</Form.Label>
    <Form.Control type="text" placeholder="Class" />
    <Form.Text className="text-muted">
     Type Class like 1,2,3
    </Form.Text>
  </Form.Group>
  <Form.Group controlId="exampleForm.ControlTextarea1">
    <Form.Label>About Class</Form.Label>
    <Form.Control as="textarea" rows={3} />
  </Form.Group>
        
  <Form.Group controlId="formBasicPassword">
    <Form.Label>Cost Of Each Session</Form.Label>
    <Form.Control type="number" placeholder="Session Cost" />
  </Form.Group>

  <Button variant="primary" type="submit">
    Submit
  </Button>
</Form>

   
    )
}

export default AddClass
