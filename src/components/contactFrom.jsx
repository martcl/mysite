import React, { useState } from "react";
import { 
    Box,
    Heading,
    Form,
    FormField,
    TextInput,
    Button,
    TextArea, 
    Paragraph,
} from "grommet"

import MaxWidthContainer from "./MaxWidthContainer";
import AlertMessage from "./alertMessage";


function ContactFrom(){
    const [count, setCount] = useState(0);

    const [visibleOk, setVisibleOk] = useState(false);
    const [visibleBad, setVisibleBad] = useState(false);

    const sendMessage = ({ value }) => {
        console.log(value)
        if (count < 7){
            const formData = new FormData();
            formData.append(
                'name',
                value.name
            )
            formData.append(
                'email',
                value.adress
            )
            formData.append(
                'message',
                value.message
            )
            fetch("https://getform.io/f/f53aab5d-6b3e-4e7a-a41c-2d04d5538136", {
                    method: "POST",
                    body: formData,
            })
            .catch(error => {
                console.log(error)
                setVisibleBad(true)
            })
            .then(setVisibleOk(true))
            .then(setCount(count+1))
            
        } else if (count > 7){
            setVisibleOk(true)
        }
    }

    return(
        <MaxWidthContainer>
            {visibleOk && (
                <AlertMessage 
                    onClose={() => setVisibleOk(false)} 
                    message="Vi har motatt meldingen din!"
                    color="status-ok"
                    pos="top"
                />
            )}
            {visibleBad && (
                <AlertMessage 
                    onClose={() => setVisibleBad(false)} 
                    message="Ops! Her skjedde det noe galt"
                    color="status-error"
                    pos="top"
                />
            )}

            <Box direction="row-responsive" fill="horizontal" gap="large" margin={{vertical:"large"}}>
                <Box alignSelf="center" pad="medium">
                    <Heading level="2" margin={{vertical:"small"}}>Kontakt oss</Heading>
                    <Paragraph>
                        Ønsker dere å gjennomføre ett prosjekt? Trenger dere en utvikler? Ta kontakt! 
                        Spørsmål og henveldenser blir tatt godt imot, og vil bli besvart kjappest via
                        epost og SMS. 
                        <br />
                        <br />
                        Epost: <a href="mailto:martin@litenutvikler.no"> martin@litenutvikler.no </a>
                        <br />
                        Telefon: +47 918 50 048
                    </Paragraph>
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
                        <Button type="reset" label="Reset" color="accent-4" />
                        <Button type="submit" primary label="Send" color="accent-4" />
                    </Box>
                </Form>
            </Box>
         </Box>
        </MaxWidthContainer>
    )
}

export default ContactFrom