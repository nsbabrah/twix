import React,{Component} from 'react'
import {FormGroup,Glyphicon,Row,Col,Form,FormControl,Button,HelpBlock,ControlLabel} from 'react-bootstrap'

export default class FormExample extends React.Component {
    constructor(props, context) {
        super(props, context);

        this.handleChange = this.handleChange.bind(this);

        this.state = {
            value: ''
        };
    }

    getValidationState() {
        const length = this.state.value.length;
        if (length > 10) return 'success';
        else if (length > 5) return 'warning';
        else if (length > 0) return 'error';
        return null;
    }

    handleChange(e) {
        this.setState({ value: e.target.value });
    }

    render() {
        return (
            <Form inline>
                <FormGroup
                    controlId="formBasicText"
                    // validationState={this.getValidationState()}
                    inline={true}
                    bsSize="large"
                >
                    <Row className="show-grid">

                  <FormControl
                        type="text"
                        value={this.state.value}
                        placeholder="Enter text"
                        onChange={this.handleChange}
                    />

                    <FormControl componentClass="select" placeholder="select">
                        <option value="select">select</option>
                        <option value="other">2</option>
                        <option value="other">2</option>
                        <option value="other">2</option>
                        <option value="other">2</option>
                        <option value="other">2</option>
                        <option value="other">2</option>
                        <option value="other">2</option>
                        <option value="other">2</option>
                        <option value="other">2</option>
                    </FormControl>
   <FormControl componentClass="select" placeholder="select">
                        <option value="select">select</option>
                        <option value="other">2</option>
                        <option value="other">2</option>
                        <option value="other">2</option>
                        <option value="other">2</option>
                        <option value="other">2</option>
                        <option value="other">2</option>
                        <option value="other">2</option>
                        <option value="other">2</option>
                        <option value="other">2</option>
                    </FormControl>


                    <Button type="submit" bsStyle="success" style={{backgroundColor:'green'}}> <Glyphicon glyph="search" /></Button>
                    </Row>
                </FormGroup>
            </Form>
        );
    }
}

