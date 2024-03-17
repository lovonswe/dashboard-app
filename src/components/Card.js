import React from 'react'
import { TaskCard, LeftPart, RightPart, Text, IconContainer, Icon } from '../style/Card'
import ListAltIcon from '@mui/icons-material/ListAlt';


export default function Card({task}) {
    return (
        <TaskCard>
            <LeftPart>
                <input type="checkbox" />
            </LeftPart>
            <RightPart>
                <Text>{task.taskName}</Text>
                <Text>{task.description}</Text>
                <IconContainer>
                    <Icon><ListAltIcon /></Icon>
                    <Icon>Edit</Icon>
                    <Icon>Share</Icon>
                </IconContainer>
            </RightPart>
        </TaskCard>
    )
}
