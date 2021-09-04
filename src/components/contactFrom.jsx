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



function ContactFrom(){
    const [numerSendt, setNumberSendt] = useState(0)

    const sendMessage = ()=>{
        console.log("sendt")
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
                    <FormField name="name" htmlFor="textinput-id" label="Navn" help="Fult navn og/eller bedriftsnavn" required={true}>
                        <TextInput id="textinput-id-name" name="name" />
                    </FormField>
                    <FormField name="adress" htmlFor="textinput-id" label="Epostadresse" required={true}>
                        <TextInput id="textinput-id-adress" name="adress" />
                    </FormField>
                    <FormField name="message" htmlFor="textinput-id" label="Melding" required={true}>
                        <TextArea
                            name="message"
                            size="medium"
                            resize="vertical"
                            placeholder="Skriv din melding her.."
                            id="textinput-id"
                        />  
                    </FormField>
                    <Box direction="row" gap="medium">
                        <Button type="submit" primary label="Submit" color="accent-4"/>
                        <Button type="reset" label="Reset" color="accent-4" />
                    </Box>
                </Form>
            </Box>
         </Box>
        </MaxWidthContainer>
    )
}

export default ContactFrom