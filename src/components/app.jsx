import React, {Component} from 'react';
import Form from 'react-bootstrap/lib/Form';
import FormGroup from 'react-bootstrap/lib/FormGroup';
import FormControl from 'react-bootstrap/lib/FormControl';
import Button from 'react-bootstrap/lib/Button';
import Checkbox from 'react-bootstrap/lib/Checkbox';
import Radio from 'react-bootstrap/lib/Radio';
import ControlLabel from 'react-bootstrap/lib/ControlLabel';
import HelpBlock from 'react-bootstrap/lib/HelpBlock';

import Dragula from 'react-dragula';

function FieldGroup({id, label, help, ...props}) {
    return (
        <FormGroup controlId={id}>
            <ControlLabel>{label}</ControlLabel>
            <FormControl {...props}/> {help && <HelpBlock>{help}</HelpBlock>}
        </FormGroup>
    );
}

function handleLogin(e) {
    console.log('handleLogin', e.target);
}

export default class App extends Component {
    render() {
        console.log('render');
        return (
            <div>
                <div callback={handleLogin} ref={this.dragulaDecorator2}>
                    <FieldGroup id="formControlsText" type="text" label="Text" placeholder="Enter text"/>
                    <FieldGroup id="formControlsEmail" type="email" label="Email address" placeholder="Enter email"/>
                    <FieldGroup id="formControlsPassword" label="Password" type="password"/>
                    <FieldGroup id="formControlsFile" type="file" label="File" help="Example block-level help text here."/>

                    <Checkbox checked readOnly>
                        Checkbox
                    </Checkbox>
                    <Radio checked readOnly>
                        Radio
                    </Radio>

                    <FormGroup>
                        <Checkbox inline>
                            1
                        </Checkbox>
                        {' '}
                        <Checkbox inline>
                            2
                        </Checkbox>
                        {' '}
                        <Checkbox inline>
                            3
                        </Checkbox>
                    </FormGroup>
                    <FormGroup>
                        <Radio inline>
                            1
                        </Radio>
                        {' '}
                        <Radio inline>
                            2
                        </Radio>
                        {' '}
                        <Radio inline>
                            3
                        </Radio>
                    </FormGroup>

                    <FormGroup controlId="formControlsSelect">
                        <ControlLabel>Select</ControlLabel>
                        <FormControl componentClass="select" placeholder="select">
                            <option value="select">select</option>
                            <option value="other">...</option>
                        </FormControl>
                    </FormGroup>
                    <FormGroup controlId="formControlsSelectMultiple">
                        <ControlLabel>Multiple select</ControlLabel>
                        <FormControl componentClass="select" multiple>
                            <option value="select">select (multiple)</option>
                            <option value="other">...</option>
                        </FormControl>
                    </FormGroup>

                    <FormGroup controlId="formControlsTextarea">
                        <ControlLabel>Textarea</ControlLabel>
                        <FormControl componentClass="textarea" placeholder="textarea"/>
                    </FormGroup>

                    <FormGroup>
                        <ControlLabel>Static text</ControlLabel>
                        <FormControl.Static>
                            email@example.com
                        </FormControl.Static>
                    </FormGroup>

                    <Button type="submit" onClick={handleLogin}>
                        Submit
                    </Button>
                </div>
                <div className="" ref={this.dragulaDecorator}>
                    <div>This is one</div>
                    <div>This is two</div>
                    <div>This is three</div>
                    <div>This is four</div>
                    <div>This is five</div>
                    <FieldGroup id="formControlsText" type="text" label="Text" placeholder="Enter text"/>
                    <FieldGroup id="formControlsEmail" type="email" label="Email address" placeholder="Enter email"/>
                </div>
            </div>
        );
    }

    dragulaDecorator = (componentBackingInstance) => {
        if (componentBackingInstance) {
            let options = { };
            Dragula([componentBackingInstance], options);
        }
    };

    dragulaDecorator2 = (componentBackingInstance) => {
        if (componentBackingInstance) {
            let options = { };
            Dragula([componentBackingInstance], options);
        }
    };
}
