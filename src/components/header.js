import React from 'react';
import axios from 'axios';
import { withErrorHandler } from './errorhandler';

export default withErrorHandler((props) => {
    return (
        <div>{props.header}</div>
    )
}, axios)