import React from 'react'
import { useRegister } from '../../contexts/Register';
import { Container, ProgressDone } from './styles'

export default () => {
    const { step } = useRegister();

    return (
        <Container>
            <ProgressDone step={step} />
        </Container>
    )
}
