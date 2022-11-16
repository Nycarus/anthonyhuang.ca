import { Grid, IconButton } from "@mui/material";
import styled, {keyframes} from "styled-components";

export const ContactGrid = styled(Grid)`
    flex-direction: row;
    justify-content:center;
`;

const highlight = keyframes`
    0% {
        transform: scale(1);
    }

    100% {
        transform: scale(2);
    }
`

export const StyledIconButton = styled(IconButton)`
    &:hover {
        animation: ${highlight} ease-in-out 0.2s forwards;
    }
`