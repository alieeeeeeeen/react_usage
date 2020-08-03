import React, { useState, useEffect } from 'react';


const withErrorHandler = (WrapperdComponent, axios) => {
    return props => {
        const [error, setError] = useState(null);

        const reqInterceptor = axios.interceptors.request.use(req => {
            setError(null);
            return req
        })
        const resInterceptor = axios.interceptors.response.use(res => {
            return res,
            error => {
                setError(error)
            }
        })

        useEffect(() => {
            return () => {
                axios.interceptors.request.eject(reqInterceptor);
                axios.interceptors.response.eject(resInterceptor);
            }
        }, [reqInterceptor, resInterceptor])

    }
}