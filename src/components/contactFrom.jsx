import React, { useState } from "react";
import { 
    Box,
    Heading,
    Form,
    FormField,
    TextInput,
    Button,
    TextArea, 
    Paragraph
} from "grommet"

import MaxWidthContainer from "./MaxWidthContainer";

import { send } from 'emailjs-com';


function ContactFrom(){
    const [numerSendt, setNumberSendt] = useState(0)

    const sendMessage = (value) => {
        send(
            process.env.GATSBY_SERVICE_ID,
            process.env.GATSBY_TEMPLATE_ID,
            value,
            process.env.GATSBY_USER_ID
          )
            .then((response) => {
              console.log('SUCCESS!', response.status, response.text);
            })
            .catch((err) => {
              console.log('FAILED...', err);
            });
    }
    return(
        <MaxWidthContainer>
            <Box direction="row-responsive" fill="horizontal" gap="large" margin={{vertical:"large"}}>
                <Box alignSelf="center" pad="medium">
                    <Heading level="2" margin={{vertical:"small"}}>Kontakt oss</Heading>
                    <Paragraph>Integer vitae ante tempus, tempus arcu sit amet, fringilla magna. Nullam nisl elit, hendrerit in nibh et, eleifend pretium purus. Ut pretium eros ligula, ac lacinia felis condimentum vel. Praesent ut urna ornare, lobortis sem ut, iaculis est. Nulla cursus erat eleifend suscipit feugiat. Fusce hendrerit massa sollicitudin sapien sollicitudin, sit amet condimentum nisl luctus. Donec in commodo eros. Cras enim turpis, sagittis nec purus a, ornare iaculis dolor.</Paragraph>
                </Box>
                <Box width="medium" alignSelf="center">
                <Form onSubmit={(value) => {sendMessage(value)}}>
                    <FormField name="name" htmlFor="textinput-id-name" label="Navn" help="Fult navn og/eller bedriftsnavn" required={true}>
                        <TextInput id="textinput-id-name" name="name" />
                    </FormField>
                    <FormField name="adress" htmlFor="textinput-id-adress" label="Epostadresse" required={true}>
                            <TextInput id="textinput-id-adress" name="adress" />
                    </FormField>
                    <FormField name="message" htmlFor="textinput-id-melding" label="Melding" required={true}>
                        <TextArea
                            name="message"
                            size="medium"
                            resize="vertical"
                            placeholder="Skriv din melding her.."
                            id="textinput-id-melding"
                        />  
                    </FormField>
                    <Box direction="row" gap="medium">
                        <Button type="submit" primary label="Submit" color="accent-4" />
                        <Button type="reset" label="Reset" color="accent-4" />
                    </Box>
                </Form>
            </Box>
         </Box>
        </MaxWidthContainer>
    )
}

export default ContactFrom