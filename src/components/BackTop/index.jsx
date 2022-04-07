import p from 'prop-types';
import * as styled from './styles';
import { ArrowCircleUp } from '@styled-icons/material-outlined/ArrowCircleUp';

export const BackTop = () => {
    return (
        <styled.Container href='#' aria-label='Back to top' title='Back to top'>
            <ArrowCircleUp/>
        </styled.Container>
    );
};

